export default function ReviewLi(props) {
    let {message, author} = props
    return (
        <li className="text-left text-sm outline oultine-1 outline-2 outline-slate-400/25 p-3 rounded">
            <h3>{message}</h3>
            <small>{author}</small>
        </li>
    )
}