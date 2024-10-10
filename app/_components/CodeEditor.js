import format from "@/format";
import { useEffect, useState } from "react"

export default function CodeEditor(props) {
    const [data, setData] = useState("");
    const [rData, setRData] = useState();


    return (
        <div className="">
        <textarea
        className="w-full outline oultine-1 outline-2 outline-slate-400/25 p-3 rounded"
        rows={10}
        onInput={(e)=>{
            setData(e.target.value);
        }}
        ></textarea>
        <div className="bg-[#e8e7e7] text-[#282828] p-3 my-6 rounded-lg">
            <h3 className="text-lg underline">Output:</h3>
            <span className="p-4" dangerouslySetInnerHTML={{__html: format(data)}}></span>
        </div>
        </div>
    )
}