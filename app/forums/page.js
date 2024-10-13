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
          <ul>
            
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
             return <ForumList question={data[el].question} timestamp={data[el].timestamp} url={el} key={el} />;
             })):(<span className="p-2 m-2 mt-6 block">Getting data..</span>)

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
