import { Form, Modal, Row, Col } from 'react-bootstrap'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import ButtomClick from '../../../Components/Buttom/Buttom'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import { useDispatch, useSelector } from 'react-redux'
import Styles from '../../../Components/Update/StylesComponents/style'
import PageSwitch from '../../../Components/Update/PageSwitch/PageSwitch'
import { ValtionMe } from '../../../Assistant/ValtionMe'
import CodeError from '../../../Components/CodeError/CodeError'
import Input from '../../../Components/Input/Input'
import { UpdatedCartInfoAction, UpdatedImageAction } from '../../../redux/Action/CartItemAction'
import OppenImage from '../../../Components/Update/OppenImage/OppenImage'
import HandleLoadingPage from '../../../Components/Update/HandleLoadingPage/HandleLoadingPage'
import { ValidationCartInfo, ChangeCode, ValidationCreateCart } from '../../../Assistant/ValidationPayment'
import { TheCartInfo } from '../../../Components/CloseScreen/CloseScreen'
import { useEffect, useState } from 'react'
import { BiEditAlt } from 'react-icons/bi'


export default function EditCartInfo(props) {

    const { show, setShow, info, userInfo } = props

    const dispatch = useDispatch()
    // SHOW IMAGE
    const [showImage, setShowImage] = useState({ value: false, image: '' })
    // successfully updated
    const [updateSuccessFully, setUpdateSuccessFully] = useState(false)
    // Handle error input 
    const [handleError, setHandleError] = useState(false)
    // value updated cart info....
    const [productDetails, setProductDetails] = useState([])
    const [opentime, setOpentime] = useState([])
    const [finishfood, setFinishfood] = useState([])
    const [addressinfo, setAddressinfo] = useState([])
    const [changeImage, setChangeImage] = useState('')
    const [imageSave, setImageSave] = useState('')
    // handle after requirest.... 
    const updatedCartInfo = useSelector((state) => state?.updatedCartInfo)
    const { loading, updated, error } = updatedCartInfo

    useEffect(() => {
        if (show?.value) {

            setAddressinfo({
                address: info?.addressinfo?.address ? info?.addressinfo?.address : '',
                city: info?.addressinfo?.city ? info?.addressinfo?.city : '',
                telefon: info?.addressinfo?.telefon ? info?.addressinfo?.telefon : '',
                website: info?.addressinfo?.website ? info?.addressinfo?.website : ''
            })

            setProductDetails({
                username: info?.username ? info?.username : '',
                restrangeDriver: info?.restrangeDriver ? info?.restrangeDriver : false,
                productType: info?.productType ? info?.productType : '',
                freeDelvery: info?.freeDelvery ? info?.freeDelvery : false,
                description: info?.description ? info?.description : '',
                image: info?.image ? info?.image : ''
            })
            setOpentime({ oppen: info?.opentime?.oppen ? info?.opentime?.oppen : '', close: info?.opentime?.close ? info?.opentime?.close : '' })
            setFinishfood({ to: info?.finishfood?.to ? info?.finishfood?.to : '', end: info?.finishfood?.end ? info?.finishfood?.end : '' })
        } else {
            setAddressinfo({ address: '', city: '', telefon: '', website: '', })
            setProductDetails({ username: '', restrangeDriver: false, productType: '', image: '', freeDelvery: false, description: '', })
            setOpentime({ oppen: '', close: '' })
            setFinishfood({ to: '', end: '' })

        }

    }, [show, info])






    // successfully create and updated cart info....
    // this is singepage after succsfully ....
    useEffect(() => {

        if (updated) {

            return setUpdateSuccessFully(true)
        }

        return () => {
            setUpdateSuccessFully(false)
        }

    }, [updated, error, updateSuccessFully])


    // handle updated cart info.... 
    const HandleForm = (e) => {
        e.preventDefault()
        setHandleError(false)
        if (opentime?.oppen > '00:00'
            && opentime?.close > '00:00'
            && finishfood?.to >= 1
            && finishfood?.end >= 1
            && addressinfo?.address?.length >= Number(3)
            && addressinfo?.city?.length >= Number(3)
            && addressinfo?.telefon?.length >= Number(10)
            && addressinfo?.website?.length >= Number(3)
            && productDetails?.username?.length >= Number(3)
            && productDetails?.productType?.length >= Number(3)
            && productDetails?.description?.length >= Number(3)
        ) {

            const dataInfo = {
                _id: info?._id,
                user: userInfo?._id,
                username: ChangeCode(productDetails?.username),
                restrangeDriver: productDetails?.restrangeDriver,
                productType: ChangeCode(productDetails?.productType),
                freeDelvery: productDetails?.freeDelvery,
                description: ChangeCode(productDetails?.description),
                image: productDetails.image,
                addressinfo,
                finishfood,
                opentime,
            }

            // console.log(dataInfo)
            if (info === 'Empty') {

                if (imageSave) {
                    return dispatch(UpdatedImageAction(imageSave, dataInfo, true))
                } else {
                    return dispatch(UpdatedCartInfoAction(dataInfo))

                }

            } else {

                if (imageSave) {
                    return dispatch(UpdatedImageAction(imageSave, dataInfo))
                } else {
                    return dispatch(UpdatedCartInfoAction(dataInfo))

                }
            }

        } else {
            return setHandleError(true)
        }
    }

    // uploading image 
    const HandleIamge = async (e) => {
        e.preventDefault()
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        const changeImage = URL.createObjectURL(file)
        setChangeImage(changeImage)
        setImageSave(formData)


    }



    // close 
    const HandleClose = () => {
        setShow({ value: false, updated: false })
        setUpdateSuccessFully(false)
        TheCartInfo(dispatch)
        setImageSave('')
        setChangeImage('')
        setHandleError(false)
        return
    }
    // close error and update and create
    const BackAndRemoveError = () => {
        // setShow({ value: false, updated: false })
        setUpdateSuccessFully(false)
        TheCartInfo(dispatch)
        setImageSave('')
        setChangeImage('')
        setHandleError(false)
        return
    }


    return <Modal show={props?.show?.value} onHide={HandleClose}>

        <HandleLoadingPage
            loading={loading}
            updated={updated}
            error={error}
            updateSuccessFully={updateSuccessFully}
            HandleClose={HandleClose}
            BackAndRemoveError={BackAndRemoveError}
        >


            {
                showImage?.value ?
                    <OppenImage
                        showImage={showImage}
                        setShowImage={setShowImage}
                    />
                    :

                    <div className='body-category'>

                        <div className='modal-title-edit-category'>
                            <h1> ändring </h1>
                            <ImageScreen
                                ImageIcon={MyOderImage.close}
                                className='close-pp-pp-image'
                                onClick={HandleClose}
                            />
                        </div>

                        {handleError &&
                            <div className='error-input-red' >
                                <CodeError error='Det är saker som är fel' />
                            </div>
                        }


                        <div className='form-Scrolling'>
                            <Form onSubmit={HandleForm} className='form-padding'>
                                <Input
                                    placeholder='Namnet på restaurangen eller butiken'
                                    onChange={(e) => setProductDetails({ ...productDetails, username: e.target.value })}
                                    value={productDetails?.username}
                                    className='Input-type-style productdetials'
                                    type='text'
                                    title='Namnet på restaurangen eller butiken'
                                    validation={ValtionMe(productDetails?.username, 'inputname')?.toString()}

                                />

                                <Input
                                    placeholder='Description'
                                    className='Input-type-style productdetials hegith'
                                    as='textarea'
                                    type='text'
                                    onChange={(e) => setProductDetails({ ...productDetails, description: e.target.value })}
                                    value={productDetails.description}
                                    title='Description'
                                    validation={ValtionMe(productDetails.description, 'inputname')?.toString()}
                                />


                                <Row className='justify-content-center'>
                                    <Col xs={6} sm={6} md={6} lg={6}>
                                        <Input
                                            placeholder='öppnings tid'
                                            name="image"
                                            className='Input-type-style productdetials'
                                            type='time'
                                            onChange={(e) => setOpentime({ ...opentime, oppen: e.target.value })}
                                            value={opentime.oppen}
                                            title='öppnings tid'
                                            validation={ValtionMe(opentime.oppen, 'inputname')?.toString()}

                                        />



                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6}>

                                        <Input
                                            placeholder='stängningstid'
                                            name="image"
                                            type='time'
                                            title='stängningstid'
                                            className='Input-type-style productdetials'
                                            onChange={(e) => setOpentime({ ...opentime, close: e.target.value })}
                                            value={opentime.close}
                                            validation={ValtionMe(opentime.close, 'inputname')?.toString()}

                                        />
                                    </Col>
                                </Row>



                                <Row className='justify-content-center'>
                                    <Col xs={6} sm={6} md={6} lg={6}>
                                        <Input
                                            placeholder='från'
                                            className='Input-type-style productdetials'
                                            title='Matlagningstid'
                                            onChange={(e) => setFinishfood({ ...finishfood, to: e.target.value })}
                                            value={finishfood.to}
                                            type='number'
                                            validation={ValtionMe(finishfood.to, 'TheTime')?.toString()}
                                        />
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6}>

                                        <Input
                                            placeholder='till'
                                            className='Input-type-style productdetials'
                                            title='till'
                                            onChange={(e) => setFinishfood({ ...finishfood, end: e.target.value })}
                                            value={finishfood.end}
                                            type='number'
                                            validation={ValtionMe(finishfood.end, 'TheTime')?.toString()}

                                        />
                                    </Col>
                                </Row>

                                <div className='selection-name extrastyle'>

                                    <BiEditAlt className='icons-class' />
                                    <span className='selection-name'>din plats adress</span>

                                </div>
                                <Row className='justify-content-center'>
                                    <Col xs={6} sm={6} md={6} lg={6}>
                                        <Input
                                            placeholder='Address'
                                            className='Input-type-style productdetials'
                                            title='Address'
                                            value={addressinfo?.address}
                                            onChange={(e) => setAddressinfo({ ...addressinfo, address:  e.target.value?.toLowerCase()  })}
                                            validation={ValtionMe(addressinfo?.address, 'inputname')?.toString()}

                                        />
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6}>
                                        <Input
                                            placeholder='Stad'
                                            title='Stad'
                                            className='Input-type-style productdetials'
                                            value={addressinfo?.city}
                                            onChange={(e) => setAddressinfo({ ...addressinfo, city: e.target.value?.toLowerCase()  })}
                                            validation={ValtionMe(addressinfo?.city, 'inputname')?.toString()}

                                        />
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6}>
                                        <Input
                                            placeholder='Telefonnummber'
                                            title='Telefonnummber'
                                            className='Input-type-style productdetials'
                                            type='number'
                                            value={addressinfo?.telefon}
                                            onChange={(e) => setAddressinfo({ ...addressinfo, telefon: e.target.value?.toLowerCase()  })}
                                            validation={ValtionMe(addressinfo?.telefon, 'isPhone')?.toString()}

                                        />
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6}>
                                        <Input
                                            placeholder='Website'
                                            title='Website'
                                            className='Input-type-style productdetials'
                                            value={addressinfo?.website}
                                            onChange={(e) => setAddressinfo({ ...addressinfo, website: e.target.value?.toLowerCase()  })}
                                            validation={ValtionMe(addressinfo?.website, 'inputname')?.toString()}

                                        />
                                    </Col>
                                </Row>
                                <div className='selection-name'>Produkttyp</div>
                                <div className='flex-switch'>

                                    <PageSwitch
                                        onClick={() => setProductDetails({
                                            ...productDetails, productType: 'restaurant'
                                        })}
                                        TextInput='restaurant'
                                        OtherInput={productDetails?.productType === 'restaurant'}
                                    />
                                    <PageSwitch
                                        onClick={() => setProductDetails({
                                            ...productDetails, productType: 'butiker'
                                        })}
                                        TextInput='butiker'
                                        OtherInput={productDetails?.productType === 'butiker'}
                                    />


                                </div>



                                <div className='edit-product-image-div'>
                                    <Input
                                        placeholder='image'
                                        title='ladda upp bild'
                                        type="file"
                                        onChange={HandleIamge}
                                        name="image"

                                    />
                                    <ImageScreen
                                        ImageIcon={changeImage ? changeImage : productDetails?.image ? productDetails?.image : null}
                                        className='image-xo'
                                        onClick={() => setShowImage({ value: true, image: changeImage ? changeImage : productDetails?.image })}
                                    />
                                </div>
                                <PageSwitch
                                    onClick={() => setProductDetails({
                                        ...productDetails, freeDelvery: productDetails?.freeDelvery ? false : true

                                    })}
                                    TextInput='fri leverans'
                                    OtherInput={productDetails?.freeDelvery}
                                />



                                <PageSwitch
                                    onClick={() => setProductDetails({
                                        ...productDetails, restrangeDriver: productDetails?.restrangeDriver ? false : true
                                    })}
                                    TextInput='Vill du ha chauffören till restaurangen eller butiken'
                                    OtherInput={productDetails?.restrangeDriver}
                                />





                                <div className='Buttom-class'>
                                    <ButtomClick
                                        style={Styles.TabButtomCreate}
                                        title='ändring'
                                        onClick={HandleForm}
                                        disabled={
                                            info === 'Empty' ?
                                                ValidationCreateCart(productDetails, opentime, addressinfo, finishfood, changeImage) !== true
                                                :
                                                ValidationCartInfo(productDetails, info, opentime, addressinfo, finishfood, changeImage) === true
                                        }
                                    />
                                </div>
                            </Form>
                        </div>







                    </div>

            }



        </HandleLoadingPage>





    </Modal >


}

