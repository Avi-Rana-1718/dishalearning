"use client"

import format from "md-extend";
import Header from "@/app/_components/Header";
import PageLayout from "@/app/_components/PageLayout";
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set, get, child } from "firebase/database";
import { redirect, useRouter } from "next/navigation";
import { useRef } from "react";
import AlertDiv from "@/app/_components/AlertDiv";
import TagsItem from "@/app/_components/TagsItem";
import TitleDiv from "@/app/_components/TitleDiv";


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

export default function New(props) {    

    const router = useRouter();
    const [authEmail, setAuthEmail] = useState(null);
    const [isError, setIsError] = useState(null);

    const tagsRef = useRef(null);
    const questionRef = useRef(null);
    const answerRef = useRef(null);
    const submitBtn = useRef(null);

    const [question, setQuestion] = useState("")
    const [tags, setTags] = useState([]);
    const [data, setData] = useState("");
    const [time, setTime] = useState(0);

    function remove(el) {
        let arr = [...tags];
        arr=arr.filter((element)=>{ 
            return element!=el;
        });
        setTags(arr);
    }

    // auth 
    onAuthStateChanged(auth, (user) => {
            if (user) {
              setAuthEmail(user.email)
            }
    });


    function submitForm(id) {

        if(questionRef.current.value.trim().length==0) {
            questionRef.current.reportValidity()
            return;
            
        }

        submitBtn.current.disabled=true;
        submitBtn.current.innerHTML = `<svg class="inline animate-spin" xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q17 0 28.5 11.5T520-840q0 17-11.5 28.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-17 11.5-28.5T840-520q17 0 28.5 11.5T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Z"/></svg> Submit`
        let obj = {
            question: question,
            tags: tags,
            answer: data,
            email: authEmail,
            timestamp:time
        }

        console.log(obj);
        
        const db = getDatabase();
        let key = id;

        set(ref(db, 'data/' + key), obj).then(()=>{
            submitBtn.current.disabled=false;
            submitBtn.current.innerHTML = "Submit";
            setIsError({
                status:false,
                title: "Question editted!",
                message: `<a class="underline" href="/forums/${key}">View</a> question.</small>`
            });
            router.push("#alert")
        }).catch((err)=>{
            submitBtn.current.disabled=false;
            submitBtn.current.innerHTML = "Submit";
            router.push("#alert")
         setIsError({
            status:true,
            title: "An error occured!",
            message: err
         });
        });
    }

    async function getData(id) {
        
        const dbRef = ref(getDatabase());
        let data;
        await get(child(dbRef, `data/${id}`)).then((snapshot) => {
        if (snapshot.exists()) {
            data = snapshot.val();
            questionRef.current.value=data.question;
            answerRef.current.value=data.answer;
            
            setQuestion(data.question);
            setTags((data.tags)?data.tags:[]);
            setData(data.answer);
            setTime(data.timestamp);
              
        } else {
            console.log("No data available");
        }
        }).catch((error) => {
        console.error(error);
        }); 
    }
    
    useEffect(()=>{
        getData(props.params.id)
    }, []);


    return (
        <>
        <Header title="Edit" subtitle="Add a new question to the forum list" />
        <PageLayout breadLinks={["/dashboard", "/edit"]}>
        <div className="mr-6 w-full">
            {(()=>{
                if(isError!=null) {

                    return <AlertDiv isError={isError.status} title={isError.title} desc={isError.message} id="alert" />
                }
            })()}
            <label htmlFor="fTitle">Question<span className="text-red-600">*</span></label>

            <textarea 
            id="fTitle" 
            type="text" 
            className="w-full outline oultine-1 outline-2 outline-slate-400/25 p-3 rounded" 
            placeholder="Enter the question" 
            rows={5}
            ref={questionRef}
            onChange={(e)=>{
                setQuestion(e.target.value);
            }}
            >
            </textarea>

            <label htmlFor="fTags">Tags<span className="text-red-600">*</span></label>
            <ul className="flex">
                {(tags!=null)?(
                    tags.map((el, index)=>{
                        return (<TagsItem el={el} index={index} remove={remove} key={index+el}/>)
                    })
                ):null}
            </ul>

            <input
            id="fTags"
            type="text"
            ref={tagsRef}
            className="outline oultine-1 outline-2 outline-slate-400/25 p-3 rounded my-3 max-w-[70vw]"
            placeholder="Enter the tags"
            onKeyPress={(e)=>{
                if(e.code=="Enter") {
                    let arr = [...tags];
                    arr.push(e.target.value);
                    e.target.value=null;
                    setTags(arr);
                    
                }
            }}
            >
            </input>

            <button
            onClick={()=>{
                        let arr = [...tags];
                        arr.push(tagsRef.current.value);
                        tagsRef.current.value=null;
                        setTags(arr);                       
            }}
            className="text-sm hover:underline text-[#f3f3f3] bg-[#6A6A6A] p-2 m-3 rounded disabled:hover:no-underline"
            >
                Add
            </button>

            <label htmlFor="answerInput" className="block">Answer<span className="text-red-600">*</span></label>
        <textarea
        className="w-full outline oultine-1 outline-2 outline-slate-400/25 p-3 rounded"
        rows={10}
        ref={answerRef}
        onInput={(e)=>{
            setData(e.target.value);
        }}
        ></textarea>
        <div className="bg-slate-400/25 text-[#282828] p-3 my-6 rounded-lg">
            <h3 className="text-lg underline">Output:</h3>
            <span className="p-2 block" dangerouslySetInnerHTML={{__html: "<h5>Question:</h5>" + format(question) + "<h5>Answer:</h5>" + format(data)}}></span>
        </div>
        <button
            ref={submitBtn}
            className="text-sm hover:underline text-[#f3f3f3] bg-[#6A6A6A] px-2 py-1.5 rounded disabled:hover:no-underline disabled:opacity-75"
            type="submit"
            onClick={()=>{
                submitForm(props.params.id);
            }}
            >Submit</button>
            </div>
            <TitleDiv title="Markdown basics" subtitle="Improve readiability by using markdown. For help with markdown go to <a href='#' class='text-[#2a74e5] hover:underline'>md-extend</a>." desc={[]}/>
        </PageLayout>
        </>
    )
}