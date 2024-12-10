import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Breadcrumb(props) {
    const {links} = props;
    if(links.length==0) {
        return null;
    }
    return  (
        <ul className="flex mb-3 items-center">
            <li key="homeLi"><Link href="/forums"><FontAwesomeIcon icon={faHouse} className="text-[#0D6EFD] mr-1.5"/></Link></li>
            <li key="arrowLi"><FontAwesomeIcon icon={faChevronRight} className="mr-1.5 text-[#919191] text-xs" /></li>
            {links.map((el, index, arr)=>{
                return (
                    <>
                    {
                        ((index!=arr.length-1))?(
                            <>
                        <li className="inline" key={index + el}><Link href={el} className="text-[#0D6EFD] mr-1.5 inline hover:underline">{el[1].toUpperCase() + el.replace("/", "").substring(1)}</Link></li>
                        <li key={index + "arrowLi"}><FontAwesomeIcon icon={faChevronRight} className="mr-1.5 text-[#6A6A6A] text-xs" /></li>
                        </>
                        ):(
                            <li key={index + el} className="text-[#6a717d] mr-1.5 inline">{(el=="/")?"/":el[1].toUpperCase() + el.replace("/", "").substring(1)}</li>
                        )
                    }
                    </>
                )
            })}
        </ul>
    )
}