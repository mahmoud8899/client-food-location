import React from 'react'
import Styles from './style'


const ButtomClick = (props) => {

    const {
        onClick,
        title,
        disabled,
        type,
        style,
        DisaBledStyle,
    } = props



    return <button
        onClick={onClick}
        type={type}
        disabled={disabled}
        style={disabled ? DisaBledStyle ? DisaBledStyle : Styles.disabled : style}
    >
        {title ? title : null}
    </button>
}





export default ButtomClick


