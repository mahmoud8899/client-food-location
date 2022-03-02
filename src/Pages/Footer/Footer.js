
import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import Styles from './style'
import { MyOderImage } from '../../Assistant/MyOrderImage'
import './Footer.css'
import { AiOutlineApple } from 'react-icons/ai'
import { useHistory } from 'react-router-dom'
import { FirstNameRest } from '../../Assistant/Selection'
import {
    RouterWork,
    ContactPage,
    AboutPage,
} from '../../Components/Update/Conversion/Conversion'

const Footer = () => {


    const history = useHistory()





    return (

        <Container fluid className="container_color_footer">
            <Row style={Styles.row} className="justify-content-center">

                <Col xs={6} sm={6} md={4} lg={4}>

                    <div style={Styles.container}>
                        <div style={Styles.test} >
                            <span >{FirstNameRest}</span>
                        </div>


                        <div style={Styles.test} >
                            <h1 style={Styles.fontSize} >Download the app</h1>
                        </div>

                        <div style={Styles.test} >
                            <div style={Styles.app}>
                                <AiOutlineApple style={Styles.iconios} />
                                <div style={Styles.textflex}>
                                    <span>Download on The</span>
                                    <span>Apple Store</span>
                                </div>
                            </div>
                        </div>


                        <div style={Styles.test} >
                            <div style={Styles.app}>
                                <Image src={MyOderImage.android} style={Styles.mat} />
                                <div style={Styles.textflex}>
                                    <span>Download on The</span>
                                    <span>Apple Store</span>
                                </div>
                            </div>
                        </div>
                    </div>




                </Col>





                <Col xs={6} sm={6} md={4} lg={4}>
                    <div style={Styles.container}>
                        <div style={Styles.test} >



                            <span > {FirstNameRest}</span>



                        </div>

                        <div style={Styles.test} >
                            <h1 style={Styles.fontSize} onClick={(e) => ContactPage(history)} >Contact</h1>
                        </div>

                        <div style={Styles.test} >
                            <h1 style={Styles.fontSize} onClick={(e) => AboutPage(history)} >About</h1>
                        </div>


                    </div>


                </Col>

                <Col xs={6} sm={6} md={4} lg={4}>
                    <div style={Styles.container}>

                        <div style={Styles.test} >
                            <p  >Let's do this together</p>
                        </div>
                        <div style={Styles.test} onClick={(e) => RouterWork(history)} >
                            <h1 style={Styles.fontSize} >work</h1>
                        </div>
                    </div>

                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col xs={10} sm={10} md={6} lg={6}>
                    <div style={Styles.container}>
                        <div style={Styles.last}>
                            <span>
                                ©️ uppsala mat {new Date().getFullYear()}
                            </span>

                        </div>

                    </div>

                </Col>
                <Col xs={10} sm={10} md={6} lg={6} className='bottom-max-footer'>
                    <div style={Styles.container}>

                        <div style={Styles.last}>
                            <div style={Styles.lastbox}>
                                <Image src={MyOderImage.face} style={Styles.image} alt={MyOderImage.face} />
                            </div>
                            <div style={Styles.lastbox}>
                                <Image src={MyOderImage.instagram} style={Styles.image} alt={MyOderImage.instagram} />
                            </div>

                            <div style={Styles.lastbox}>
                                <Image src={MyOderImage.twitter} style={Styles.image} alt={MyOderImage.twitter} />
                            </div>

                        </div>
                    </div>
                </Col>
            </Row>

        </Container>

    )

}



export default Footer



