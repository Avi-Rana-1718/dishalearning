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
    set(ref(db, 'report/' + Date.now()), {
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

export default function Report() {

  const [sendStatus, setSendStatus] = useState(null);

    return (
        <>
      <Header title="Report a problem" subtitle="Something not working? Let us know" />
      <PageLayout breadLinks={["/report"]}>
      <div>
      {
      sendStatus==true?(
       <span className="p-3 rounded bg-green-300 text-green-800 inline-block mb-5"><FontAwesomeIcon icon={faCircleCheck} /> Report sent! We look into it asap.</span>
      ):((sendStatus==false)?(
      <span className="p-3 rounded bg-red-300 text-red-800 inline-block mb-5"><FontAwesomeIcon icon={faCircleExclamation} /> An error occured! We were unable to send the message.</span>
      ):null)
      }

        <form onSubmit={(e)=>{
          if(sendStatus=="disable") {
            return;
          }
              e.preventDefault();
              console.log(e);
              setSendStatus("disable")
              sendData(e, setSendStatus);
              
              
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
            <button disabled={sendStatus=="disable"} className="text-sm hover:underline text-[#f3f3f3] bg-[#6A6A6A] px-2 py-1.5 rounded disabled:hover:no-underline disabled:opacity-75" type="submit">
                Submit
              </button>
        </form>
        </div>
        <TitleDiv title="Guidelines" subtitle="These are some guidelines and suggestions to keep in mind while drafting the title and description for your problem." desc={[ "Describe your problem thoroughly", "Use appropriate language", "Be cautious of what you share online", "Have common sense"]} />
        
      </PageLayout>
      

        </>
    )
}