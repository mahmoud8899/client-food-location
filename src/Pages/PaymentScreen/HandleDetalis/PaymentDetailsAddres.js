import { useState } from 'react'
import { Image } from 'react-bootstrap'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import MyAddress from '../../../Components/MyAddress/MyAddress'
import UserAddressInfo from '../../User/UserAddresScreen/UserAddressInfo'



export default function PaymentDetailsAddres(props) {

    const { driver, userInfo } = props


    const [openAddresScreen, setOpenAddresScreen] = useState(false)
    const HandlAddAddres = (e) => {
        e.preventDefault()

        return setOpenAddresScreen(!openAddresScreen)
    }




    return driver?.name === 'takeaway' ? null :
        <div className='FIrst-how add-padding-slider' >

            <div className='how-class color-family'>
                where to ?
            </div>


            {openAddresScreen ?
                <>

                <ImageScreen className='class-close-image add-left'  ImageIcon={MyOderImage.close} onClick={(e)=>HandlAddAddres(e)}  />
                    
                    <div className='nothover' >

                        <MyAddress
                            ClassNamePayment
                            setOpenAddres={setOpenAddresScreen}

                        />
                    </div>

                </>
                :


                <>
                    {userInfo?.Adress?.addres ?
                        <div className='drivery-class' onClick={(e) => HandlAddAddres(e)}>


                            <UserAddressInfo
                                userInfo={userInfo}
                                ClassNamepAY

                            />



                            <div className='change-drivery' >
                                <span className='color-family add-color-all'>Change</span>
                            </div>

                        </div>

                        :

                        <div className='drivery-class' onClick={(e) => HandlAddAddres(e)}>

                            <Image
                                src={MyOderImage.mpablack}
                                className='bike'
                            />

                            <div className='drivery-text'>
                                <span className='color-family'>
                                    add a delivery address
                                </span>

                            </div>

                            <div className='change-drivery' >
                                <span className='color-family add-color-all'>Change</span>
                            </div>




                        </div>
                    }


                </>

            }




        </div>


}

