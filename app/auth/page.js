"use client"
import Link from "next/link";
import SecondaryLayout from "../_components/SecondaryLayout";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { faCircleCheck, faCircleExclamation} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";


const firebaseConfig = {
    apiKey: "AIzaSyCciV3sOwkss506-379tA5SanyezujbYNA",
    authDomain: "ans-dishalearning.firebaseapp.com",
    databaseURL: "https://ans-dishalearning-default-rtdb.firebaseio.com",
    projectId: "ans-dishalearning",
    storageBucket: "ans-dishalearning.appspot.com",
    messagingSenderId: "82099435116",
    appId: "1:82099435116:web:f4f39e49e614a93968ca49",
    measurementId: "G-L2JJWD8DNT"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);

export default function Page() {

    let router = useRouter()

        onAuthStateChanged(auth, (user) => {
            if (user) {
                router.push("/dashboard")
            }
          });

    const [sendStatus, setSendStatus] = useState(null);
    const [authStatus, setAuthStatus] = useState(null);
    return (
        <>
            <SecondaryLayout navLinks={false}>
                <div className="w-full">
                <h3 className="text-xl underline decoration-[#04AA6D]">Authenticate</h3>
                <small className="mb-3 block text-[#6A6A6A]">Login into an existing account.</small>
                {
                authStatus==true?(
                <span className="p-3 rounded bg-green-300 text-green-800 inline-block mb-5"><FontAwesomeIcon icon={faCircleCheck} /> Logged In! Redirecting to <Link href="/dashboard" className="hover:underline">dashboard</Link></span>
                ):((authStatus!=false && authStatus!=null)?(
                <span className="p-3 rounded bg-red-300 text-red-800 inline-block mb-5"><FontAwesomeIcon icon={faCircleExclamation} /> An error occured! {authStatus}</span>
                ):(null))
                }
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    setSendStatus(true)
                    signInWithEmailAndPassword(auth, e.target[0].value, e.target[1].value)
                        .then((userCredential) => {
                            // Signed in 
                            const user = userCredential.user;
                            setSendStatus(false);
                            setAuthStatus(true);
                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            setSendStatus(false);
                            setAuthStatus(errorMessage);
                        });
                        
                    
                }}>
                <label htmlFor="fTitle">
                Email<span className="text-red-600">*</span>
                </label>
                <input id="fTitle" type="text" className="outline oultine-1 outline-2 outline-slate-400/25 p-3 rounded my-3 w-full min-w-[20vw] block" placeholder="Email" autocomplete="off" required></input>
                <label htmlFor="fPass">
                Password<span className="text-red-600">*</span>
                </label>
                <input id="fPassword" type="password" className="outline oultine-1 outline-2 outline-slate-400/25 p-3 rounded my-3 w-full min-w-[20vw] block" placeholder="Password" required></input>
                <small className="flex justify-end text-[#2f82ff] hover:underline">
                    <Link href="/auth/forgot">Forgot password?</Link>
                </small>
                <button disabled={sendStatus} className="text-sm hover:underline text-[#f3f3f3] bg-[#6A6A6A] px-2 py-1.5 rounded disabled:hover:no-underline disabled:opacity-75" type="submit">
                {(sendStatus==true)?(<svg className="inline animate-spin" xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q17 0 28.5 11.5T520-840q0 17-11.5 28.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-17 11.5-28.5T840-520q17 0 28.5 11.5T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Z"/></svg>):null}
                 Login
                </button>
                </form>
                </div>
            </SecondaryLayout>
        </>
    )
}