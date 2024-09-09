import Link from "next/link";

export default function Nav(props) {
    const {navLinks}=props;

    return (
    <nav className="flex justify-between p-3">
        <h3>
        <Link href="/">
        <img src="/logo.png" className="inline mr-1 size-10" alt="Logo" />
        Disha Learning
        </Link>
        {
            (navLinks!=undefined)?(<span className="md:hidden text-xs ml-0.5">
                <Link href="/forums">
                /forums
                </Link>
            </span>):null
        }
        
        </h3>
        {(navLinks==undefined?
        <ul className="flex items-center">
            <li className="px-1 mx-1"><Link href="/" className="hover:underline">Home</Link></li>
            <li className="px-1 mx-1"><Link href="/forums" className="hover:underline">Forums</Link></li>
            <li className="px-1 mx-1"><Link href="#contact" className="hover:underline">Contact</Link></li>
        </ul>:
        null)}
        <span className="flex items-center hidden md:block">
            <Link href="/auth" className="bg-[#21B77C] text-[#fff] px-3.5 py-2 rounded-full hover:underline">
            Sign up
            </Link>
        </span>
    </nav>
    )
}