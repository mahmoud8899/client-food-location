import { MyOderImage } from '../../../Assistant/MyOrderImage'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import MyAddress from '../../../Components/MyAddress/MyAddress'
import UserAddressInfo from '../../User/UserAddresScreen/UserAddressInfo'
import { useEffect, useState } from 'react'
import { HiArrowNarrowLeft } from 'react-icons/hi'

export default function PaymentDetailsAddres(props) {

    // params 
    // [1] : driver info if customer selection this 
    // [2] : that onther this is customer info
    const { driver, userInfo } = props

    // option add addres 
    const [openAddresScreen, setOpenAddresScreen] = useState(false)
    // succsfully  when change address
    const [updateSuccessFully, setUpdateSuccessFully] = useState(false)


    // updated add address....
    useEffect(() => {
        if (updateSuccessFully) {
            setOpenAddresScreen(false)
            return setUpdateSuccessFully(false)
        }

    }, [updateSuccessFully])




    // function handle close add addres och open
    const HandlAddAddres = (e) => {
        e.preventDefault()
        return setOpenAddresScreen(!openAddresScreen)
    }


    // options 
    // [1] : if the customer chooese the delivery service, he must add a address
    // [2] : page add addres if customer  name -- MyAddress


    return driver?.name === 'hämta själv' ? null :
        <div className='FIrst-how add-padding-slider' >

            <div className='how-class color-family'>
                Vart till?
            </div>


            {openAddresScreen ?
                <>

                    <HiArrowNarrowLeft
                        className='class-close-image'
                        onClick={(e) => HandlAddAddres(e)}
                    />

                    <div className='nothover' >

                        <MyAddress
                            ClassPaymentAdd
                            setUpdateSuccessFully={setUpdateSuccessFully}
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
                                ClASShOME

                            />



                            <div className='change-drivery' >
                                <span className='color-family add-color-all'>ändra</span>
                            </div>

                        </div>

                        :

                        <div className='drivery-class' onClick={(e) => HandlAddAddres(e)}>

                            <ImageScreen ImageIcon={MyOderImage.mpablack} className='bike' />

                            <div className='drivery-text'>
                                <span className='color-family'>
                                    lägg till en leveransadress
                                </span>

                            </div>

                            <div className='change-drivery' >
                                <span className='color-family add-color-all'>ändra</span>
                            </div>




                        </div>
                    }


                </>

            }




        </div>


}

