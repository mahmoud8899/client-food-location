import { Fragment } from 'react'
import { Stand } from '../../Assistant/Selection'
import MyAddress from '../../Components/MyAddress/MyAddress'
import AddOpenComponent from '../../Components/Update/AddOpenComponent/AddOpenComponent'
import UserAddressInfo from '../User/UserAddresScreen/UserAddressInfo'
import ButtomClick from '../../Components/Buttom/Buttom'
import Styles from '../../Components/Update/StylesComponents/style'
import { FirstNameRest } from '../../Assistant/Selection'


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




    const ChangeCity = (e) =>{
        e.preventDefault()

        console.log('change city.....')
    }



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


                <div className='Add-nar-mig add-padding-loaction' >
                    <div className='classPluseTitel normail' onClick={(e) => HandleCity(e)} >
                        Visa alla städer med {FirstNameRest}
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

                            {Stand?.map((city, Index) => (
                                <div className='stad-div' key={Index} onClick={(e)=>ChangeCity(e)}  >
                                    <div className='classPluseTitel notleft'>{city.name}</div>
                                    <div className='classPluseTitel notleft' >100 km</div>
                                </div>
                            ))}


                        </div>
                    </div>
                }


            </Fragment>



        }


    </Fragment>

}



    // const [lat, setLat] = useState(null);
    // const [lng, setLng] = useState(null);
    // const [status, setStatus] = useState(null);

    // const FindLocation = () => {

    //     console.log('loading')

    //     if (!navigator.geolocation) {
	// 		setStatus('Geolocation is not supported by your browser');
	// 	} else {
    //         setStatus('Locating...');
    //         navigator.geolocation.getCurrentPosition((position) => {
    //             setStatus(null);
    //             setLat(position.coords.latitude);
    //             setLng(position.coords.longitude);
    //         }, () => {
    //             setStatus('Unable to retrieve your location');
    //         });
    //     }

    // }

    // console.log(lat,
    //     lng,
    //     status)
    //     <div className='flex-box-nar-img' onClick={(e) => FindLocation(e)}>
    //     <AiOutlineSend className='classPlusefont remove-router' />
    //     <div className='classPluseTitel normail'> Nära mig</div>
    // </div>