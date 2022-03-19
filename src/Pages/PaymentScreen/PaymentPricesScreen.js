import { Col } from 'react-bootstrap'
import './PaymentScreen.css'
import { useSelector } from 'react-redux'
import { ValidationPayment } from '../../Assistant/ValidationPayment'
import ButtomClick from '../../Components/Buttom/Buttom'
import Styles from '../../Components/Update/StylesComponents/style'
import { useContext, useState } from 'react'
import CheckOutSuccess from './CheckOutSuccess'
import { TotalPrice, DliveryPrice, Serviceavgift, LitenBeställning, LitenBeställningPrics } from '../../Assistant/TotalPrice'
import { FilterCartDetials } from '../../Components/Update/UseContext/FilterRestarangeProduct'
import InformationServices from './HandleDetalis/InformationServices'
import {TimePrive} from '../../Components/Update/UseContext/TimeContext'
export default function PaymentPricesScreen(props) {



    // oppen confirm order...... 
    const [openCheckOut, setOpenCheckOut] = useState(false)
    // this is localstora cart items
    const { filterCartProduct } = useContext(FilterCartDetials)
    // open information serives pries
    const [show, setShow] = useState(false)




    // run time real time
    const {dataTime}  = useContext(TimePrive)
 

    //----------------------- Start check everything before paying  --------------------->
    // options 
    // [1] : driver method 
    // [2] : cartnumber 
    // [3] : user address 
    // [4] : time close and oppen
    // [5] :booking time if customer has

    // [1] :check out driver 
    const TheCheckOutDriver = useSelector((state) => state?.driverselection?.driver)
    // [2] :check out card number
    const theCheckOutCard = useSelector((state) => state?.Cartnumber?.usercard?.cartnumber)
    // [3] : check out address
    const CheckUserAddress = useSelector((state) => state?.userLogin?.userInfo?.Adress?.addres)
    // [4]: cart info restrange... 
    const CheckOutRestrange = useSelector((state) => state?.cartInfoid?.cartinfo?.opentime)

    // [5] :booking time if customer has
    const TheCheckOutBookingTime = useSelector((state) => state?.cart?.timeBooking)
    //----------------------- END check everything before paying  --------------------->



    // testing....
    // console.log(CheckOutRestrange)
    //   console.log(TheCheckOutBookingTime)
















    // options
    // [1] : filterCartProduct only to User some restruans how may cart has
    // [2] : Summa artiklar  total prices -- class name  TotalPrice
    // [3] :  driver prics with  -- class name DliveryPrice
    // [4] : // order less than 120   -- class name LitenBeställning , and prices class name  LitenBeställningPrics
    // [5] :  servics 5 kr -- class name Serviceavgift
    // [6] : information  page -- class name InformationServices
    // [7] : function collect all prices... class name Max...
    // [8] : buttom real time payment to 






    // collect the order value
    function Max() {
        // pries driver
        const Driver = TheCheckOutDriver?.name === 'utkörning' ? DliveryPrice : Number(0)
        // order less
        const lessOrder = LitenBeställning(TotalPrice(filterCartProduct)) ? Number(LitenBeställningPrics) : Number(0)

        return TotalPrice(filterCartProduct) + Driver + Serviceavgift + lessOrder
    }












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



                <div className='item-information' onClick={() => setShow(!show)}>
                    <span className='item-pricesInclude-text color-family' > Hur våra avgifter funkar</span>
                </div>



                <div className='item-pricesInclude-total'>
                    <ButtomClick
                        title={
                            ValidationPayment(TheCheckOutDriver, theCheckOutCard, CheckUserAddress,CheckOutRestrange,TheCheckOutBookingTime,dataTime)?.toString()
                                === 'true' ?
                                'betalning nu  ' + Max() + " kr"

                                :
                                ValidationPayment(TheCheckOutDriver, theCheckOutCard, CheckUserAddress,CheckOutRestrange,TheCheckOutBookingTime,dataTime)?.toString()
                        }
                        style={Styles.buttomColorPage}
                        DisaBledStyle={Styles.Dist}
                        disabled={ValidationPayment(TheCheckOutDriver, theCheckOutCard, CheckUserAddress,CheckOutRestrange,TheCheckOutBookingTime,dataTime) !== true}
                        onClick={(e) => setOpenCheckOut(true)}
                    />




                </div>
            </div>

        </div>

        <CheckOutSuccess
            openCheckOut={openCheckOut}
            setOpenCheckOut={setOpenCheckOut}
            dataTime={dataTime}
            CheckOutRestrange={CheckOutRestrange}
        />


        <InformationServices
            show={show}
            setShow={setShow}
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
