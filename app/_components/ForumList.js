import Link from "next/link";
import { faQ } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ForumList(props) {
  const { question, tags, timestamp, link } = props;
  return (
    <li className="list-none outline oultine-1 outline-2 outline-slate-400/25 p-3 rounded m-3">
      <Link href={link}>
      <time className="text-xs text-[#6a6a6a]">{timestamp}</time>
      <h3 className="flex items-center hover:underline">{question}</h3>
      <ul className="flex">
        {tags.map((el, i) => {
           return (<li className="text-xs mr-1" key={el + i}>{el}</li>);
        })}
      </ul>
      </Link>
    </li>
  );
}
