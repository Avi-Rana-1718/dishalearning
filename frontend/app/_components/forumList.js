import Link from "next/link";
import { faQ } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import format from "md-extend";

export default function ForumList(props) {
  const { question, timestamp, url, tags} = props;
 
  let date=((new Date(timestamp).getDate()<=9?"0"+new Date(timestamp).getDate():new Date(timestamp).getDate()) + "/" + (new Date(timestamp).getMonth()+1<=9?"0"+(new Date(timestamp).getMonth()+1):new Date(timestamp).getMonth()+1) + "/" + new Date(timestamp).getFullYear());
  return (
    <li className="list-none outline outline-2 outline-slate-400/25 p-3 rounded m-3 cursor-pointer hover:bg-slate-300/25 hover:outline-none">
      <Link href={`/forums/${url}`}>
      <time className="text-xs text-[#6a6a6a]">{date}</time>
      <h3 className="" dangerouslySetInnerHTML={{__html:format(question)}}></h3>
      <ul className="flex">
        {(tags!=null)?(tags.map((el, i) => {
           return (<li className="text-xs bg-[#e8e8e8] rounded-full px-2 py-1 mr-1 mt-1" key={el + i}>{el}</li>);
        })):null}
      </ul>
      </Link>
    </li>
  );
}