import Link from "next/link";
import ListLink from "./ListLink";

export default function Navbar(props) {
  const { forum } = props;

  if (forum == "true") {
    return (
      <nav className="flex text-xl md:text-2xl font-normal p-2 justify-between ">
        <div>
          <Link href="/" className="font-medium">
            <img src="/logo.png" className="inline mr-1 size-12" alt="Logo" />
            Disha Learning
          </Link>
          <Link href="/forums" className="font-medium">
            <span className="text-[#888] text-sm ml-1">/forums</span>
          </Link>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="flex text-xl md:text-2xl font-normal p-2 justify-between ">
        <Link href="/" className="font-medium">
          <img src="/logo.png" className="inline mr-1 size-12" alt="Logo" />
          Disha Learning
        </Link>
        <div>
          <ul className="flex text-sm md:text-xl">
            <ListLink link="/forums" label="Forums" />
            <ListLink link="/" label="Blog" />
            <ListLink link="/" label="Contact" />
          </ul>
        </div>
      </nav>
    );
  }
}
