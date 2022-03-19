import { Modal } from 'react-bootstrap'
import LoadingScreen from '../../Components/LoadingScreen/LoadingScreen'
import { useSelector } from 'react-redux'
import { CheckOutConfirming } from '../../Assistant/ValidationPayment'
import ImageScreen from '../../Components/ImageScreen/ImageScreen'
import { MyOderImage } from '../../Assistant/MyOrderImage'
import './PaymentScreen.css'
import { Link } from 'react-router-dom'
export default function CheckOutSuccess(props) {

    // params [1] : time real time [2] : oppen check out and close [4] : reatrang oppen och closee
    const { openCheckOut, setOpenCheckOut, dataTime, CheckOutRestrange } = props







    // booking time.....
    const TheCheckOutBookingTime = useSelector((state) => state?.cart?.timeBooking)
    // user full name
    const userFullName = useSelector((state) => state?.userLogin?.userInfo)


    // console.log(cartinfo?.opentime)
    // check out time order  option ..... 
    //[1] if close restrange on some time 
    //[2] if time not true to order
    // check out user address 
    // check out payment....







    return <Modal show={openCheckOut} onHide={() => setOpenCheckOut(true)} >
        <div className='check-out-success'>
            <h1 className='check-out-success-text' >kolla upp </h1>
            <div className='user-success'>
                <p>  tack {userFullName?.firstname} {userFullName?.lastname} </p>
            </div>
            <div className='click-home'>
                {CheckOutConfirming(TheCheckOutBookingTime, CheckOutRestrange, dataTime)}
            </div>

            <br />

            <div className='click-home'>
                <Link to={{ pathname: '/sw/profil/orders/' }} >om du vill se din beställning klicka här</Link>
                <Link to={{ pathname: '/uppsala/' }} >om du vill gå till home</Link>
            </div>
            <div className='handle-image-Uppsala'>
                <ImageScreen ImageIcon={MyOderImage.logindriver} className='Image-confirm' />
            </div>

            <div className='loadingscreen'>
                <LoadingScreen />
            </div>
        </div>

    </Modal>

}