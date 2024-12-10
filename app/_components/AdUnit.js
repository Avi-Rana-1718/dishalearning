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
   
        </> 
    )
}