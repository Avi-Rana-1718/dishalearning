import Nav from "@/app/_components/Nav";
import { faTriangleExclamation, faUpRightFromSquare, faHouse, faQuestion, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";
import AsideBtns from "@/app/_components/AsideBtns";

async function getData(id) {
  
const firebaseConfig = {
  apiKey: "AIzaSyCciV3sOwkss506-379tA5SanyezujbYNA",
  authDomain: "ans-dishalearning.firebaseapp.com",
  databaseURL: "https://ans-dishalearning-default-rtdb.firebaseio.com",
  projectId: "ans-dishalearning",
  storageBucket: "ans-dishalearning.appspot.com",
  messagingSenderId: "82099435116",
  appId: "1:82099435116:web:f4f39e49e614a93968ca49",
  measurementId: "G-L2JJWD8DNT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let data;

const dbRef = ref(getDatabase());
await get(child(dbRef, `data/${id}`)).then((snapshot) => {
  if (snapshot.exists()) {
    data = snapshot.val();
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
}); 

return data;
}

export default async function Page({params}) {

  let data = await getData(params.id);
  // console.log(data);
  
  return (
        <>
         <header className=" bg-[#ceffd8] md:pb-10">
        <Nav navLinks={false} />
        <div className="hidden md:block text-left md:px-10 md:py-10">
          {/* <span className="text-xs flex align-baseline p-2"><FontAwesomeIcon icon={faChevronLeft} className="inline w-[0.5em] mr-0.5"/>Back to list</span> */}
          <h3 className="text-4xl text-[#1e1e1e] mb-3 hover:underline"><Link href="/forums">Forums</Link></h3>
          <span className="text-[#6a6a6a]">Answers to all your questions</span>
        </div>
      </header>
        <main className="p-3 md:p-5 md:flex bg-[#ceffd8] md:bg-[#fff]">
            <div className="grow outline oultine-1 outline-2 min-h-[70vh] outline-slate-400/25 rounded md:max-w-[80vw] p-4 bg-[#fff]">
                    {/* BREADCRUMB */}
        <div className="md:text-sm text-xs mb-2">
        <Link href="/" className="text-blue-500 mx-0.5 hover:underline">Home</Link>{">"}<Link href="/forums" className="text-blue-500 mx-1 hover:underline">Forums</Link>
        </div>
            <h4 className="text-[#04AA6D] inline">Question : </h4>
            <span className="" dangerouslySetInnerHTML={{__html:data.question}}></span>
            <small className="block mt-1">Submitted on {(new Date(data.timestamp).getDate() + "/" + (new Date(data.timestamp).getMonth()+1) + "/" + new Date(data.timestamp).getFullYear())} | Answered by {(data.hasOwnProperty("author")?data.author:"Vandana Rana")}</small>
            <h4 className="text-[#04AA6D] mt-5">Answer : </h4>
            <p dangerouslySetInnerHTML={{__html:data.answer}}></p>
            </div>

          <AsideBtns />
       
        </main>
        </>
    )
}