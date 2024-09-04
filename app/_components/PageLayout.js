import Breadcrumb from "./Breadcrumb";

export default function PageLayout({children, breadLinks}) {
        
    return (
        <main className="p-5 md:p-7 bg-[#fff] md:flex md:justify-center">
            <section>
            <Breadcrumb links={breadLinks} />
            <div>
                <div className="flex flex-col-reverse md:flex-row md:justify-center">
                {children}
                </div>
            </div>
            </section>
        </main>
    )
}