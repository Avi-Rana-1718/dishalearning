import Link from "next/link";

export default function Breadcrumb(props) {
    const {path} = props;
    return (
        <ul className="flex p-4">
            {
                path.map((el, i, arr)=>{
                    return <li><Link href={el.href}>{el.name}</Link>{(i!=arr.length-1?"/":null)}</li>
                })
            }
        </ul>
    )
}