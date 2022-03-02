import { Image, Row, Col, } from 'react-bootstrap'
import { MyOderImage } from '../../Assistant/MyOrderImage'
import './PaymentScreen.css'
import { FirstNameRest, selectionCourier } from '../../Assistant/Selection'
import { useState } from 'react'
import Input from '../../Components/Input/Input'
import ButtomClick from '../../Components/Buttom/Buttom'
import Styles from '../../Components/Update/StylesComponents/style'




export default function PaymentCourierScreen() {

    const [courierOpen, setCourierOpen] = useState(false)
    const [sumCunt, setSumCunt] = useState(false)
    // Courier
    const ChnageCourierOpen = (e) => {
        e.preventDefault()

        if (courierOpen) {
            return setCourierOpen(false)
        } else {
            return setCourierOpen(true)
        }
    }




    const HandelsumCunt = (e) => {
        e.preventDefault()

        if (sumCunt) {
            return setSumCunt(false)
        } else {
            return setSumCunt(true)
        }
    }




    return <Col xs={12} ms={12} md={12} lg={12} >
        <div className='box-delivery-cart '>
            <div className='box-delivery-item' onClick={(e) => ChnageCourierOpen(e)} >

                <Image
                    src={MyOderImage.courier}
                    className='bike'
                />

                <div className='item-credit-text'>
                    <div className='color-family'> Tip the courier</div>
                    <div className='color-last-items'>
                        Optional tip for the courier
                    </div>
                </div>

                <Image src={courierOpen ? MyOderImage.top : MyOderImage.right}

                    className='bike add-left-image' />

            </div>
            {courierOpen &&

                <div className='box-delivery-item-selector'>

                    <div className='courier-box'>
                        <div className='courier-item'>
                            <p>Your tip will be paid to
                                the courier together with their salary.
                                {FirstNameRest}
                                doesn’t deduct anything from the tip.
                                If you want to change or remove your tip,
                                please contact support for help.
                            </p>
                        </div>
                        <div className='courier-item'>
                            {selectionCourier?.map((cu, Index) => (

                                <span key={Index} style={Styles.colorButtom} >{cu?.courier.toFixed(2)}</span>



                            ))}
                            <span style={Styles.colorButtom} onClick={(e) => HandelsumCunt(e)}>Other </span>
                        </div>
                    </div>

                    {sumCunt &&
                        <div className='items-courier'>

                            <span className='bottom-between'>
                                You can tip between €0.50 to €100.00
                            </span>

                            <Row className='justify-content-center'>
                                <Col xs={8} sm={8} md={8} lg={8}>
                                    <Input   className='Types-Input-BUTTOM-STADAR' />
                                </Col>
                                <Col xs={4} sm={4} md={4} lg={4}>
                                    <ButtomClick title='Ok' style={Styles.buttomColorPage}/>
                                </Col>
                            </Row>






                        </div>
                    }


                </div>
            }

        </div>

    </Col>
}