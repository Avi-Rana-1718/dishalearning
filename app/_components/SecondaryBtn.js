import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SecondaryBtn(props) {
    const {link, label} = props;
    return (
        <button className="bg-[#888] py-2 px-3 my-3 text-[#f3f3f3] hover:underline">
            <a href={link}>
                {label}<FontAwesomeIcon icon={faUpRightFromSquare} className="inline w-3.5 ml-2"/>
            </a>
        </button>
    )
}