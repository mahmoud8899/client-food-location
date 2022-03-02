import { Fragment } from 'react'
import { MyOderImage } from '../../Assistant/MyOrderImage'
import { Stand } from '../../Assistant/Selection'
import ImageScreen from '../../Components/ImageScreen/ImageScreen'
import MyAddress from '../../Components/MyAddress/MyAddress'
import AddOpenComponent from '../../Components/Update/AddOpenComponent/AddOpenComponent'
import UserAddressInfo from '../User/UserAddresScreen/UserAddressInfo'




export default function ActiveUserSearchCity(props) {


    const {
        openAddres,
        setOpenAddres,
        openSelectionCity,
        theUserCheckIn,
        HandleOpenAdddress,
        HandleCity,
        setShowCity,
        showCity
    } = props





    return <Fragment>
        {!openAddres && !openSelectionCity ?

            <Fragment>
                {theUserCheckIn?.Adress?.addres &&
                    <div className='add-padding-loaction'>
                        <UserAddressInfo
                            userInfo={theUserCheckIn}
                        />

                    </div>

                }
                <div className='Add-Addres add-padding-loaction'  onClick={(e) => HandleOpenAdddress(e)}>
                    <AddOpenComponent
                        Titel='Add Your address'
                        className='Font-address'
                        classNameTitle='classPluseTitel'
                        classNamePluse='classPlusefont'
                       
                    />
                </div>


                <div className='Add-nar-mig add-padding-loaction' onClick={(e) => HandleCity(e)}>
                    <div className='flex-box-nar-img'>
                        <ImageScreen
                            ImageIcon={MyOderImage.testloction}
                            className='classPlusefont remove-router'
                        />
                        <div className='classPluseTitel normail'> Nära mig</div>
                    </div>

                    <div className='classPluseTitel normail'>
                        Utforska städer
                    </div>



                </div>

                <div className='buttom-close' onClick={() => setShowCity(!showCity)}>
                    <div>Close</div>
                </div>
            </Fragment>

            :
            <Fragment>
                {openAddres &&
                    <div className='Add-Scroll-Home'>
                        <MyAddress
                            ClassNamePayment
                            setOpenAddres={setOpenAddres}
                        />
                    </div>
                }
                {openSelectionCity &&
                    <div className='Add-Scroll-Home'>
                        <div className='top-margin-'>
                            <span>
                                City view används för att du
                                snabbt ska få en överblick.
                                För att enbart se restauranger
                                som levererar till dig

                            </span>

                            {Stand?.map((x, Index) => (
                                <div className='stad-div' key={Index}>
                                    <div className='classPluseTitel notleft'>{x}</div>
                                    <div className='classPluseTitel notleft' >0 km</div>
                                </div>
                            ))}


                        </div>
                    </div>
                }


            </Fragment>



        }


    </Fragment>

}