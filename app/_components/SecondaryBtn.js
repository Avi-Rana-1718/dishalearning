export default function SecondaryBtn(props) {
    const {link, label} = props;
    return (
        <button className="bg-[#888] py-2 px-3 my-3 text-[#f3f3f3] hover:underline">
            <a href={link}>
                {label}
            </a>
        </button>
    )
}