"use client"

import Nav from "@/app/_components/Nav";
import Link from "next/link";
import { initializeApp } from "firebase/app";
import { faCircleCheck, faCircleExclamation} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getDatabase, ref, child, set } from "firebase/database";
import { useState } from "react";
import Header from "../_components/Header";
import Breadcrumb from "../_components/Breadcrumb";
import TitleDiv from "../_components/TitleDiv";
import PageLayout from "../_components/PageLayout";
import AlertDiv from "../_components/AlertDiv";
import { useRef } from "react";


export default function Report() {

  const [isError, setIsError] = useState(null);

  const submitRef = useRef(null);


  async function sendData(e, setIsError) {
  
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
  
    console.log(e);
  
      const db = getDatabase();
      set(ref(db, 'report/' + Date.now()), {
        title: e.target[0].value,
        desc: e.target[1].value,
        timestamp : Date.now()
      }).then(()=>{
        submitRef.current.innerHTML = "Submit";
        submitRef.current.disabled=false;

        setIsError({
          status:false,
          title: "Report sent! We look into it asap."
        })
      }).catch((err)=>{
        submitRef.current.innerHTML = "Submit";
        submitRef.current.disabled=false;

        setIsError({
          status:true,
          title: "An error occured! We were unable to send the message."
        })
      });
    }

    return (
        <>
      <Header title="Report a problem" subtitle="Something not working? Let us know" />
      <PageLayout breadLinks={["/report"]}>
      <div>
        {
          (isError!=null)?(<AlertDiv isError={isError.status} title={isError.title} />):null
        }

        <form onSubmit={(e)=>{
              e.preventDefault();
              submitRef.current.disabled=true;
              submitRef.current.innerHTML = `<svg class="inline animate-spin" xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q17 0 28.5 11.5T520-840q0 17-11.5 28.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-17 11.5-28.5T840-520q17 0 28.5 11.5T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Z"/></svg> Submit`;
              
              sendData(e, setIsError);
              
            }}>
            <label htmlFor="fTitle">
                Title<span className="text-red-600">*</span>
                <small className="block text-[#6A6A6A]">Be specific and try to write as much as possible.</small>
                </label>
            <input id="fTitle" type="text" className="outline oultine-1 outline-2 outline-slate-400/25 p-3 rounded my-3 max-w-[70vw] block" placeholder="Enter the issue" required></input>
            <label htmlFor="fDesc">
                Details<span className="text-red-600">*</span>
            <small className="block text-[#6A6A6A]">Describe the problem in detail, write as much as possible!</small>
            </label>
            <textarea id="fDesc" type="text" cols={50} rows={5} className="outline oultine-1 outline-2 outline-slate-400/25 p-3 rounded my-3 max-w-[70vw] block" required></textarea>
            <button 
            ref={submitRef}
            className="text-sm hover:underline text-[#f3f3f3] bg-[#6A6A6A] px-2 py-1.5 rounded disabled:hover:no-underline disabled:opacity-75"
            type="submit">
             Submit
             </button>
        </form>
        </div>
        <TitleDiv title="Guidelines" subtitle="These are some guidelines and suggestions to keep in mind while drafting the title and description for your problem." desc={[ "Describe your problem thoroughly", "Use appropriate language", "Be cautious of what you share online", "Have common sense"]} />
        
      </PageLayout>
      

        </>
    )
}