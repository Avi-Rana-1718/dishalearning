import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PrimaryBtn(props) {
    const {link, label} = props;
    return (
        <button className="bg-[#21B77C] py-2 px-3 my-3 text-[#fff] hover:underline flex-inline align-baseline items-center">
            <a href={link}>
                {label}<FontAwesomeIcon icon={faUpRightFromSquare} className="inline w-3.5 ml-2"/>
            </a>
        </button>
    )
}