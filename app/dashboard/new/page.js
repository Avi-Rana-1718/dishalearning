"use client"

import CodeEditor from "@/app/_components/CodeEditor";
import Header from "@/app/_components/Header";
import PageLayout from "@/app/_components/PageLayout";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, child, set } from "firebase/database";
import { useRouter } from "next/navigation";
import { faCircleCheck, faCircleExclamation} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  const auth = getAuth(app);

export default function New() {

    const router = useRouter()
    const [authEmail, setAuthEmail] = useState(null)
    const [sendStatus, setSendStatus] = useState(null)
    
    const [tags, setTags] = useState([]);
    const [data, setData] = useState([
        {
        value: "Hello world",
        inFocus: -1,
        updateID: Math.random().toString(16).slice(2),
        },
        {
            value: "**This** is a _list_",
            inFocus: -1,
            updateID: Math.random().toString(16).slice(2),
        },
        {
            value: "- One",
            inFocus: -1,
            updateID: Math.random().toString(16).slice(2),
        },
        {
            value: "- Two",
            inFocus: -1,
            updateID: Math.random().toString(16).slice(2),
        },
        {
            value: "- ~~Four~~ Three",
            inFocus: -1,
            updateID: Math.random().toString(16).slice(2),
        },
        {
            value: "- Four",
            inFocus: 6,
            updateID: Math.random().toString(16).slice(2),
        }
    ]);


    // auth 
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setAuthEmail(user.email)
        } else {
            router.push("/auth")
        }
      });

    function remove(el) {
        let arr = [...tags];
        arr=arr.filter(element=>{
            return element!=el;
        });
        setTags(arr);
    }

    return (
        <>
        <Header title="New question" subtitle="Add a new question to the forum list" />
        <PageLayout breadLinks={["/dashboard", "/new"]}>
        <div className="mr-3 w-full">
        {
      sendStatus!=null && sendStatus[0]==true?(
       <span className="p-3 rounded bg-green-300 text-green-800 inline-block mb-5">
        <FontAwesomeIcon icon={faCircleCheck} className="mr-1"/>
        Question added to database!
        <small className="block mt-2 text-xs">
            <Link className="underline" href={"/forums/" + sendStatus[1]}>View</Link> question</small>
        </span>
      ):((sendStatus!=null && sendStatus[0]==false)?(
      <span className="p-3 rounded bg-red-300 text-red-800 inline-block mb-5">
        <FontAwesomeIcon icon={faCircleExclamation} className="mr-1"/>
        An error occured! We were unable to send the message.
        <small className="block mt-2 text-xs">
            {sendStatus[1]}
        </small>
      </span>
      ):null)
      }
            <form onSubmit={(e)=>{
                e.preventDefault();

                setSendStatus("disabled");

                let obj = {
                    question: e.target[0].value,
                    tags: tags,
                    answer: data,
                    email: authEmail,
                    timestamp: Date.now()
                }

                const db = getDatabase();
                let key = (obj.question.replace(/[^A-Z0-9]/ig, "")).toLowerCase()
                set(ref(db, 'data/' + key), obj).then(()=>{
                  setSendStatus([true, key])
                }).catch((err)=>{
                  console.log(err);
                setSendStatus([false, err.message])
                });

            }
        }
                
            onKeyPress={(e)=>{
                if(e.code=="Enter") {
                    e.preventDefault()
                }
                
            }}
            >
            <label htmlFor="fTitle">Question<span className="text-red-600">*</span></label>
            <input id="fTitle" type="text" className="outline oultine-1 outline-2 outline-slate-400/25 p-3 rounded my-3 max-w-[70vw] block" placeholder="Enter the question" required autoComplete="off"></input>
            <label htmlFor="fTags">Tags<span className="text-red-600">*</span></label>
            <ul className="flex">
                {(tags!=null)?(
                    tags.map((el)=>{
                        return <li key={el} onClick={()=>remove(el)} className="m-1 bg-[#b7b7b7] px-3 py-1 rounded-full text-sm hover:underline">{el}</li>
                    })
                ):null}
            </ul>
            <input
            id="fTags"
            type="text"
            onKeyPress={(e)=>{
                if(e.code=="Enter") {
                    let arr = [...tags];
                    arr.push(e.target.value);
                    e.target.value=null;
                    setTags(arr);
                    
                }
            }}
            className="outline oultine-1 outline-2 outline-slate-400/25 p-3 rounded my-3 max-w-[70vw] block"
            placeholder="Enter the tags">
            </input>
            <label htmlFor="answerInput">Answer<span className="text-red-600">*</span></label>
            <CodeEditor setPData={setData} className="w-full"/>
            <button disabled={sendStatus=="disabled"} className="text-sm hover:underline text-[#f3f3f3] bg-[#6A6A6A] px-2 py-1.5 rounded disabled:hover:no-underline disabled:opacity-75" type="submit">
            {(sendStatus=="disabled")?(<svg className="inline animate-spin" xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q17 0 28.5 11.5T520-840q0 17-11.5 28.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-17 11.5-28.5T840-520q17 0 28.5 11.5T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Z"/></svg>):null}
            Submit
            </button>
            </form>
            </div>
            <div>
                <div  className="outline oultine-1 outline-2 outline-slate-400/25 p-3 rounded my-3">
                    <span>Logged in as {authEmail}</span>
                </div>
            </div>
        </PageLayout>
        </>
    )
}