import React from 'react'
import {  Col, Alert, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './style.css'
export default function ScreenAlrt(props) {

    const {
        userCheck,
        alertid,
        startDate,
        textName,
        PathName
    } = props







    return userCheck &&

        <Link to={{pathname : PathName}}>
            <Col className={alertid ? "cart_login_s open" : "cart_login_s"}>

                <Alert variant="light">
                   

                  
                     <Alert.Heading>Hey, nice to see you</Alert.Heading>

                    <div className='fix-alrt-text'>{textName ? textName : null}</div>

                    {startDate ? <>{startDate.toString()}</> : null}


                    <p className="mb-0">
                        Whenever you need to, be sure to use margin utilities to keep things nice
                        and tidy.
                    </p>



                </Alert>

            </Col>
        </Link>

}





