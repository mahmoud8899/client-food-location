import { Col } from 'react-bootstrap'
import { MyOderImage } from '../../Assistant/MyOrderImage'
import './PaymentScreen.css'
import { FirstNameRest } from '../../Assistant/Selection'
import { useState } from 'react'
import UserPaymentDerail from '../User/UserPaymentScreen/UserPaymentDerail'
import Styles from '../../Components/Update/StylesComponents/style'
import { useSelector } from 'react-redux'
import ImageScreen from '../../Components/ImageScreen/ImageScreen'
import AddOpenComponent from '../../Components/Update/AddOpenComponent/AddOpenComponent'
import ShowDetailsCard from '../User/UserPaymentScreen/ShowDetailsCard'


export default function PaymentCreditScreen() {




    const [paymentOpenCard, setPaymentOpenCard] = useState(false)

    const [openAddCart, setOpenAddCart] = useState(false)

    const TheCheckCart = useSelector((state) => state?.Cartnumber?.usercard)






    // payment
    const ChnagePaymentOpen = (e) => {
        e.preventDefault()

        if (paymentOpenCard) {
            return setPaymentOpenCard(false)
        } else {
            return setPaymentOpenCard(true)
        }
    }


    return <Col xs={12} ms={12} md={12} lg={12} >

        <h1 className='Delivery-method-and-time'>
            Payment details
        </h1>

        <div className='box-delivery-cart '>
            <div className='box-delivery-item' onClick={(e) => ChnagePaymentOpen(e)} >

                <ImageScreen
                    ImageIcon={MyOderImage.card2}
                    className='bike'
                />

                <div className='item-credit-text'>
                    <div className='color-family'>
                        {TheCheckCart?.cartnumber ? TheCheckCart?.cartnumber : 'choose a payment method'}

                    </div>
                    <div className='color-last-items'>
                        {TheCheckCart?.cartnumber ? 'valt betalmetod kommer att debiteras' : 'please add a payment method  to continue your order'}

                    </div>
                </div>

                <ImageScreen
                    ImageIcon={paymentOpenCard ? MyOderImage.top : MyOderImage.right}
                    className='bike add-left-image'
                />

            </div>
            {paymentOpenCard &&

                <div className='box-delivery-item-selector'>
                    {openAddCart ?


                        <UserPaymentDerail
                            setOpenPayment={setOpenAddCart}
                            classNamePayment
                        />



                        :
                        <>

                            {TheCheckCart?.cartnumber &&
                                <ShowDetailsCard

                                    TheCartNumber={TheCheckCart}
                                    classNamePayment
                                />
                            }


                            <div onClick={() => setOpenAddCart(!openAddCart)}>

                                <AddOpenComponent
                                    Titel='Add new Card'

                                    className='add-selected-item addxpxp'
                                />
                            </div>





                            <div className='fooder-card' style={Styles.topbottom}  >
                                <p>
                                    The following payment methods are available on {FirstNameRest}:
                                    credit and debit cards, {FirstNameRest} at Work, {FirstNameRest} credits.
                                </p>
                            </div>

                        </>
                    }



                </div>
            }

        </div>

    </Col>

}