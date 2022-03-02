import {  Row, Col, } from 'react-bootstrap'
import './PaymentScreen.css'
import { FirstNameRest } from '../../Assistant/Selection'
import Input from '../../Components/Input/Input'
import ButtomClick from '../../Components/Buttom/Buttom'
import Styles from '../../Components/Update/StylesComponents/style'



export default function PaymentPromoCodeScreen() {




    return <Col xs={12} ms={12} md={12} lg={12} >

        <h1 className='Delivery-method-and-time ' >
            Promo code
        </h1>
        <div className='promo'>

            <div >
                If you have a {FirstNameRest} promo code, enter it below to claim your benefits.
            </div>


        </div>


        <Row className='justify-content-center margin-bottom-payment'>
            <Col xs={8} sm={8} md={8} lg={8}>
                <Input

                    placeholder='Enter promo code...'
                    className='Types-Input-BUTTOM-STADAR'
                />
            </Col>
            <Col xs={4} sm={4} md={4} lg={4}>
                <ButtomClick 
                title='Submit'
                style={Styles.buttomColorPage}
                />
            </Col>
        </Row>

    </Col>
}