"use client"

import Header from "@/frontend/app/_components/Header"
import PageLayout from "@/frontend/app/_components/PageLayout"
import { useSearchParams } from "next/navigation"
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get, remove } from "firebase/database";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen, faEye } from "@fortawesome/free-solid-svg-icons";
import format from "md-extend";
import Link from "next/link";


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

    let params = useSearchParams();
    let [data, setData] = useState(null);
    
   useEffect(()=>{

    if(data==null) {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `${params.get("category")}`)).then((snapshot) => {
        if (snapshot.exists()) {
            data = snapshot.val();
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
                <li key={data[el].timestamp} className="list-none flex justify-between outline outline-2 outline-slate-400/25 p-3 rounded m-3  hover:bg-slate-300/25 hover:outline-none cursor-pointer">
                    <div>
                        <time className="text-xs text-[#6a6a6a] block">{date}</time>
                            {data[el].title}
                        <small className="block text-base" dangerouslySetInnerHTML={{__html: (data[el].desc!=null)?data[el].desc:format(data[el].question)}}></small>
                        <ul className="flex">
                            {(data[el].tags!=null)?(data[el].tags.map((el, i) => {
                            return (<li className="text-xs bg-[#e8e8e8] rounded-full px-2 py-1 mr-1 mt-1" key={el + i}>{el}</li>);
                            })):null}
                        </ul>
                    </div>
                    <div>
                        <ul className="flex">
                            <li
                                className={(params.get("category")=="data")?"block":"hidden"}
                            >
                                <Link href={"/forums/" + el}>
                                    <FontAwesomeIcon icon={faEye} className="text-[#2b3e50] mr-3 p-1 bg-slate-400/25 ml-3 rounded outline outline-2 outline-gray-300 text-sm hover:bg-slate-600/25" />
                                </Link>
                            </li>
                            <li
                                onClick={()=>{
                                    let key=params.get("category")+"/"+el
                                    console.log(key);
                                    const dbRef = ref(getDatabase());
                                    remove(dbRef, key).then(()=>{
                                        console.log("Deleted");
                                    }).catch(e=>{
                                        alert(e) 
                                    })
                                }}
                            >
                                <FontAwesomeIcon icon={faTrash} className="text-[#2b3e50] bg-slate-400/25 p-1 rounded inline outline outline-2 outline-gray-300 text-sm hover:bg-slate-600/25" />
                            </li>
                            <li
                                className={(params.get("category")=="data")?"block":"hidden"}
                            >
                                <Link href={"/dashboard/edit/" + el}>
                                    <FontAwesomeIcon icon={faPen} className="text-[#2b3e50] p-1 bg-slate-400/25 ml-3 rounded outline outline-2 outline-gray-300 text-sm hover:bg-slate-600/25" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>
             )

             })):null}
            </ul>  
        </div>
        </PageLayout>
        </>
    )
}