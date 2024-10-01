import Breadcrumb from "./Breadcrumb";

export default function PageLayout({children, breadLinks}) {
        
    return (
        <main className="p-3 md:p-7 bg-[#fff] md:flex md:justify-center w-full">
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