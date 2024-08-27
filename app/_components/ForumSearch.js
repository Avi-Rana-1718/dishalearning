"use client"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function ForumSearch(props) {

    const [openSearch, setOpenSearch] = useState(false)
    return (
        <div className="outline oultine-1 outline-2 outline-slate-400/25 px-3 py-2 rounded text-base inline">
            <input type="text" placeholder="Search" className="outline-none appearance-none"/>
<FontAwesomeIcon icon={faMagnifyingGlass} className="w-[1em] text-[#484848] hover:text-[#1e1e1e] hover:cursor-pointer inline" onClick={()=>{
    setOpenSearch(!openSearch);
        
}}/>

        </div>
        )
}