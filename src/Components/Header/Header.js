import React from 'react'
import { Row, Col, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Styles from './styles'

const Header = (props) => {


    const { linkName, back, Tital, Icons, flxiStyle, shipping, lastIcons } = props

    return <Row>
        <Col className="navBar_Shipping">

            <h1>{Tital}</h1>
            <div style={shipping ? shipping : Styles.Back_Home}>
                <Link style={flxiStyle ? flxiStyle : Styles.Back_Home_A} to={back}>
                    {linkName}
                    <i style={Styles.icons} className={Icons}></i>
                </Link>
                {lastIcons ?
                    <>
                        / <Link to={`/cart`}>
                            Cart Items
                            <i style={Styles.icons} className={Icons}></i>
                        </Link> /

                        <Link to={`/order/payment`}>
                            <span style={Styles.olikeColor}>My Shopping Cart</span>
                        </Link>


                    </>
                    : null}

            </div>

        </Col>
    </Row >
}




export default Header