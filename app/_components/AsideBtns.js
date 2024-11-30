import { faTriangleExclamation, faUpRightFromSquare, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function AsideBtns() {
    return (
        <aside>
          <div className="outline oultine-1 outline-2 bg-[#fff] outline-slate-400/25 p-3 rounded md:m-3 mt-3 md:mt-0">
            <h4 className="underline decoration-[#a9a7a7]">
              Ask a question
            </h4>
            <small className="block mb-1 text-[#6a6a6a]">
              Have a doubt? Submit a question!
            </small>
            <Link
              href="/forums/ask"
              className="text-sm hover:underline text-[#f3f3f3] bg-[#4e88de] px-2 py-1.5 rounded"
            >
              Ask
              <FontAwesomeIcon
                icon={faUpRightFromSquare}
                className="inline w-3.5 ml-2"
              />
            </Link>
          </div>

          <div className="outline oultine-1 outline-2 bg-[#fff] outline-slate-400/25 p-3 rounded md:m-3 mt-3">
          <h4 className="underline decoration-[#a9a7a7]">
            Something wrong?
            </h4>
            <small className="block mb-1 text-[#6a6a6a]">
              Something not working? Let us know.
            </small>
            <Link
              href="/report"
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
    )
}