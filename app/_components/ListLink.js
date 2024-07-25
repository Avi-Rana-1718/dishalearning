import Link from "next/link";

export default function ListLink(props) {
    const {link, label} = props;
    return (
        <li className=" p-2 hover:underline">
            <Link href={link}>
                {label}
            </Link>
        </li>
    )
}