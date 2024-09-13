import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-b-4 border-[#21B77C] p-8 flex justify-between bg-[#fffdfd]">
            <h3 className="text-base">
                <img src="/logo.png" className="inline mr-1 size-9" alt="Logo" />
                Disha Learning
                
            </h3>
            <ul className="flex">
                <li className="ml-5">
                    <h3 className="underline">Explore</h3>
                    <ul>
                        <li className="text-[#6A6A6A]"><Link href="/dashboard">Dashboard</Link></li>
                        <li className="text-[#6A6A6A]"><Link href="/auth">Auth</Link></li>
                        <li className="text-[#6A6A6A]"><Link href="/forums">Forums</Link></li>
                    </ul>
                </li>
                <li className="ml-5">
                    <h3 className="underline">Legal</h3>
                    <ul>
                        <li className="text-[#6A6A6A]"><Link href="/sitemap.xml">Sitemap</Link></li>
                        <li className="text-[#6A6A6A]"><Link href="/privacy">Privacy Policy</Link></li>
                    </ul>
                </li>
            </ul>
        </footer>
    )
}