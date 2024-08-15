export default function Item(props) {
    const {text, author} = props;
    return (
    <div className="p-3 m-2 text-sm rounded outline outline-2 outline-slate-400/25">
        <p>{text}</p>
       <small className="text-xs">{author}</small>
    </div>
    )
}