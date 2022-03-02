import { Image } from 'react-bootstrap'




export default function ImageScreen(props) {

    const {
        ImageIcon,
        className,
        style,
        onClick
    } = props


    return <Image
        src={ImageIcon}
        className={className}
        alt={ImageIcon}
        style={style}
        onClick={onClick}

    />
}