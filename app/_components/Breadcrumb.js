import Link from "next/link";
import { faHouse, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Breadcrumb(props) {
    const {links} = props;
    return  (
        <ul className="flex mb-3 items-start text-sm">
            <li><Link href="/"><FontAwesomeIcon icon={faHouse} className="h-[0.85rem] text-[#0D6EFD] mr-1.5"/></Link></li>
            <li><FontAwesomeIcon icon={faChevronRight} className="h-[0.7rem] mr-1.5 align-middle text-[#919191]" /></li>
            {links.map((el, index, arr)=>{
                return (
                    <>
                    <li><Link href={el} className="text-[#0D6EFD] mr-1.5 hover:underline">{el[1].toUpperCase() + el.replace("/", "").substring(1)}</Link></li>
                    {(index!=arr.length-1)?(<li><FontAwesomeIcon icon={faChevronRight} className="h-[0.75em] mr-1.5 text-[#919191]" /></li>):null}
                    </>
                )
            })}
        </ul>
    )
}