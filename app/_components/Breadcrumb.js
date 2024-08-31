import Link from "next/link";
import { faHouse, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Breadcrumb(props) {
    const {links} = props;
    return  (
        <ul className="flex mb-3 items-center">
            <li><Link href="/"><FontAwesomeIcon icon={faHouse} className="h-[1em] text-[#0D6EFD] mr-1"/></Link></li>
            <li><FontAwesomeIcon icon={faChevronRight} className="h-[0.75em] mr-1 flex" /></li>
            {links.map((el, index, arr)=>{
                return (
                    <>
                    <li><Link href={el} className="mr-l text-[#0D6EFD] mr-1">{el[1].toUpperCase() + el.replace("/", "").substring(1)}</Link></li>
                    {(index!=arr.length-1)?(<li><FontAwesomeIcon icon={faChevronRight} className="h-[0.75em] mr-1" /></li>):null}
                    </>
                )
            })}
        </ul>
    )
}