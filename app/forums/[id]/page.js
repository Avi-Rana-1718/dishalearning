import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";
import AsideBtns from "@/app/_components/AsideBtns";
import Header from "@/app/_components/Header";
import Breadcrumb from "@/app/_components/Breadcrumb";

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

export async function generateMetadata({params}) {
  let data = await getData(params.id);
  if(data==null) {
    return {
      title: "Forums - Disha Learning"
    }
  }
  
  return {
    title: data.question + " | Forums - Disha Learning",
    description: data.answer.replace(/<[^>]*>?/gm, ''),
    openGraph : {
      title: data.question + " | Forums - Disha Learning",
      description: data.answer.replace(/<[^>]*>?/gm, ''),
      type: "article",
      url: "https://dishalearning.in/forums/" + params.id
    }
}
}


export default async function Page({params}) {

  let data = await getData(params.id);
  // console.log(data);
  
  return (
        <>
      <Header />
        <main className="p-3 pt-0 bg-[#CEFFD8] md:flex justify-center">

          <aside className="mr-3 hidden">
            <div className="outline inline-block outline-2 outline-slate-400/25 rounded px-2 py-1.5 bg-[#fff]"s>
              <h3>Blogs</h3>
            </div>
          </aside>

            <div className="grow outline outline-2 min-h-[80vh] outline-slate-400/25 rounded md:max-w-[50vw] p-4 bg-[#fff]">
            <Breadcrumb links={["/forums"]} />
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