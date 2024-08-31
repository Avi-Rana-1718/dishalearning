import Link from "next/link";
import Nav from "./Nav";

export default function Header(props) {
    const {title, subtitle} = props;
    return (
        <header className="bg-[#ceffd8] pb-10">
        <Nav navLinks={false} />
        {(title!=null && subtitle!=null)?(
           <div className="text-center px-10 pt-10">
           <h3 className="text-4xl text-[#1e1e1e] mb-3">{title}</h3>
           <span className="text-[#6a6a6a]">{subtitle}</span>
         </div>
        ):null}
      </header>
    )
}