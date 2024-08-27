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
         <header className=" bg-[#ceffd8]">
        <Nav navLinks={false} />
        {/* BREADCRUMB */}
        <div className="md:text-sm text-xs pl-3 mt-5">
        <Link href="/" className="text-blue-500 mx-0.5 hover:underline">Home</Link>{">"}<Link href="/forums" className="text-blue-500 mx-1 hover:underline">Forums</Link>
        </div>
      </header>
        <main className="p-3 bg-[#ceffd8] md:flex">
            <div className="grow outline oultine-1 outline-2 min-h-[80vh] outline-slate-400/25 rounded md:max-w-[80vw] p-4 bg-[#fff]">
            <h4 className="text-[#04AA6D] inline font-medium">Question : </h4>
            <span className="text-base" dangerouslySetInnerHTML={{__html:data.question}}></span>
            <small className="block mt-1">Submitted on {(new Date(data.timestamp).getDate() + "/" + (new Date(data.timestamp).getMonth()+1) + "/" + new Date(data.timestamp).getFullYear())} | Answered by {(data.hasOwnProperty("author")?data.author:"Vandana Rana")}</small>
            <h4 className="text-[#04AA6D] mt-5 font-medium">Answer : </h4>
            <p dangerouslySetInnerHTML={{__html:data.answer}}></p>
            </div>

          <AsideBtns />
       
        </main>
        </>
    )
}