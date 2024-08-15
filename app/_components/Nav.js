export default function Nav(props) {
    
    return (
    <nav className="flex justify-between p-3">
        <h3>
        <img src="/logo.png" className="inline mr-1 size-12" alt="Logo" />
        Disha Learning
        </h3>
        <ul className="flex items-center">
            <li className="px-1 mx-1"><a href="/home" className="hover:underline">Home</a></li>
            <li className="px-1 mx-1"><a href="/about" className="hover:underline">About</a></li>
            <li className="px-1 mx-1"><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>
        <span className="flex items-center hidden md:block">
            <a href="/auth" className="bg-[#21B77C] px-3.5 py-2 rounded-full hover:underline">
            Sign up
            </a>
        </span>
    </nav>
    )
}