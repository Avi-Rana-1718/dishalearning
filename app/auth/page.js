import SecondaryLayout from "../_components/SecondaryLayout";

export default function Page() {
    return (
        <>
            <SecondaryLayout navLinks={false}>
                <h3 className="text-xl mb-5 underline decoration-[#04AA6D]">Sign In</h3>
                <form>
                <label htmlFor="fTitle">
                Email<span className="text-red-600">*</span>
                <small className="block text-[#6A6A6A]">Be specific and try to write as much as possible.</small>
                </label>
                <input id="fTitle" type="text" className="outline oultine-1 outline-2 outline-slate-400/25 p-3 rounded my-3 max-w-[70vw] block" placeholder="Email" autocomplete="off" required></input>
                <label htmlFor="fPass">
                Password<span className="text-red-600">*</span>
                <small className="block text-[#6A6A6A]">Be specific and try to write as much as possible.</small>
                </label>
                <input id="fPassword" type="password" className="outline oultine-1 outline-2 outline-slate-400/25 p-3 rounded my-3 max-w-[70vw] block" placeholder="Password" required></input>
                <button className="text-sm hover:underline text-[#f3f3f3] bg-[#6A6A6A] px-2 py-1.5 rounded disabled:hover:no-underline disabled:opacity-75" type="submit">
                Submit
                </button>
                </form>
            </SecondaryLayout>
        </>
    )
}