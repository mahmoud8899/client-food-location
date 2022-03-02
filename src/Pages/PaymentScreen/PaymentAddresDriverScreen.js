import { useState } from 'react'
import { Image} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { MyOderImage } from '../../Assistant/MyOrderImage'
import { Usercheck, CheckDriverUser } from '../../Assistant/SelectionPayment'
import './PaymentScreen.css'
import PaymentSelectOrderDerails from './PaymentSelectOrderDerails'



export default function PaymentAddresDriverScreen(props) {




    // user Info.......
    const userLogin = useSelector((state) => state?.userLogin)
    const { userInfo } = userLogin

    const driverselection = useSelector((state) => state?.driverselection)
    const { driver, loading } = driverselection


    const [openNavBarList, setOpenNavBarList] = useState(false)
    // open navbar to all addres and driver
    const HandleAddresDriver = (e) => {
        e.preventDefault()
      

        if (openNavBarList) {
            // document.body.classList.remove('mahmoud');
            return setOpenNavBarList(false)
        } else {
            // window.document.body.classList.add('mahmoud')
         

            return setOpenNavBarList(true)
        }






    }









    return <>

            <div className='box-delivery' onClick={(e) => HandleAddresDriver(e)}>
                <Image src={MyOderImage.bike2}
                    className='bike'
                />
                <div className='bike-text'>

                    <div className='color-family'>{Usercheck(driver, userInfo)}</div>
                    <div className='color-last-items'>
                        {CheckDriverUser(driver, userInfo)}
                    </div>

                </div>

                <Image src={MyOderImage.right}

                    className='bike add-left-image' />
            </div>


      




        <PaymentSelectOrderDerails
            openNavBarList={openNavBarList}
            setOpenNavBarList={setOpenNavBarList}
            driver={driver}
            loading={loading}
            userInfo={userInfo}
        />



    </>
}

