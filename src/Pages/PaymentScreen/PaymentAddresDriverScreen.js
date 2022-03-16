import { Fragment, useState } from 'react'
import { Image} from 'react-bootstrap'
import { FiChevronRight } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { MyOderImage } from '../../Assistant/MyOrderImage'
import { Usercheck, CheckDriverUser } from '../../Assistant/SelectionPayment'
import PaymentSelectOrderDerails from './PaymentSelectOrderDerails'
import { FaWalking } from "react-icons/fa";
import './PaymentScreen.css'


export default function PaymentAddresDriverScreen(props) {

    // params....
    // restrurang info --- cartinfo
    // ClassNameNavBarCart change style...
    const {ClassNameNavBarCart ,cartinfo}  = props




    // user Info.......
    const userLogin = useSelector((state) => state?.userLogin)
    const { userInfo } = userLogin


    // selection localstory why user selection method with order
    const driverselection = useSelector((state) => state?.driverselection)
    const { driver, loading } = driverselection


 

     // open page to selection navbar time and takeway 
    const [openNavBarList, setOpenNavBarList] = useState(false)

 
   //  function   open page to selection navbar time and takeway 
    const HandleAddresDriver = (e) => {
        e.preventDefault()
        if (openNavBarList) {
            return setOpenNavBarList(false)
        } else {
            return setOpenNavBarList(true)
        }
    }








    // options pages 
    // [1] : this is page se user
    // [2] : this is open options to uses and selection
    // console.log(driver)


    return <Fragment>

            <div className='box-delivery' onClick={(e) => HandleAddresDriver(e)}>
                <Image src={MyOderImage.bike2} className='bike' />
                <div className='bike-text'>
                

                    <div className={ClassNameNavBarCart ? 'color-family extrat' :'color-family'}>{Usercheck(driver, userInfo,cartinfo)}</div>
                    <div className={ClassNameNavBarCart ? 'color-last-items extrat' :'color-last-items'}>
                        
                        {CheckDriverUser(driver, userInfo)}
                    </div>

                </div>

                <FiChevronRight  className='icons-color' />

              
            </div>


      




        <PaymentSelectOrderDerails
            openNavBarList={openNavBarList}
            setOpenNavBarList={setOpenNavBarList}
            driver={driver}
            loading={loading}
            userInfo={userInfo}
        />



    </Fragment>
}

