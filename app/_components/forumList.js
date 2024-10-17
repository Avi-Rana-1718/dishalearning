import Link from "next/link";
import { faQ } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import format from "@/format";

export default function ForumList(props) {
  const { question, timestamp, url} = props;
 
  let date=(new Date(timestamp).getDate() + "/" + (new Date(timestamp).getMonth()+1) + "/" + new Date(timestamp).getFullYear())
  return (
    <li className="list-none outline outline-2 outline-slate-400/25 p-3 rounded m-3">
      <Link href={`/forums/${url}`}>
      <time className="text-xs text-[#6a6a6a]">{date}</time>
      <h3 className="flex items-center hover:underline" dangerouslySetInnerHTML={{__html:format(question)}}></h3>
      <ul className="flex">
        {/* {tags.map((el, i) => {
           return (<li className="text-xs mr-1 text-[#6a6a6a]" key={el + i}>{el}</li>);
        })} */}
      </ul>
      </Link>
    </li>
  );
}