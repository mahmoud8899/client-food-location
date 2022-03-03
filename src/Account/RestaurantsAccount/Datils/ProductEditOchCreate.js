import { Modal, Form } from 'react-bootstrap'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import Input from '../../../Components/Input/Input'
import ButtomClick from '../../../Components/Buttom/Buttom'
import OppenImage from '../../../Components/Update/OppenImage/OppenImage'
import { getCategoryAction } from '../../../redux/Action/Category_Action'
import { useDispatch, useSelector } from 'react-redux'
import { ValtionMe } from '../../../Assistant/ValtionMe'
import { ValidationProducts,  ValidationUpdateProduct } from '../../../Assistant/ValidationPayment'
import LoadingScreen from '../../../Components/LoadingScreen/LoadingScreen'
import CodeError from '../../../Components/CodeError/CodeError'
import { UploadingNewImageProduct, ProductUpdatedAction } from '../../../redux/Action/Product_Action'
import { useEffect, useState } from 'react'
import Styles from '../style'
import '../style.css'


export default function ProductEditOchCreate(props) {

    const { resturantId, setShow, show } = props
    const dispatch = useDispatch()
    // show image 
    const [showImage, setShowImage] = useState({ value: false, image: '' })
    const ListCategoryUX = useSelector((state) => state?.ListCategory?.category[resturantId]) || []
    // updated and create successfully
    const [updateSuccessFully, setUpdateSuccessFully] = useState(false)
    //  create product and updated product 
    const PageUpdatedProduct = useSelector((state) => state.PageUpdatedProduct)
    const { loading, error, updated, created } = PageUpdatedProduct


    const [imageSave, setImageSave] = useState('')
    const [changeImage, setChangeImage] = useState('')
    const [productDetails, setProductDetails] = useState({name: '',description: '',image: '',popular: false, prices: Number(), category: '', _id: '', cartinfo: ''})

    useEffect(() => {

        if (resturantId) {
            ListCategoryUX?.length === 0 && dispatch(getCategoryAction(resturantId))
            return show?.object ? setProductDetails({
                name: show?.object?.name ? show?.object?.name : '',
                description: show?.object?.description ? show?.object?.description : '',
                image: show?.object?.image ? show?.object?.image : '',
                popular: show?.object?.popular ? show?.object?.popular : false,
                prices: show?.object?.prices ? show?.object?.prices : Number(),
                category: show?.object?.category?._id ? show?.object?.category?._id : '',
                _id: show?.object?._id ? show?.object?._id : '',
                cartinfo: show?.object?.cartinfo ? show?.object?.cartinfo : '620d1f1084f54514ebb4dac8'
            }) : setProductDetails({
                name: '',
                description: '',
                image: '',
                popular: false,
                prices: Number(),
                category: ListCategoryUX ? ListCategoryUX[0]?._id : ListCategoryUX[0]?._id,
                cartinfo: show?.object?.cartinfo ? show?.object?.cartinfo : '620d1f1084f54514ebb4dac8'
            })




        }

        return () => {
            setProductDetails([])
            // setUpdateSuccessFully(false)
        }

// eslint-disable-next-line
    }, [
        resturantId,
        ListCategoryUX?.length,
        dispatch,
        show?.object,
        setProductDetails,
    ])

    useEffect(() => {
        if (updated || created) {

            console.log('helllo',)

            return setUpdateSuccessFully(true)

        }

        return () => {
            setUpdateSuccessFully(false)
        }
        // eslint-disable-next-line
    }, [
        updated,
        created,
        setUpdateSuccessFully
    ])





     // send form to backend updated and create
    const HandleForm = (e) => {
        e.preventDefault()

        // [1] : check out all 
        // [2] : code cleaning with  ChangeCode(params)
        // [3] : checkut picture
        // [4] : 

        if (changeImage?.length >= 1) {
            // Updated image and delete old photo

            return show?.object === '' ? dispatch(UploadingNewImageProduct(imageSave, productDetails, true))
                : dispatch(UploadingNewImageProduct(imageSave, productDetails))
            // console.log('add new image', imageSave, productDetails)

        }

        // Updated Input and without changing th picture....
        // updated product.....
        return dispatch(ProductUpdatedAction(productDetails))

    }




    // uploading image 
    const HandleIamge = async (e) => {
        e.preventDefault()
        // setChangeImage('')
        // setImageSave('')
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        const UrlImage = URL?.createObjectURL(file)
        setChangeImage(UrlImage)
        setImageSave(formData)


    }



    // close Modal
    const HandleClose = () => {
        setShow({ value: false, object: '' })
        setShowImage('')
        setImageSave('')
        setUpdateSuccessFully(false)
        return

    }

    return <Modal
        show={props?.show?.value}
        onHide={() => HandleClose()}
    >
        {loading ?
            <div className='Loading-Updated'>
                <LoadingScreen />
            </div>
            : error ?
                <div className='Loading-Updated'>
                    <CodeError error={error} onClick={() => console.log('click')} />
                </div>
                :
                showImage?.value ?
                    <OppenImage
                        showImage={showImage}
                        setShowImage={setShowImage}
                    />
                    :

                    updateSuccessFully
                        ?
                        <div className='body-category'>
                            <ImageScreen
                                ImageIcon={MyOderImage.close}
                                className='close-pp-pp-image'
                                onClick={() => HandleClose()}
                            />

                            <div className='Loading-Updated'>

                                <div className='Text-Uploading'>
                                    {updated ? 'Updated your order' : 'successfully new product'}
                                </div>
                                <LoadingScreen />
                            </div>
                        </div>


                        :

                        <div className='body-category'>

                            <div className='modal-title-edit-category'>

                                <h1>
                                    {show?.object?.name ?
                                        `Edit - ${show?.object?.name}` :
                                        `create new Category`

                                    }
                                </h1>
                                <ImageScreen
                                    ImageIcon={MyOderImage.close}
                                    className='close-pp-pp-image'
                                    onClick={() => setShow({ value: false, object: '' })}
                                />
                            </div>


                            <div className='form-Scrolling'>
                                <Form onSubmit={HandleForm} className='form-padding'>
                                    <Input
                                        placeholder='Product name'
                                        onChange={(e) => setProductDetails({ ...productDetails, name: e.target.value })}
                                        value={productDetails.name}
                                        className='Input-type-style productdetials'
                                        type='text'
                                        validation={ValtionMe(productDetails.name, 'inputname').toString()}
                                    />

                                    <Input
                                        placeholder='Description'
                                        className='Input-type-style productdetials hegith'
                                        as='textarea'
                                        type='text'
                                        onChange={(e) => setProductDetails({ ...productDetails, description: e.target.value })}
                                        value={productDetails.description}
                                        validation={ValtionMe(productDetails.description, 'description').toString()}
                                    />


                                    <Input
                                        placeholder='Prices'
                                        onChange={(e) => setProductDetails({ ...productDetails, prices: e.target.value })}
                                        value={productDetails.prices}
                                        className='Input-type-style productdetials'
                                        type='number'
                                        validation={ValtionMe(productDetails.prices, 'Prices').toString()}
                                    />


                                    <select
                                        className='Input-type-style productdetials'

                                        onChange={(e) =>
                                            setProductDetails({ ...productDetails, category: e.target.value })}
                                        value={productDetails?.category}
                                    >
                                        {ListCategoryUX?.map((x, Index) => (
                                            <option
                                                value={x?._id}
                                                key={Index}
                                            >{x?.name}</option>
                                        ))}

                                    </select>

                                    <div className='edit-product-image-div'>
                                        <Input
                                            placeholder='image'
                                            type="file"
                                            onChange={HandleIamge}
                                            name="image"

                                        />
                                        {productDetails?.image || changeImage ?
                                            <div className='div-image-handle-product-edit'>
                                                <ImageScreen
                                                    ImageIcon={changeImage ? changeImage : productDetails?.image}
                                                    className='Image-product-Edit'
                                                    onClick={() => setShowImage({ value: true, image: changeImage ? changeImage : productDetails?.image })}
                                                />
                                                <ImageScreen
                                                    ImageIcon={MyOderImage.close}
                                                    className='Image-product-Edit close-c'
                                                    onClick={(e) => changeImage ? setChangeImage('') : setProductDetails({ ...productDetails, image: '' })}
                                                />
                                            </div>
                                            : null}

                                    </div>



                                    <div className='switch-type'
                                        onClick={() => setProductDetails({
                                            ...productDetails, popular: productDetails?.popular ? false : true

                                        })} >

                                        <span className={productDetails?.popular ? 'checkOut-popluer' : ''}>

                                        </span>
                                        <span>Är det populär mat?</span>

                                    </div>





                                    <div className='Buttom-class'>
                                        <ButtomClick
                                            style={Styles.stylebuttom}
                                            title={show?.object
                                                ?
                                                ValidationProducts(productDetails, changeImage) !== true ? 'Updated' : 'check out type input'
                                                :
                                                ValidationProducts(productDetails, changeImage) !== true ? 'create new Product' : 'check out Type input'

                                            }
                                            onClick={HandleForm}
                                            disabled={show?.object ?
                                                ValidationUpdateProduct(show?.object, productDetails, changeImage)
                                                :
                                                ValidationProducts(productDetails, changeImage) === true

                                            }
                                        />
                                    </div>
                                </Form>

                            </div>
                        </div>


        }


    </Modal>
}

