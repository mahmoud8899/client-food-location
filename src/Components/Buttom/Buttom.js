import React from 'react'
import Styles from './style'


const ButtomClick = (props) => {

    const {
        onClick,
        title,
        disabled,
        type,
        style,
    } = props



    return <button
        onClick={onClick}
        type={type}
        disabled={disabled}
        style={disabled ? Styles.disabled : style}
       
       


    >
        {title ? title : null}
    </button>
}





export default ButtomClick


