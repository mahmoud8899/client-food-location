import { Modal } from 'react-bootstrap'
import LoadingScreen from '../../Components/LoadingScreen/LoadingScreen'
import './PaymentScreen.css'
import { useSelector } from 'react-redux'
import { CheckOutConfirming, ValidationPayment } from '../../Assistant/ValidationPayment'
import ImageScreen from '../../Components/ImageScreen/ImageScreen'
import {MyOderImage} from '../../Assistant/MyOrderImage'
export default function CheckOutSuccess(props) {
    const { openCheckOut, setOpenCheckOut } = props







    // booking time.....
    const TheCheckOutBookingTime = useSelector((state) => state?.cart?.timeBooking)

    // console.log(TheCheckOutBookingTime)

    // check out driver 
    const TheCheckOutDriver = useSelector((state) => state?.driverselection?.driver)
    // check out card number
    const theCheckOutCard = useSelector((state) => state?.Cartnumber?.usercard?.cartnumber)
    // check out address
    const CheckUserAddress = useSelector((state) => state?.userLogin?.userInfo?.Adress?.addres)


    // console.log(cartinfo?.opentime)
    // check out time order  option ..... 
    //[1] if close restrange on some time 
    //[2] if time not true to order
    // check out user address 
    // check out payment....







    return <Modal show={openCheckOut} onHide={() => setOpenCheckOut(true)} >
        <div className='check-out-success'>
            <h1 className='check-out-success-text' >check out </h1>
            <div className='user-success'>
                <p>  thenk you Mahmoud </p>
            </div>

            {CheckOutConfirming(TheCheckOutBookingTime)}
            <br />
            {ValidationPayment(TheCheckOutDriver, theCheckOutCard, CheckUserAddress)?.toString()
                === 'true' ? 'thenk you  for buying' : ValidationPayment(TheCheckOutDriver, theCheckOutCard, CheckUserAddress)?.toString()}


             <div className='handle-image-Uppsala'>
             <ImageScreen ImageIcon={MyOderImage.logindriver} className='Image-confirm'  />
             </div>

            <div className='loadingscreen'>
                <LoadingScreen />
            </div>
        </div>

    </Modal>

}