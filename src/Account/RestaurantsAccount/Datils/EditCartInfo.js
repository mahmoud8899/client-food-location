import { Form, Modal, Row, Col } from 'react-bootstrap'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import ButtomClick from '../../../Components/Buttom/Buttom'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import Input from '../../../Components/Input/Input'
import { UpdatedCartInfoAction, UpdingImageAction } from '../../../redux/Action/CartItemAction'
import OppenImage from '../../../Components/Update/OppenImage/OppenImage'
import HandleLoadingPage from '../../../Components/Update/HandleLoadingPage/HandleLoadingPage'
import { ValidationCartInfo } from '../../../Assistant/ValidationPayment'
import { TheCartInfo } from '../../../Components/CloseScreen/CloseScreen'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Styles from '../../../Components/Update/StylesComponents/style'

export default function EditCartInfo(props) {


    const { show, setShow, info } = props

    // console.log(info)

    const dispatch = useDispatch()
    // SHOW IMAGE
    const [showImage, setShowImage] = useState({ value: false, image: '' })
    // successfully updated
    const [updateSuccessFully, setUpdateSuccessFully] = useState(false)
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
            setProductDetails({ username: '', restrangeDriver: '', productType: '', image: '', freeDelvery: '', description: '', })
            setOpentime({ oppen: '', close: '' })
            setFinishfood({ to: '', end: '' })

        }

    }, [show, info])







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

        // update 
        const dataInfo = {
            _id: info?._id,
            username: productDetails?.username,
            restrangeDriver: productDetails?.restrangeDriver,
            productType: productDetails?.productType,
            freeDelvery: productDetails?.freeDelvery,
            description: productDetails?.description,
            image: productDetails.image,
            addressinfo,
            finishfood,
            opentime,
        }


        if (imageSave) {
            return dispatch(UpdingImageAction(imageSave, dataInfo))
        } else {
            return dispatch(UpdatedCartInfoAction(dataInfo))

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
        return
    }
    // close error and update and create
    const BackAndRemoveError = () => {
        // setShow({ value: false, updated: false })
        setUpdateSuccessFully(false)
        TheCartInfo(dispatch)
        setImageSave('')
        setChangeImage('')
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


                        <div className='form-Scrolling'>
                            <Form onSubmit={HandleForm} className='form-padding'>
                                <Input
                                    placeholder='Namnet på restaurangen eller butiken'
                                    onChange={(e) => setProductDetails({ ...productDetails, username: e.target.value })}
                                    value={productDetails?.username}
                                    className='Input-type-style productdetials'
                                    type='text'
                                    title='Namnet på restaurangen eller butiken'
                                />

                                <Input
                                    placeholder='Description'
                                    className='Input-type-style productdetials hegith'
                                    as='textarea'
                                    type='text'
                                    onChange={(e) => setProductDetails({ ...productDetails, description: e.target.value })}
                                    value={productDetails.description}
                                    title='Description'
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

                                        />
                                    </Col>
                                </Row>


                                <Input
                                    placeholder='Produkttyp'
                                    title='Produkttyp'
                                    className='Input-type-style productdetials'
                                    value={productDetails?.productType}
                                    onChange={(e) => setProductDetails({ ...productDetails, productType: e.target.value })}
                                />


                                <Row className='justify-content-center'>
                                    <Col xs={6} sm={6} md={6} lg={6}>
                                        <Input
                                            placeholder='Address'
                                            className='Input-type-style productdetials'
                                            title='Address'
                                            value={addressinfo?.address}
                                            onChange={(e) => setAddressinfo({ ...addressinfo, address: e.target.value })}

                                        />
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6}>
                                        <Input
                                            placeholder='Stad'
                                            title='Stad'
                                            className='Input-type-style productdetials'
                                            value={addressinfo?.city}
                                            onChange={(e) => setAddressinfo({ ...addressinfo, city: e.target.value })}

                                        />
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6}>
                                        <Input
                                            placeholder='Telefonnummber'
                                            title='Telefonnummber'
                                            className='Input-type-style productdetials'
                                            value={addressinfo?.telefon}
                                            onChange={(e) => setAddressinfo({ ...addressinfo, telefon: e.target.value })}

                                        />
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6}>
                                        <Input
                                            placeholder='Website'
                                            title='Website'
                                            className='Input-type-style productdetials'
                                            value={addressinfo?.website}
                                            onChange={(e) => setAddressinfo({ ...addressinfo, website: e.target.value })}

                                        />
                                    </Col>
                                </Row>

                                <div className='switch-type'
                                    onClick={() => setProductDetails({
                                        ...productDetails, restrangeDriver: productDetails?.restrangeDriver ? false : true

                                    })} >

                                    <span className={productDetails?.restrangeDriver ? 'checkOut-popluer' : ''}>

                                    </span>
                                    <span>Vill du ha chauffören till restaurangen eller butiken</span>

                                </div>



                                <div className='switch-type'
                                    onClick={() => setProductDetails({
                                        ...productDetails, freeDelvery: productDetails?.freeDelvery ? false : true

                                    })} >

                                    <span className={productDetails?.freeDelvery ? 'checkOut-popluer' : ''}>

                                    </span>
                                    <span>   fri leverans</span>

                                </div>


                                <div className='edit-product-image-div'>
                                    <Input
                                        placeholder='image'
                                        type="file"
                                        onChange={HandleIamge}
                                        name="image"

                                    />
                                    <ImageScreen
                                        ImageIcon={changeImage ? changeImage : productDetails?.image}
                                        className='image-xo'
                                        onClick={() => setShowImage({ value: true, image: changeImage ? changeImage : productDetails?.image })}
                                    />
                                </div>



                                <div className='Buttom-class'>
                                    <ButtomClick
                                        style={Styles.TabButtomCreate}
                                        title='ändring'
                                        onClick={HandleForm}
                                        disabled={ValidationCartInfo(
                                            productDetails,
                                            info,
                                            opentime,
                                            addressinfo,
                                            finishfood,
                                            changeImage

                                        ) === true}
                                    />
                                </div>
                            </Form>
                        </div>







                    </div>

            }



        </HandleLoadingPage>





    </Modal >


}











