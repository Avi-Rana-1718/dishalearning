import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-b-4 border-[#21B77C] p-4 flex justify-between">
            <h3 className="text-xl"><img src="/logo.png" className="inline mr-1 size-12" alt="Logo" />Disha Learning</h3>
            <ul>
                <li>
                    <h3>Explore</h3>
                    <ul>
                        <li className="text-[#6A6A6A]"><Link href="/">Forums</Link></li>
                        <li className="text-[#6A6A6A]"><Link href="/">Contact</Link></li>
                        <li className="text-[#6A6A6A]"><Link href="/">About</Link></li>

                    </ul>
                </li>
            </ul>
        </footer>
    )
}