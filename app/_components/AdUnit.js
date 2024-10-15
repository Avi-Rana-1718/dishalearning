"use client"
import Script from "next/script";
import { useEffect } from "react";

export default function AdUnit() {
    useEffect(()=>{
        try {
     (adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.log(err);
            
        }
    }, [])
    
    return (
        <>
    <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2591722971865211"
     crossorigin="anonymous" />
    <ins class="adsbygoogle"
      style={{
        display: 'block',
        overflow: 'hidden',
      }}
     data-ad-client="ca-pub-2591722971865211"
     data-ad-slot="9168603181"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
    </>
    )
}