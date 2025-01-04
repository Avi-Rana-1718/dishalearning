"use client"

export default function ShareBtn() {
    return (
        <button
        className="border-slate-400/25 hover:underlne hover:bg-slate-400/25 border-2 rounded-full px-2 py-0.5"
        onClick={()=>{
          navigator.share({
              url: window.location.href
            });
      }}
        >Share</button>
    )
}