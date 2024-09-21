"use client"

import Header from "@/app/_components/Header"
import PageLayout from "@/app/_components/PageLayout"
import { useSearchParams } from "next/navigation"
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get, query } from "firebase/database";
import { useState } from "react";
import ForumList from "@/app/_components/forumList";
import { useEffect } from "react";

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

export default function Page() {

    let params = useSearchParams()
    let [data, setData] = useState(null)
    
   useEffect(()=>{
    if(data==null) {

    const dbRef = ref(getDatabase());
    get(child(dbRef, `${params.get("category")}`)).then((snapshot) => {
    if (snapshot.exists()) {
        data = snapshot.val();
        console.log(data);
        
        setData(data)
        
    } else {
        console.log("No data available");
    }
    }).catch((error) => {
    console.error(error);
    }); 

    }
   }, [data])
    
    return (
        <>
        <Header title="View" subtitle="Filtered results as per query" />
        <PageLayout breadLinks={["/dashboard", "/view"]}>
        <div>
            <h3 className="mb-5 text-[#6A6A6A]">Showing results with category: {params.get("category")}</h3>
            <ul >
                {(data!=null)?(Object.keys(data).sort((a, b)=>{
                if(data[a].timestamp>data[b].timestamp) {
                 return -1;
                } else  if(data[a].timestamp<data[b].timestamp) {
                 return 0;
                } else {
                 return 0;
                }
             }).map(el=>{                  
                let date=(new Date(data[el].timestamp).getDate() + "/" + (new Date(data[el].timestamp).getMonth()+1) + "/" + new Date(data[el].timestamp).getFullYear())

             return (
                <li key={data[el].timestamp} className="list-none outline outline-2 outline-slate-400/25 p-3 rounded m-3">
                    <time className="text-xs text-[#6a6a6a] block">{date}</time>
                        {data[el].title}
                    <small className="block">{data[el].desc}</small>
                </li>
             )
             })):null}
            </ul>  
        </div>
        </PageLayout>
        </>
    )
}