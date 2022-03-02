import { useEffect, useState } from 'react'
import { Form, Modal, Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import ButtomClick from '../../../Components/Buttom/Buttom'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import Input from '../../../Components/Input/Input'
import Styles from '../style'
import { UpdatedCartInfoAction } from '../../../redux/Action/CartItemAction'
import OppenImage from '../../../Components/Update/OppenImage/OppenImage'
import ScreenAlrt from '../../../Components/ScreenAlrt/ScreenAlrt'
import LoadingScreen from '../../../Components/LoadingScreen/LoadingScreen'
export default function EditCartInfo(props) {


    const { show, setShow, info } = props

    const dispatch = useDispatch()
    // SHOW IMAGE
    const [showImage, setShowImage] = useState({ value: false, image: '' })
    // successfully updated
    const [successfully, setSuccessfully] = useState(false)






    // value updated cart info....
    const [productDetails, setProductDetails] = useState([])
    const [opentime, setOpentime] = useState([])
    const [finishfood, setFinishfood] = useState([])
    const [addressinfo, setAddressinfo] = useState([])


    useEffect(() => {
        if (show?.value) {
            setAddressinfo
                ({
                    address: info?.addressinfo?.address ? info?.addressinfo?.address : '',
                    city: info?.addressinfo?.city ? info?.addressinfo?.city : '',
                    telefon: info?.addressinfo?.telefon ? info?.addressinfo?.telefon : '',
                    website: info?.addressinfo?.website ? info?.addressinfo?.website : ''
                })

            setProductDetails
                ({
                    username: info?.username ? info?.username : '',
                    restrangeDriver: info?.restrangeDriver ? info?.restrangeDriver : false,
                    productType: info?.productType ? info?.productType : '',
                    freeDelvery: info?.freeDelvery ? info?.freeDelvery : false,
                    description: info?.description ? info?.description : '',
                    image: info?.image ? info?.image : ''
                })
            setOpentime
                ({
                    oppen: info?.opentime?.oppen ? info?.opentime?.oppen : '',
                    close: info?.opentime?.close ? info?.opentime?.close : ''
                })
            setFinishfood
                ({
                    to: info?.finishfood?.to ? info?.finishfood?.to : '',
                    end: info?.finishfood?.end ? info?.finishfood?.end : ''
                })





        } else {
            setAddressinfo({
                address: '',
                city: '',
                telefon: '',
                website: '',
            })
            setProductDetails({
                username: '',
                restrangeDriver: '',
                productType: '',
                image: '',
                freeDelvery: '',
                description: '',
            })
            setOpentime({ oppen: '', close: '' })
            setFinishfood({ to: '', end: '' })

        }



    }, [show, info])







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

        dispatch(UpdatedCartInfoAction(dataInfo))
        return


    }





    // close All after updated....
    const CloseAll = (e) => {
        e.preventDefault()
        setSuccessfully(false)
        setShow({ value: false, object: false })
    }



    // uploading image 
    const [loadingImage, setLoadingImage] = useState(false)
    const HandleIamge = async (e) => {
        e.preventDefault()
        const file = e.target.files[0]
        const changeImage = URL.createObjectURL(file)
        console.log(changeImage)


    }




    return <Modal
        show={props?.show?.value}
        onHide={() => console.log('click')}
    >

        {showImage?.value ?
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
                        onClick={(e) => CloseAll(e)}
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

                            {loadingImage
                                ?
                                <LoadingScreen />
                                :
                                <ImageScreen ImageIcon={productDetails.image} className='image-xo' />

                            }




                        </div>



                        <div className='Buttom-class'>
                            <ButtomClick
                                style={Styles.stylebuttom}
                                title='save'
                                onClick={HandleForm}
                            />
                        </div>
                    </Form>
                </div>







            </div>

        }

        <div onClick={(e) => CloseAll(e)}>
            <ScreenAlrt
                userCheck
                alertid={successfully}
                textName='Uppdateringen lyckades'
            />
        </div>


    </Modal>


}













// console.log(file.image)

//  console.log(formData)
// console.log(formData)
// setLoadingImage(true)
// try {
//     const config = {
//         headers: {
//             'Content-Type': 'multipart/form-data',
//         }
//     }
//     const { data } = await axios.post(`/api/uploading/`, formData, config)
//     
//     setLoadingImage(false)

// } catch (error) {
//     console.error(error)
//     setLoadingImage(false)
// }



{/* {loadingImage && <LoadingScreen />}
                            {productDetails?.image ?
                                <div className='div-image-handle-product-edit'>
                                    <ImageScreen
                                        ImageIcon={productDetails?.image}
                                        className='Image-product-Edit'
                                        onClick={() => setShowImage({ value: true, image: productDetails?.image })}
                                    />

                                </div>
                                : null} */}



        // setSuccessfully(true)


        // // setTimeout(() => {
        //     setSuccessfully(false)
        //     setShow({ value: false, object: false })
        // }, 9000);




