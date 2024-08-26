"use client"

import Nav from "@/app/_components/Nav";
import Link from "next/link";
import { initializeApp } from "firebase/app";
import { faCircleCheck, faCircleExclamation} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getDatabase, ref, child, set } from "firebase/database";
import { useState } from "react";

async function sendData(e, setSendStatus) {
  
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
    set(ref(db, 'ask/' + Date.now()), {
      title: e.target[0].value,
      desc: e.target[1].value,
      timestamp : Date.now()
    }).then(()=>{
      setSendStatus(true)
    }).catch((err)=>{
      console.error(err);
      setSendStatus(false)
    });
  }

export default function Ask() {

  const [sendStatus, setSendStatus] = useState(null);

    return (
        <>
 <header className="bg-[#ceffd8] pb-10">
        <Nav navLinks={false} />
        <div className="text-center px-10 pt-10">
          <h3 className="text-4xl text-[#1e1e1e] mb-3">Ask a question</h3>
          <span className="text-[#6a6a6a]">Resolve any and all queries.</span>
        </div>
      </header>
      <main className="p-5 md:p-7 bg-[#fff]">
    
      {
      sendStatus==true?(
       <span className="p-3 rounded bg-green-300 text-green-800 inline-block mb-5"><FontAwesomeIcon icon={faCircleCheck} /> Question sent! Our experts will look into it.</span>
      ):((sendStatus==false)?(
      <span className="p-3 rounded bg-red-300 text-red-800 inline-block mb-5"><FontAwesomeIcon icon={faCircleExclamation} /> An error occured! We were unable to send the message.</span>
      ):(null))
      }

        <form onSubmit={(e)=>{
              e.preventDefault();
              console.log(e);
              sendData(e, setSendStatus);
              
              
            }}>
            <label htmlFor="fTitle">
                Title<span className="text-red-600">*</span>
                <small className="block text-[#6A6A6A]">Be specific and imagine you’re asking a question to another person.</small>
                </label>
            <input id="fTitle" type="text" className="outline oultine-1 outline-2 outline-slate-400/25 p-3 rounded my-3 max-w-[70vw] block" placeholder="Ask the question" required></input>
            <label htmlFor="fDesc">
                Details<span className="text-red-600">*</span>
            <small className="block text-[#6A6A6A]">Describe the problem in detail, write as much as possible!</small>
            </label>
            <textarea id="fDesc" type="text" cols={50} rows={5} className="outline oultine-1 outline-2 outline-slate-400/25 p-3 rounded my-3 max-w-[70vw] block" required></textarea>
            <button className="text-sm hover:underline text-[#f3f3f3] bg-[#6A6A6A] px-2 py-1.5 rounded" type="submit">
                Submit
              </button>
        </form>
      </main>

        </>
    )
}