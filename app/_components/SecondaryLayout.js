import Breadcrumb from "./Breadcrumb";
import Nav from "./Nav";

export default function SecondaryLayout({children, navLinks}) {
        
    return (
        <main className="p-3 pt-0 bg-[#CEFFD8] h-svh">
            <Nav navLinks={navLinks}/>
            <section className="flex justify-center items-center h-[80%]">
                <div className="outline outline-2 outline-slate-400/25 rounded md:max-w-[50vw] p-4 bg-[#fff]">
                 {children}
                </div>
            </section>
        </main>
    )
}