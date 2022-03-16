import {  Row, Col, } from 'react-bootstrap'
import './PaymentScreen.css'
import Input from '../../Components/Input/Input'
import ButtomClick from '../../Components/Buttom/Buttom'
import Styles from '../../Components/Update/StylesComponents/style'



export default function PaymentPromoCodeScreen() {




    return <Col xs={12} ms={12} md={12} lg={12} >

        <h1 className='Delivery-method-and-time ' >
        Promokod
        </h1>
        <div className='promo'>

            <div >
            Om du har en kod, ange den nedan för att kunna lösa in den.
             
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
                title='Skicka'
                style={Styles.buttomColorPage}
                />
            </Col>
        </Row>

    </Col>
}