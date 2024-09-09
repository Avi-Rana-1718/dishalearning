"use client"

import { useState } from "react";
import Header from "../_components/Header";
import PageLayout from "../_components/PageLayout";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";

async function getData(qSetter, aSetter, rSetter) {

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
    await get(child(dbRef, `data/`)).then(async (snapshot) => {
      if (snapshot.exists()) {
        data = await snapshot.val();        
        qSetter(await Object.keys(data).length)
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    }); 
    
    await get(child(dbRef, `ask/`)).then(async (snapshot) => {
      if (snapshot.exists()) {
        data = await snapshot.val();        
        aSetter(await Object.keys(data).length)
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

    await get(child(dbRef, `report/`)).then(async (snapshot) => {
      if (snapshot.exists()) {
        data = await snapshot.val();        
        rSetter(await Object.keys(data).length)
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

    }

export default function Admin() {

    const [questionCount, setQuestionCount] = useState("Loading");
    const [askCount, setAskCount] = useState("Loading");
    const [reportCount, setReportCount] = useState("Loading");
    getData(setQuestionCount, setAskCount, setReportCount)
    
    return (
        <>
        <Header title="Dashboard" subtitle="Every adminstrative tool in one place" />
        <PageLayout breadLinks={["/dashboard"]}>
            <div>
            <h3 className="text-xl mb-5 underline decoration-[#04AA6D]">Dashboard</h3>
            <ul className="flex">
                <li 
                key="countQ" 
                className="outline outline-2 outline-slate-400/25 rounded p-4 m-3 bg-[#fff]">
                {questionCount}
                <small className="block text-[#6a6a6a]">total questions</small>
                </li>
                <li 
                key="countA" 
                className="outline outline-2 outline-slate-400/25 rounded p-4 m-3 bg-[#fff]">
                {askCount}
                <small className="block text-[#6a6a6a]">total doubts</small>
                </li>
                <li 
                key="countR" 
                className="outline outline-2 outline-slate-400/25 rounded p-4 m-3 bg-[#fff]">
                {reportCount}
                <small className="block text-[#6a6a6a]">total reports</small>
                </li>
            </ul>
            </div>
        </PageLayout>
        </>
    )
}