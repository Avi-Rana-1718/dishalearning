import Link from "next/link";
import ForumList from "../_components/forumList";
import Nav from "../_components/Nav";
import { faTriangleExclamation, faUpRightFromSquare, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";
import AsideBtns from "../_components/AsideBtns";


async function getData() {
  
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
  
  let data;
  
  const dbRef = ref(getDatabase());
  await get(child(dbRef, `data/`)).then((snapshot) => {
    if (snapshot.exists()) {
      data = snapshot.val();
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  }); 
  
  return data;
  }

export default async function Forums() {

  let data = await getData();
  

  return (
    <>
      <header className="bg-[#ceffd8] pb-10">
        <Nav navLinks={false} />
        <div className="text-center px-10 pt-10">
          <h3 className="text-4xl text-[#1e1e1e] mb-3">Forums</h3>
          <span className="text-[#6a6a6a]">Answers to all your questions</span>
        </div>
      </header>
      <main className="md:flex p-2">
        <div className="md:max-w-[80vw]">
          <h3 className="text-2xl m-3 mb-0">List</h3>
          <ul>
            
            {
              Object.keys(data).map(el => {
                // console.log(el)
                
                return <ForumList question={data[el].question} timestamp={data[el].timestamp} url={el} key={el} />
              })
            }
          </ul>
        </div>

        <aside className="md:sticky md:top-3">
          <h3 className="text-xl m-3 mb-0">More</h3>
          <AsideBtns />
        </aside>
      </main>
    </>
  );
}
