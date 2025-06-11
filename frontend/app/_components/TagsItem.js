import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function TagsItem({el, index, remove}) {
    return (
    <li 
        key={el + index} 
        onClick={()=>remove(el)} 
        className="group m-1 hover:bg-[#b7b7b7] bg-[#d2d2d2] px-3 py-1 rounded-full text-sm cursor-pointer"
    >
        {el}
        <FontAwesomeIcon icon={faCircleXmark} className="group-hover:inline hidden ml-1 text-[#555555]"/>
    </li>
    )
}