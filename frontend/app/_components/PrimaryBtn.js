export default function PrimaryBtn(props) {
    const {label, link} = props;
    return (
        <button className="bg-[#222222] text-[#fff] py-1 px-4 rounded-full my-2 hover:underline">
            <a href={link}>
                {label}
            </a>
        </button>
    )
}