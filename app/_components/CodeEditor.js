import { useEffect, useState } from "react"
import Statement from "./Statement";

export default function CodeEditor(props) {
    const { setPData } = props;
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
    ])


    function changeData(newLine,focusPoint, i) {
        let newData = [...data];
        newData[i].value=newLine;
        newData[i].inFocus=focusPoint;
        setData(newData)
        setPData(newData)
        // console.log(data);
    }

    function addStatement(i, start=-1) {
        let newData = [...data];
        let pos=-1;
        newData.find((val, index)=>{
            if(val.inFocus!=-1) {
                pos=index;
                return true
            }
        })
        
        if(pos!=-1)
        newData[pos].inFocus=-1;
        
        if(start!=-1) {
            newData.splice(i, 0, {value: newData[pos].value.substring(start), inFocus: 0, updateID: Math.random().toString(16).slice(2)});
            newData[pos].value=newData[pos].value.substring(0, start);
            newData[pos].updateID=Math.random().toString(16).slice(2);
        } else {
            newData.splice(i, 0, {value: "", inFocus: 0, updateID: Math.random().toString(16).slice(2)});
        }
        
        setData(newData)
    }

    function removeStatement(i) {

        if(i==0)
            return;

        let newData = [...data];
        newData.splice(i, 1);
        newData[i-1].inFocus=newData[i-1].value.length;
        newData[i-1].updateID=Math.random().toString(16).slice(2);
        setData(newData);
    }

    function changeFocus(i) {
        
        if(i>=data.length || i<0)
            return;   

        let newData = [...data];
        let pos;
        newData.find((val, index)=>{
            if(val.inFocus!=-1) {
                pos=index;
                return true
            }
        })
        
        newData[i].inFocus= newData[pos].inFocus;
        newData[pos].inFocus=-1;
        newData[i].updateID=Math.random().toString(16).slice(2);
        newData[pos].updateID=Math.random().toString(16).slice(2);

        setData(newData)
    }

    function formatData(data) {

        if(data.includes("-")) {
              data = `<li>${data.replace("-", "")}</li>`;     
        }

        if(data.includes("###")) {
            data = `<h1 style="font-size: 1.25rem" id=${data.replace("###", "")}><i class="fa-solid fa-square-arrow-up-right" style="color:#d4d6d4;opacity:0.4"></i> ${data.replace("###", "")}</h1>`;
        } else if(data.includes("##")) {
            data = `<h2 style="font-size: 1.55rem"><i class="fa-solid fa-square-arrow-up-right" style="color:#d4d6d4;opacity:0.4"></i> ${data.replace("##", "")}</h2>`;
        } else if(data.includes("#")) {
            data = `<h2 style="font-size: 2rem"><i class="fa-solid fa-square-arrow-up-right" style="color:#d4d6d4;opacity:0.4"></i> ${data.replace("#", "")}</h2>`;
        }
        
        if (data.includes("](")) {
            // incomplete code breaks then link contains _
            let posStart=-1;
            let posMid= data.indexOf("](");
            let posEnd=-1;
    
            let label;
            let href;
    
            for(let i=posMid;i>=0;i--) {
                if(data[i]=="[") {
                    posStart=i;
                    break;
                }
            }
    
            for(let i=posMid;i<data.length;i++) {
                if(data[i]==")") {
                    posEnd=i;
                    break;
                }
            }
    
            label=data.substring(posStart+1, posMid);
            href=data.substring(posMid+2, posEnd);
            
            // console.log(posStart, posEnd, label, href);
            
            data = `<a href=${href} style="text-decoration:underline;color:#2F81F7">${label}</a>`;
    
    
        }
        
        if (data.includes("**")) {
            data=data;
            let boldCount=0;
            let segCount=data.split("**").length-1;
            
            while(segCount--) {
                if(boldCount%2==0) {
                    data = data.replace("**", "<b>");
                } else {
                    data = data.replace("**", "</b>");
                }
                boldCount++;
            }
            
        }
        
        if (data.includes("~~")) {
            data=data;
            let count=0;
            let segCount=data.split("~~").length-1;
            
            while(segCount--) {
                if(count%2==0) {
                    data = data.replace("~~", "<del>");
                } else {
                    data = data.replace("~~", "</del>");
                }
                count++;
            }
            
        }

        if (data.includes("^^")) {
            data=data;
            let count=0;
            let segCount=data.split("^^").length-1;
            
            while(segCount--) {
                if(count%2==0) {
                    data = data.replace("^^", "<sup>");
                } else {
                    data = data.replace("^^", "</sup>");
                }
                count++;
            }
            
        }

        if (data.includes("__")) {
            data=data;
            let count=0;
            let segCount=data.split("__").length-1;
            
            while(segCount--) {
                if(count%2==0) {
                    data = data.replace("__", "<sub>");
                } else {
                    data = data.replace("__", "</sub>");
                }
                count++;
            }
            
        }

        if(data.includes("_")) {
            let italicsCount=0;
            let segCount=data.split("_").length-1;
            
            while(segCount--) {
                if(italicsCount%2==0) {
                    data = data.replace("_", "<i>");
                } else {
                    data = data.replace("_", "</i>");
                }
                italicsCount++;
            }
        }

        if (data.includes("`")) {
            data=data;
            let count=0;
            let segCount=data.split("`").length-1;
            
            while(segCount--) {
                if(count%2==0) {
                    data = data.replace("`", `<code style="border:1px solid #2a2a2a;padding: 5px;background-color:#202020;border-radius:3px">`);
                } else {
                    data = data.replace("`", "</code>");
                }
                count++;
            }
            
        }


    
        return data;
    }

    let rData="";
    data.map((el)=>{
    let val = formatData(el.value);
    rData+=`<span style="display: block">${val}</span>`;
    })

    return (
        <div className="">
        <code>
            {data.map((el, index)=>{

                return <Statement key={el.updateID + el.value} val={el} lineNumber={index+1} changeVal={changeData} addStatement={addStatement} removeStatement={removeStatement} changeFocus={changeFocus} />
            })}
        </code>
        <div className="bg-[#e8e7e7] text-[#282828] p-3 my-2 rounded-lg">
            <h3 className="text-lg underline">Output:</h3>
            <span dangerouslySetInnerHTML={{__html: rData}} className="p-4"></span>
        </div>
        </div>
    )
}