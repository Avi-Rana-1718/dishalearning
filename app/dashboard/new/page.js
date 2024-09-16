"use client"

import CodeEditor from "@/app/_components/CodeEditor";
import Header from "@/app/_components/Header";
import PageLayout from "@/app/_components/PageLayout";
import { useState } from "react";
import { useEffect } from "react";

export default function New() {

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
        <div>
            <form onSubmit={(e)=>{
                e.preventDefault();
                
            }}>
            <label htmlFor="fTitle">Question<span className="text-red-600">*</span></label>
            <input id="fTitle" type="text" className="outline oultine-1 outline-2 outline-slate-400/25 p-3 rounded my-3 max-w-[70vw] block" placeholder="Enter the question" required></input>
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
            <button className="text-sm hover:underline text-[#f3f3f3] bg-[#6A6A6A] px-2 py-1.5 rounded disabled:hover:no-underline disabled:opacity-75" type="submit">
             Submit
            </button>
            </form>
            </div>
        </PageLayout>

        </>
    )
}