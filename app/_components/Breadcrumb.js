import Link from "next/link";
import { faHouse, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Breadcrumb(props) {
    const {links} = props;
    return  (
        <ul className="flex mb-3 items-center">
            <li key="homeLi"><Link href="/"><FontAwesomeIcon icon={faHouse} className="text-[#0D6EFD] mr-1.5"/></Link></li>
            <li key="arrowLi"><FontAwesomeIcon icon={faChevronRight} className="mr-1.5 text-[#919191] text-xs" /></li>
            {links.map((el, index, arr)=>{
                return (
                    <>
                    <li className="inline" key={index + el}><Link href={el} className="text-[#0D6EFD] mr-1.5 inline hover:underline">{el[1].toUpperCase() + el.replace("/", "").substring(1)}</Link></li>
                    {(index!=arr.length-1)?(<li key={index + "arrowLi"}><FontAwesomeIcon icon={faChevronRight} className="mr-1.5 text-[#919191] text-xs" /></li>):null}
                    </>
                )
            })}
        </ul>
    )
}