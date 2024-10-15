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
  let rData="";

  console.log(data);
  

  function formatData(data) {

    if(data.includes("-")) {
          data = `<li>${data.replace("-", "")}</li>`;     
    }

    if(data.includes("###")) {
        data = `<h1 style="font-size: 1.25rem" id=${data.replace("###", "")}><i class="fa-solid fa-square-arrow-up-right" style="color:#d4d6d4;opacity:0.4"></i> ${data.replace("###", "")}</h1>`;
    } else if(data.includes("##")) {
        data = `<h2 style="font-size: 1.55rem"><i class="fa-solid fa-square-arrow-up-right" style="color:#d4d6d4;opacity:0.4"></i> ${data.replace("##", "")}</h2>`;
    } else if(data.includes("#")) {
        data = `<h2 style="font-size: 2rem"><i class="fa-solid fa-square-arrow-up-right" style="color:#d4d6d4;opacity:0.4"></i> ${data.replace("#", "")}</h2>`;
    }
    
    if (data.includes("](")) {
        // incomplete code breaks then link contains _
        let posStart=-1;
        let posMid= data.indexOf("](");
        let posEnd=-1;

        let label;
        let href;

        for(let i=posMid;i>=0;i--) {
            if(data[i]=="[") {
                posStart=i;
                break;
            }
        }

        for(let i=posMid;i<data.length;i++) {
            if(data[i]==")") {
                posEnd=i;
                break;
            }
        }

        label=data.substring(posStart+1, posMid);
        href=data.substring(posMid+2, posEnd);
        
        // console.log(posStart, posEnd, label, href);
        
        data = `<a href=${href} style="text-decoration:underline;color:#2F81F7">${label}</a>`;


    }
    
    if (data.includes("**")) {
        data=data;
        let boldCount=0;
        let segCount=data.split("**").length-1;
        
        while(segCount--) {
            if(boldCount%2==0) {
                data = data.replace("**", "<b>");
            } else {
                data = data.replace("**", "</b>");
            }
            boldCount++;
        }
        
    }
    
    if (data.includes("~~")) {
        data=data;
        let count=0;
        let segCount=data.split("~~").length-1;
        
        while(segCount--) {
            if(count%2==0) {
                data = data.replace("~~", "<del>");
            } else {
                data = data.replace("~~", "</del>");
            }
            count++;
        }
        
    }

    if (data.includes("^^")) {
        data=data;
        let count=0;
        let segCount=data.split("^^").length-1;
        
        while(segCount--) {
            if(count%2==0) {
                data = data.replace("^^", "<sup>");
            } else {
                data = data.replace("^^", "</sup>");
            }
            count++;
        }
        
    }

    if (data.includes("__")) {
        data=data;
        let count=0;
        let segCount=data.split("__").length-1;
        
        while(segCount--) {
            if(count%2==0) {
                data = data.replace("__", "<sub>");
            } else {
                data = data.replace("__", "</sub>");
            }
            count++;
        }
        
    }

    if(data.includes("_")) {
        let italicsCount=0;
        let segCount=data.split("_").length-1;
        
        while(segCount--) {
            if(italicsCount%2==0) {
                data = data.replace("_", "<i>");
            } else {
                data = data.replace("_", "</i>");
            }
            italicsCount++;
        }
    }

    if (data.includes("`")) {
        data=data;
        let count=0;
        let segCount=data.split("`").length-1;
        
        while(segCount--) {
            if(count%2==0) {
                data = data.replace("`", `<code style="border:1px solid #2a2a2a;padding: 5px;background-color:#202020;border-radius:3px">`);
            } else {
                data = data.replace("`", "</code>");
            }
            count++;
        }
        
    }



    return data;
}

if(typeof data.answer != "string") {
  await data.answer.map((el)=>{
    let val = formatData(el.value);
    rData+=`<span style="display: block">${val}</span>`;
    })
} else {
  rData=data.answer;
}  
  return (
        <>
      <Header />
        <main className="p-3 pt-0 bg-[#CEFFD8] md:flex justify-center">
            <div className="grow outline outline-2 min-h-[80vh] outline-slate-400/25 rounded md:max-w-[50vw] p-4 bg-[#fff]">
            <Breadcrumb links={["/answers"]} />
            <h4 className="text-[#04AA6D] inline font-medium">Question : </h4>
            <span className="text-base" dangerouslySetInnerHTML={{__html:data.question}}></span>
            <small className="block mt-1">Submitted on {(new Date(data.timestamp).getDate() + "/" + (new Date(data.timestamp).getMonth()+1) + "/" + new Date(data.timestamp).getFullYear())} | Answered by {(data.hasOwnProperty("author")?data.author:"Vandana Rana")}</small>
            <ul className="flex mt-2">
                {(data.tags!=null)?(data.tags.map(el=>{
                    return <li className="text-xs bg-[#e8e8e8] rounded-full px-2 py-1 mr-1">{el}</li>
                })):null}

            </ul>
            <h4 className="text-[#04AA6D] mt-3 font-medium">Answer : </h4>
            <span dangerouslySetInnerHTML={{__html:rData}}></span>
            </div>

          <AsideBtns />
       
        </main>
        </>
    )
}