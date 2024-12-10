import {
  faCircleCheck,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AlertDiv(props) {
  const { isError, title, desc } = props;
  console.log(desc);

  return (
    <div
      className={`p-3 rounded block mb-5 border-l-4 border-2 border-slate-400/25 ${
        isError ? "border-l-red-400" : "border-l-green-400"
      }`}
    >
      {isError ? (
        <FontAwesomeIcon icon={faCircleExclamation} className="mr-1" />
      ) : (
        <FontAwesomeIcon icon={faCircleCheck} className="mr-1" />
      )}
      <span dangerouslySetInnerHTML={{ __html: title }}></span>
      {desc != null ? (
        <small
          dangerouslySetInnerHTML={{ __html: desc }}
          className="block mt-2 text-xs"
        ></small>
      ) : null}
    </div>
  );
}
