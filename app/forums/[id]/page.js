import Nav from "@/app/_components/Nav";
import { faTriangleExclamation, faUpRightFromSquare, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";


export default function Page() {
    return (
        <>
         <header className="bg-[#ceffd8] pb-10">
        <Nav navLinks={false} />
        <div className="text-left px-10 py-10">
          <h3 className="text-4xl text-[#1e1e1e] mb-3">Forums</h3>
          <span className="text-[#6a6a6a]">Answers to all your questions</span>
        </div>
      </header>
        <main className="p-5 md:flex">
            <div className="grow outline oultine-1 outline-2 min-h-[70vh] outline-slate-400/25 rounded md:max-w-[80vw] p-4">
            <h4 className="text-[#04AA6D] inline text-xl">Question : </h4>
            <span className="text-xl">It is a hot summer day Priyanshi and Ali are wearing cotton and nylon clothes respectively. Who do you think would be more comfortable and why?</span>
            <small className="block mt-1">Submitted on 21/8/2024 | Answered by Vandana Rana</small>
            <h4 className="text-[#04AA6D] text-xl mt-5">Answer : </h4>
            <p>
            Priyanshi would be more comfortable.
The reason is that we get a lot of sweat on our body in a hot summer day.
Cotton being a good absorber of water, absorbs sweat from the body and provides larger surface area for evaporation which causes more cooling effect.
The Nylon clothes do not absorb much of sweat, so they fail to keep our body cool in summer.Ali would feel uncomfortable.
            </p>
            </div>

            <aside className="md:sticky md:top-3">
          <h3 className="text-xl m-3 mb-0">More</h3>
          <div className="outline oultine-1 outline-2 outline-slate-400/25 p-3 rounded m-3">
            <h4>
              <FontAwesomeIcon
                icon={faQuestion}
                className="w-4 text-[#FBA748] inline"
              />{" "}
              Ask a question
            </h4>
            <small className="block mb-1 text-[#6a6a6a]">
              Have a doubt? Submit a question!
            </small>
            <Link
              href="/"
              className="text-sm hover:underline text-[#f3f3f3] bg-[#4e88de] px-2 py-1.5 rounded"
            >
              Ask
              <FontAwesomeIcon
                icon={faUpRightFromSquare}
                className="inline w-3.5 ml-2"
              />
            </Link>
          </div>

          <div className="outline oultine-1 outline-2 outline-slate-400/25 p-3 rounded m-3">
            <h4>
              <FontAwesomeIcon
                icon={faTriangleExclamation}
                className="w-4 text-[#d0579e] inline"
              />{" "}
              Something wrong?
            </h4>
            <small className="block mb-1 text-[#6a6a6a]">
              Something not working? Let us know.
            </small>
            <Link
              href="/"
              className="text-sm hover:underline text-[#f3f3f3] bg-[#e36262] px-2 py-1.5 rounded"
            >
              Report
              <FontAwesomeIcon
                icon={faUpRightFromSquare}
                className="inline w-3.5 ml-2"
              />
            </Link>
          </div>
        </aside>
       
        </main>
        </>
    )
}