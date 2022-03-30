import { Fragment } from 'react'
import { Stand } from '../../Assistant/Selection'
import MyAddress from '../../Components/MyAddress/MyAddress'
import AddOpenComponent from '../../Components/Update/AddOpenComponent/AddOpenComponent'
import UserAddressInfo from '../User/UserAddresScreen/UserAddressInfo'
import { AiOutlineSend } from 'react-icons/ai'
import ButtomClick from '../../Components/Buttom/Buttom'
import Styles from '../../Components/Update/StylesComponents/style'


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
                            ClASShOME
                        />

                    </div>

                }
                <div className='Add-Addres add-padding-loaction' onClick={(e) => HandleOpenAdddress(e)}>
                    <AddOpenComponent
                        Titel='Lägg till din adress'
                        className='Font-address'
                        classNameTitle='classPluseTitel exstra-style'
                        classNamePluse='classPlusefont'

                    />
                </div>


                <div className='Add-nar-mig add-padding-loaction' onClick={(e) => HandleCity(e)}>
                    <div className='flex-box-nar-img'>
                        <AiOutlineSend className='classPlusefont remove-router' />
                        <div className='classPluseTitel normail'> Nära mig</div>
                    </div>

                    <div className='classPluseTitel normail'>
                        Utforska städer
                    </div>



                </div>

              <div className='buttom-close'>
              <ButtomClick
                    title='Save'
                    
                    onClick={() => setShowCity(!showCity)}
                    style={Styles.TabButtomCreate}
                />

              </div>

            </Fragment>

            :
            <Fragment>
                {openAddres &&
                    <div >
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