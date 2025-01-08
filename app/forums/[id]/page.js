import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";
import Header from "@/app/_components/Header";
import Breadcrumb from "@/app/_components/Breadcrumb";
import format from "md-extend";
import ShareBtn from "@/app/_components/ShareBtn";

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
    title: data.question.replace(/[&\/\\#,+()$~%.'":*?<>{}_]/g,'') + " | Forums - Disha Learning",
    description: data.answer.replace(/[&\/\\#,+()$~%.'":*?<>{}_]/g,''),
    openGraph : {
      title: data.question.replace(/[&\/\\#,+()$~%.'":*?<>{}_]/g,'') + " | Forums - Disha Learning",
      description: data.answer.replace(/[&\/\\#,+()$~%.'":*?<>{}_]/g,''),
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
        <main className="p-3 pt-2 md:ml-5 mt-[-7rem] md:flex justify-center">
            <div className="grow outline outline-2 min-h-[80vh] outline-slate-400/25 rounded md:max-w-[50vw] p-4 bg-[#fff]">
            <Breadcrumb links={["/answers"]} />
            <h4 className="text-[#04AA6D] inline font-medium">Question : </h4>
            <span className="text-base" dangerouslySetInnerHTML={{__html:format(data.question)}}></span>
            <div className="flex justify-between align-baseline">
            <small className="block mt-2 text-[#3e3e3e]">Submitted on {(new Date(data.timestamp).getDate() + "/" + (new Date(data.timestamp).getMonth()+1) + "/" + new Date(data.timestamp).getFullYear())} | Answered by {(data.hasOwnProperty("author")?data.author:"Vandana Rana")}</small>
            <ShareBtn/>
            </div>
            <ul className="flex mt-2">
                {(data.tags!=null)?(data.tags.map(el=>{
                    return <li key={el} className="text-xs bg-[#e8e8e8] rounded-full px-2 py-1 mr-1">{el}</li>
                })):null}
            </ul>
            <h4 className="text-[#04AA6D] mt-3 font-medium">Answer : </h4>
            <span dangerouslySetInnerHTML={{__html:format(data.answer)}}></span>
            </div>
            <aside className="mt-5 md:mt-0 md:ml-5">
              <div className="outline outline-2 outline-slate-400/25 rounded p-4 bg-[#fff] mb-4">
                <h4 className="font-medium">Recommended topics</h4>
                <ul className="flex mt-2">
                {(data.tags!=null)?(data.tags.map(el=>{
                    return <li key={el} className="text-xs bg-[#e8e8e8] rounded-full px-2 py-1 mr-1">{el}</li>
                })):null}
            </ul>
              </div>
              <div className="outline outline-2 outline-slate-400/25 rounded p-4 bg-[#fff] mb-4">
                <h4 className="font-medium">Advertisement</h4>
              </div>
            </aside>
        </main>
        </>
    )
}