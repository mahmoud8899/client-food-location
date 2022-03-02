import { Col } from 'react-bootstrap'
import './PaymentScreen.css'
import { useSelector } from 'react-redux'
import { ValidationPayment } from '../../Assistant/ValidationPayment'
import ButtomClick from '../../Components/Buttom/Buttom'
import Styles from '../../Components/Update/StylesComponents/style'
import { useContext, useState } from 'react'
import CheckOutSuccess from './CheckOutSuccess'
import { TotalPrice, DliveryPrice, Totalsumma } from '../../Assistant/TotalPrice'
import { FilterCartDetials } from '../../Components/Update/UseContext/FilterRestarangeProduct'
export default function PaymentPricesScreen(props) {



    // check out driver 
    const TheCheckOutDriver = useSelector((state) => state?.driverselection?.driver)
    // check out card number
    const theCheckOutCard = useSelector((state) => state?.Cartnumber?.usercard?.cartnumber)
    // check out address
    const CheckUserAddress = useSelector((state) => state?.userLogin?.userInfo?.Adress?.addres)



    // oppen confirm order...... 
    const [openCheckOut, setOpenCheckOut] = useState(false)

    const { filterCartProduct } = useContext(FilterCartDetials)




    











    return <Col xs={12} sm={12} md={10} lg={5} className='removePaddingmarggin' >

        <div className='parant-st'>


            <h1 className='left-max'>Prices include </h1>



            <div className='parant'>

                <div className='item-pricesInclude'>
                    <span className='item-pricesInclude-text color-family ' >Items total</span>
                    <span className='item-pricesInclude-text color-family '>kr {TotalPrice(filterCartProduct)}</span>
                </div>

                {TheCheckOutDriver?.name === 'takeaway' ? null :
                    <div className='item-pricesInclude'>
                        <span className='item-pricesInclude-text color-family' >Driver</span>
                        <span className='item-pricesInclude-text color-family '>kr {DliveryPrice}</span>
                    </div>
                }



                <div className='item-pricesInclude'>
                    <span className='item-pricesInclude-text color-family' >Totalsumma</span>
                    <span className='item-pricesInclude-text color-family '>kr
                        {Totalsumma(filterCartProduct,
                         TheCheckOutDriver?.name === 'takeaway' ? null :   DliveryPrice
                            
                            )}

                    </span>
                </div>


                <div className='item-pricesInclude-total'>
                    <ButtomClick
                        title={
                            ValidationPayment(TheCheckOutDriver, theCheckOutCard, CheckUserAddress)?.toString()
                                === 'true' ? 'now payment' : ValidationPayment(TheCheckOutDriver, theCheckOutCard, CheckUserAddress)?.toString()

                        }
                        style={Styles.buttomColorPage}
                        disabled={ValidationPayment(TheCheckOutDriver, theCheckOutCard, CheckUserAddress) !== true}
                        onClick={(e) => setOpenCheckOut(true)}
                    />




                </div>
            </div>

        </div>

        <CheckOutSuccess
            openCheckOut={openCheckOut}
            setOpenCheckOut={setOpenCheckOut}
        />

    </Col>


}
