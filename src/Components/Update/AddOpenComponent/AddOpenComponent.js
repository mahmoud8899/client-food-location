import { Link } from "react-router-dom"





export default function AddOpenComponent(props) {
    const {
        PathName,
        Titel,
        style,
        className,
        classNameTitle,
        classNamePluse
    } = props



    return <Link
        className={className}
        style={style}
        to={{
            pathname : PathName
        }}
    >
        <span className={classNamePluse ? classNamePluse : 'pluse-class'} >+</span>
        <div className={classNameTitle ? classNameTitle : 'items-name-first-name'}>{Titel}</div>
    </Link>
}