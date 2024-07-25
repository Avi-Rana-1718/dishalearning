export default function PrimaryBtn(props) {
    const {link, label} = props;
    return (
        <button className="bg-[#21B77C] py-2 px-3 my-3 text-[#fff] hover:underline">
            <a href={link}>
                {label}
            </a>
        </button>
    )
}