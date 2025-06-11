"use client"

import { useState, useEffect } from "react";
import Header from "../_components/Header";
import PageLayout from "../_components/PageLayout";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Chart from 'chart.js/auto';

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
  async function getListData(path) {
      const dbRef = ref(getDatabase());
      let data;
      await get(child(dbRef, path)).then(async (snapshot) => {
        if (snapshot.exists()) {
          data = await snapshot.val();  
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });

      return data;
    }

export default function Admin() {

    const [questionCount, setQuestionCount] = useState("Loading");
    const [askData, setAskData] = useState("Loading");
    const [reportData, setReportData] = useState("Loading");
    const [listData, setListData] = useState(null);

    useEffect(()=>{
      (async()=>{
        setQuestionCount(Object.keys(await getListData("data")).length);
        setAskData(Object.keys(await getListData("ask")).length);
        setReportData(Object.keys(await getListData("report")).length);
      })()

      
    }, [])
    
    return (
        <>
        <Header title="Dashboard" subtitle="Every adminstrative tool in one place" />
        <PageLayout breadLinks={[]}>
            <div>
            <h3 className="text-2xl mb-5 underline decoration-[#04AA6D] font-medium">Dashboard</h3>
            <ul className="flex">
                <li 
                key="countQ" 
                className="outline outline-2 outline-slate-400/25 rounded m-3 bg-[#fff] hover:bg-slate-400/5">
                <Link href="/dashboard/view?category=data" className="block p-4">
                {questionCount}
                <small className="block text-[#6a6a6a]">total questions</small>
                </Link>
                </li>
                <li 
                key="countA" 
                className="outline outline-2 outline-slate-400/25 rounded m-3 bg-[#fff] hover:bg-slate-400/5"
                >
                <Link href="/dashboard/view?category=ask" className="block p-4">
                {askData}
                <small className="block text-[#6a6a6a]">total doubts</small>
                </Link>
                </li>
                <li 
                key="countR" 
                className="outline outline-2 outline-slate-400/25 rounded m-3 bg-[#fff] hover:bg-slate-400/5">
                <Link href="/dashboard/view?category=report" className="block p-4">
                {reportData}
                <small className="block text-[#6a6a6a]">total reports</small>
                </Link>
                </li>
            </ul>
            <div className="outline outline-2 outline-slate-400/25 rounded p-4 m-3 bg-[#fff]">
            <span>
              <Link href="/dashboard/new" className="hover:underline">
              Submit a new question <FontAwesomeIcon icon={faUpRightFromSquare} className="text-[#2e2e2e]"/>
              </Link>
              </span>
            </div>
            </div>
        </PageLayout>
        </>
    )
}