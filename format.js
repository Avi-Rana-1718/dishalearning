export default function format(data) {
    console.log(data);
    
    let nData=data.trim().split(/\n/);

    nData = nData.map(val=>{
        let el= val.trim();
        let isHeading=false;
        
        //line break
        if(el==""){
            el =  `<br/>`;
            return el;
        }
        //headings
            if(el.includes("###")) {
                isHeading=true;
                el =   `<h3 class="text-xl">${el.replace("###", "")}</h3>`;
            }
            if(el.includes("##")) {
                isHeading=true;
                el =   `<h2 class="text-2xl">${el.replace("##", "")}</h2>`;
            }
            if(el.includes("#")) {
                isHeading=true;
                el =   `<h1 class="text-3xl">${el.replace("#", "")}</h1>`;
            }
        //formatting
        if(el.includes("**")) {
            let count = el.split("**").length;
            while(count--) {
                if(count%2==0) {
                    el=el.replace("**", "<b>");
                } else {
                    el=el.replace("**", "</b>");
                }
            }
        }
        if(el.includes("__")) {
            let count = el.split("__").length;
            while(count--) {
                if(count%2==0) {
                    el=el.replace("__", "<em>");
                } else {
                    el=el.replace("__", "</em>");
                }
            }
        }
        if(el.includes("--")) {
            let count = el.split("--").length;
            while(count--) {
                if(count%2==0) {
                    el=el.replace("--", "<strike>");
                } else {
                    el=el.replace("--", "</strike>");
                }
            }
        }
        if(el.includes("^")) {
            let count = el.split("^").length;
            while(count--) {
                if(count%2==0) {
                    el=el.replace("^", "<sup>");
                } else {
                    el=el.replace("^", "</sup>");
                }
            }
        }
        if(el.includes("_")) {
            let count = el.split("_").length;
            while(count--) {
                if(count%2==0) {
                    el=el.replace("_", "<sub>");
                } else {
                    el=el.replace("_", "</sub>");
                }
            }
        }

        //list
        if(el.startsWith("-")) {
            el =  `<li>${el.replace("-", "")}</li>`;
        }

        if(!isHeading)
        el +=`<br/>`;
        


        return el;
    })
    

    return nData.join(" ");
}
