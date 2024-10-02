import { faCircleCheck, faCircleExclamation} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AlertDiv(props) {
  const {isError, title, desc} = props;
    return (
            (isError==false)?(
             <span className="p-3 rounded bg-green-300 text-green-800 block mb-5">
              <FontAwesomeIcon icon={faCircleCheck} className="mr-1"/>
              <span dangerouslySetInnerHTML={{__html: title}}></span>
              {(desc!=null)?(<small className="block mt-2 text-xs">
                  {desc}
                </small>):null}
              </span>
            ):(
            <span className="p-3 rounded bg-red-300 text-red-800 block mb-5">
              <FontAwesomeIcon icon={faCircleExclamation} className="mr-1"/>
              <span dangerouslySetInnerHTML={{__html: title}}></span>
              {(desc!=null)?(<small className="block mt-2 text-xs">
                  {desc}
                </small>):null}
            </span>
            )
    )
}