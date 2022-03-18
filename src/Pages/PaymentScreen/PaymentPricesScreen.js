import { Col } from 'react-bootstrap'
import './PaymentScreen.css'
import { useSelector } from 'react-redux'
import { ValidationPayment } from '../../Assistant/ValidationPayment'
import ButtomClick from '../../Components/Buttom/Buttom'
import Styles from '../../Components/Update/StylesComponents/style'
import { useContext, useState } from 'react'
import CheckOutSuccess from './CheckOutSuccess'
import { TotalPrice, DliveryPrice,  Serviceavgift, LitenBeställning, LitenBeställningPrics } from '../../Assistant/TotalPrice'
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




    // this is localstora cart items
    const { filterCartProduct } = useContext(FilterCartDetials)













     // options
     // [1] : filterCartProduct only to User some restruans how may cart has
     // [2] : Summa artiklar  total prices -- class name  TotalPrice
     // [3] :  driver prics with  -- class name DliveryPrice
     // [4] : // order less than 120   -- class name LitenBeställning , and prices class name  LitenBeställningPrics
     // [5] :  servics 5 kr -- class name Serviceavgift
     // [6] : information 






    return <Col xs={12} sm={12} md={10} lg={5} className='removePaddingmarggin' >

        <div className='parant-st'>


            <h1 className='left-max'>Priser i SEK, inkl. moms </h1>



            <div className='parant'>

                <div className='item-pricesInclude'>
                    <span className='item-pricesInclude-text color-family ' >{`Summa artiklar (${filterCartProduct?.length} artikel)`}</span>
                    <span className='item-pricesInclude-text color-family '>kr {TotalPrice(filterCartProduct)}</span>
                </div>

                {TheCheckOutDriver?.name === 'utkörning' ?
                    <div className='item-pricesInclude'>
                        <span className='item-pricesInclude-text color-family' >Utkörning</span>
                        <span className='item-pricesInclude-text color-family '>kr {DliveryPrice}</span>
                    </div>
                    : null
                }



                {LitenBeställning(TotalPrice(filterCartProduct)) &&
                    <div className='item-pricesInclude'>
                        <span className='item-pricesInclude-text color-family' >Tillägg för liten beställning</span>
                        <span className='item-pricesInclude-text color-family '>kr {LitenBeställningPrics}</span>
                    </div>

                }


                <div className='item-pricesInclude'>
                    <span className='item-pricesInclude-text color-family' >Serviceavgift</span>
                    <span className='item-pricesInclude-text color-family '>kr {Serviceavgift}</span>
                </div>



                <div className='item-information'>
                    <span className='item-pricesInclude-text color-family' > Hur våra avgifter funkar</span>
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




// <div className='item-pricesInclude'>
// <span className='item-pricesInclude-text color-family' >Totalsumma</span>
// <span className='item-pricesInclude-text color-family '>kr
//     {Totalsumma(filterCartProduct,
//         TheCheckOutDriver?.name === 'takeaway' ? null : DliveryPrice

//     )}

// </span>
// </div>
