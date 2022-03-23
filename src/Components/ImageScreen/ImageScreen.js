import { Image } from 'react-bootstrap'




export default function ImageScreen(props) {

    const {
        ImageIcon,
        className,
        style,
        onClick,
        fluid
    } = props


    return <Image
    fluid={fluid}
        src={ImageIcon}
        className={className}
        alt={ImageIcon}
        style={style}
        onClick={onClick}

    />
}