import { Fragment, useState } from 'react'
import InputSearchLocation from '../../Components/Update/InputSearchLocation/InputSearchLocation'
import { Col, Form, Row } from 'react-bootstrap'
import ButtomClick from '../../Components/Buttom/Buttom'
import Styles from '../../Components/Update/StylesComponents/style'
import LoginScreen from '../LoginScreen/LoginScreen'


export default function NotUserSerchingCity(props) {


    const [loginOpen, setLoginOpen] = useState(false)


    return <Fragment>

        <div className='first-city-location add-padding-loaction'>
            <p>
                Please enter your address to see from which restaurants and stores we deliver to you
            </p>
        </div>


        <Form>
            <Row className='add-padding-loaction'>
                <Col xs={12} sm={12} md={12} lg={12}>
                <p className=''>street address</p>
                </Col>
                <Col xs={7} sm={7} md={8} lg={8}>
                    <InputSearchLocation />

                </Col>
                <Col xs={5} sm={5} md={4} lg={4}>
                    <ButtomClick title='search' style={Styles.InputButtom} />
                </Col>
            </Row>
        </Form>

        <div className='loaction-bottom'></div>

        <Row className='add-padding-loaction'>

            <Col xs={5} sm={4} md={4} lg={4}>
                <ButtomClick
                    title='Sing up'
                    style={Styles.LocationcolorB}
                    onClick={() => setLoginOpen(!loginOpen)}
                />

            </Col>
            <Col xs={5} sm={4} md={4} lg={4}>

                <ButtomClick
                    title='log in'
                    style={Styles.Locationcolor}
                    onClick={() => setLoginOpen(!loginOpen)}
                />

            </Col>
        </Row>



        {loginOpen &&
            <LoginScreen
                loginOpen={loginOpen}
                setLoginOpen={setLoginOpen}
            />
        }


    </Fragment>

}