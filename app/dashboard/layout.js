"use client"
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useRouter } from "next/navigation";

export default function DashboardLayout({children}) {
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
      let router = useRouter()

          // auth 
    onAuthStateChanged(auth, (user) => {

        if(!user) {
            router.push("/auth")
        }
      });
    return (
        <>
        {children}
        </>
    )
}