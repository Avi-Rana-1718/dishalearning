"use client"
import ForumList from "../_components/forumList";
import Header from "../_components/Header";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";
import AsideBtns from "../_components/AsideBtns";
import { useEffect, useState } from "react";

// export const metadata = {
//   title: "Forums - Disha Learning"
// } 


async function getData() {
  
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
  await get(child(dbRef, `data/`)).then((snapshot) => {
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

export default function Forums() {

  let [data, setData] = useState(null);

  useEffect(()=>{
    
    (async ()=>{
      setData(await getData());
    })()

  })
  

  return (
    <>
    <Header title="Forums" subtitle="Answers to all your questions" />
      <main className="md:flex p-2">
        <div className="md:max-w-[80vw] w-full">
          <h3 className="text-2xl m-3 mb-0 flex items-center justify-between">List</h3>
          <ul className={(data==null)?"animate-pulse":null}>
            
            {
              (data!=null)?(Object.keys(data).sort((a, b)=>{
                if(data[a].timestamp>data[b].timestamp) {
                 return -1;
                } else  if(data[a].timestamp<data[b].timestamp) {
                 return 0;
                } else {
                 return 0;
                }
             }).map(el=>{
             return <ForumList question={data[el].question} timestamp={data[el].timestamp} url={el} tags={data[el].tags} key={el} />;
             })):(<span className="p-2 mr-5 block"><svg class="inline animate-spin" xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q17 0 28.5 11.5T520-840q0 17-11.5 28.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-17 11.5-28.5T840-520q17 0 28.5 11.5T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Z"/></svg>Getting data..</span>)

            }
          </ul>
        </div>

        <aside className="md:sticky md:top-3">
          <h3 className="text-xl m-3 mb-4">More</h3>
          <AsideBtns/>
        </aside>
      </main>
    </>
  );
}
