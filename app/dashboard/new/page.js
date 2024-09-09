"use client"

import Header from "@/app/_components/Header";
import PageLayout from "@/app/_components/PageLayout";
import { useState } from "react";

export default function New() {

    const [tags, setTags] = useState([]);

    return (
        <>
        <Header title="New question" subtitle="Add a new question to the forum list" />
        <PageLayout breadLinks={["/dashboard", "/new"]}>
        <div>
            <form>
            <label htmlFor="fTitle">Title<span className="text-red-600">*</span></label>
            <input id="fTitle" type="text" className="outline oultine-1 outline-2 outline-slate-400/25 p-3 rounded my-3 max-w-[70vw] block" placeholder="Enter the issue" required></input>
            <label htmlFor="fTags">Tags<span className="text-red-600">*</span></label>
            <ul className="flex">
                {(tags!=null)?(
                    tags.map((el)=>{
                        return <li key={el} className="m-1 bg-[#b7b7b7] px-3 py-1 rounded-full text-sm">{el}</li>
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
            </form>
            </div>
        </PageLayout>

        </>
    )
}