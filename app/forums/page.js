import Link from "next/link";
import ForumList from "../_components/forumList";
import Nav from "../_components/Nav";
import { faTriangleExclamation, faUpRightFromSquare, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Forums() {

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
        <div className="grow">
          <h3 className="text-2xl m-3 mb-0">List</h3>
          <ul>
            <ForumList
              question="How many types of indicators are there?"
              tags={["Chemistry", "10th"]}
              timestamp="10/7/2024"
              link="/"
            />
            <ForumList
              question="If one AM ‘a’ and two GM’s p and q are inserted between any two given numbers then find value of 2A"
              tags={["Chemistry", "10th"]}
              timestamp="10/7/2024"
              link="/"
            />
            <ForumList
              question="How many types of indicators are there?"
              tags={["Chemistry", "10th"]}
              timestamp="10/7/2024"
              link="/"
            />
            <ForumList
              question="How many types of indicators are there?"
              tags={["Chemistry", "10th"]}
              timestamp="10/7/2024"
              link="/"
            />
            <ForumList
              question="If one AM ‘a’ and two GM’s p and q are inserted between any two given numbers then find value of 2A"
              tags={["Chemistry", "10th"]}
              timestamp="10/7/2024"
              link="/"
            />
            <ForumList
              question="How many types of indicators are there?"
              tags={["Chemistry", "10th"]}
              timestamp="10/7/2024"
              link="/"
            />
            <ForumList
              question="How many types of indicators are there?"
              tags={["Chemistry", "10th"]}
              timestamp="10/7/2024"
              link="/"
            />
            <ForumList
              question="If one AM ‘a’ and two GM’s p and q are inserted between any two given numbers then find value of 2A"
              tags={["Chemistry", "10th"]}
              timestamp="10/7/2024"
              link="/"
            />
            <ForumList
              question="How many types of indicators are there?"
              tags={["Chemistry", "10th"]}
              timestamp="10/7/2024"
              link="/"
            />
          </ul>
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
  );
}
