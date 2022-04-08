import { WhichWork } from '../../../Assistant/Selection'
import EditComponent from '../../../Components/Update/EditComponent/EditComponent'
import { RemoveAddressAction, RemoveOneAddress } from '../../../redux/Action/Auth_Action'
import LoadingErrorHandle from '../../../Components/Update/LoadingErrorHandle/LoadingErrorHandle'
import { useDispatch } from 'react-redux'
import RemoveAlrt from '../../../Components/Update/RemoveAlrt/RemoveAlrt'
import '../UserProfileScreen/Profile.css'
import { useState } from 'react'


// show user addrsss and remove addresss
export default function ShowListAddress(props) {
    // params userinfo and  change style 
    const { locateAddress, setOpenAddres, StyleHome, ViljaAddress } = props

    // ClassNamepAY


    const dispatch = useDispatch()
    // open nav bar updated or remove
    const [optionMore, setOptionMore] = useState(false)
    // oppen one page when click buttom remove and updated...
    const [dataSome, setDataSome] = useState(null)




    // open add address.
    const OpenEditAddress = (data) => {

        // console.log('testing', data)
        setOpenAddres({ value: true, object: data })
        setOptionMore(false)
    }













    // remove all address 
    // remove one address 
    // edit address 
    // create new addres 


    // remove all address..
    // oppen remove all address 
    const [show, setShow] = useState({ value: false, object: '' })
    const HandleRemove = () => {

        dispatch(RemoveAddressAction())

        setShow({ value: false })
    }


    return <LoadingErrorHandle loading={locateAddress.loading}>

        <div className={StyleHome ? 'className-infoUser add-style-remove-padding' : 'className-infoUser'}>

            {locateAddress?.myAddressLocal?.length > Number(1) &&
                <div className='remove-all-address' onClick={(e) => setShow({ value: true })}>
                    <span>😢</span>
                    <span>
                        Radera alla adresser
                    </span>
                </div>

            }



            <div className='show-sort-address'>
                {locateAddress?.myAddressLocal?.map((showadd, Index) => (
                    <div
                        className='first-left-box'
                        key={showadd?.address}
                        onClick={() => setDataSome(showadd?.address)}
                    >

                        <div className={showadd.firstAddress ? 'box-infoUser color-avtive' : 'box-infoUser'}
                        >

                            <span className={showadd.firstAddress ? 'font-size-work color-avtive' : 'font-size-work icons-icons'}  >
                                {WhichWork(showadd.work)}
                            </span>


                            <span className='font-size-work' >
                                {showadd?.work}
                            </span>
                        </div>


                        <div className='address-list-edit' >

                            <div className={showadd.firstAddress ? 'address-list-edit-children color-avtive' :
                                'address-list-edit-children'}>
                                <span >
                                    {showadd.address} {showadd.doornumber}
                                </span>
                                <span>
                                    {showadd?.zipcode} {showadd?.city}
                                </span>
                            </div>

                            <div className='margin-left-class'>
                                {StyleHome ?
                                    !showadd.firstAddress &&
                                    <div className='valje' onClick={(e) => ViljaAddress(showadd)}>
                                        <span>Välj</span>
                                    </div>
                                    :
                                    <EditComponent
                                        address={showadd.address}
                                        dataSome={dataSome}
                                        setOptionMore={setOptionMore}
                                        optionMore={optionMore}
                                        OpenEditAddress={(e) => OpenEditAddress(showadd)}
                                        NoRemove={(e) => dispatch(RemoveOneAddress(showadd?.address))}
                                    />
                                }


                            </div>
                        </div>

                    </div>
                )).reverse()}

            </div>
        </div>




        {show.value &&
            <RemoveAlrt
                show={show}
                setShow={setShow}
                HandleRemove={HandleRemove}
            />
        }


    </LoadingErrorHandle>



}


