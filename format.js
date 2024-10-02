export default function format(data) {
    let nData=data.trim().split(/\n/);
    console.log(nData);
    
    // headings
    nData = nData.map(val=>{
        let el= val.trim();
        
        //line break
        if(el==""){
            el =  `<br/>`;
        }
        //headings
            if(el.includes("###")) {
                el =   `<h3 class="text-xl">${el.replace("###", "")}</h3>`;
            }
            if(el.includes("##")) {
                el =   `<h2 class="text-2xl">${el.replace("##", "")}</h2>`;
            }
            if(el.includes("#")) {
                el =   `<h1 class="text-3xl">${el.replace("#", "")}</h1>`;
            }

        //list
        if(el.startsWith("-")) {
            el =  `<li>${el.replace("-", "")}</li>`
        }


        return el;
    })
    

    return nData.join(" ");
}
