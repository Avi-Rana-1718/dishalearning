export default function TitleDiv(props) {
    const {title, subtitle, desc} = props;
    return (
        <div className="mt-2 mb-4 md:mx-8 md:mt-0 w-80">
            <div className="p-2 rounded rounded-b-none border-2 border-b-0 border-slate-400/25 bg-[#F9FAFA] text-[#3B4045]">
            <span className="underline">{title}</span>
            </div>
            <div className="rounded text-xs rounded-t-none p-2 border-2 border-slate-400/25">
            <small className="block text-[#6A6A6A] text-sm">{subtitle}</small>

            <ul className="text-[#6A6A6A] text-sm mt-2">
                {desc.map(el=>{
                    return <li key={el}>{"- " + el}</li>
                })}
            </ul>
            </div>
        </div>
    )
}