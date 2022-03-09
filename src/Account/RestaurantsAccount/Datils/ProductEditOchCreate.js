
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import Input from '../../../Components/Input/Input'
import ButtomClick from '../../../Components/Buttom/Buttom'
import OppenImage from '../../../Components/Update/OppenImage/OppenImage'
import { getCategoryAction } from '../../../redux/Action/Category_Action'
import { ValtionMe } from '../../../Assistant/ValtionMe'
import { ValidationProducts, ValidationUpdateProduct, ChangeCode } from '../../../Assistant/ValidationPayment'
import { UploadingNewImageProduct, ProductUpdatedAction } from '../../../redux/Action/Product_Action'
import { TheProductRemoveAndUpdated } from '../../../Components/CloseScreen/CloseScreen'
import HandleLoadingPage from '../../../Components/Update/HandleLoadingPage/HandleLoadingPage'
import Styles from '../../../Components/Update/StylesComponents/style'
import { Modal, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import '../style.css'
import { useEffect, useState } from 'react'
import PageSwitch from '../../../Components/Update/PageSwitch/PageSwitch'
import CodeError from '../../../Components/CodeError/CodeError'


export default function ProductEditOchCreate(props) {

    const { resturantId, setShow, show } = props
    const dispatch = useDispatch()
    // show image 
    const [showImage, setShowImage] = useState({ value: false, image: '' })
    //handle error 
    const [handleError, setHandleError] = useState(false)
    // get all category 
    const PageCategory = useSelector((state) => state?.PageCategory)
    const { category: ListCategoryUX } = PageCategory
    // alret  updated and create successfully
    const [updateSuccessFully, setUpdateSuccessFully] = useState(false)
    //  create product and updated product 
    const PageUpdatedProduct = useSelector((state) => state.PageUpdatedProduct)
    const { loading, error, updated, created } = PageUpdatedProduct


    // image uploading and show
    const [imageSave, setImageSave] = useState('')
    // image uploading and show
    const [changeImage, setChangeImage] = useState('')
    // product details
    const [productDetails, setProductDetails] = useState({ name: '', description: '', image: '', popular: false, prices: Number(), category: '', _id: '', cartinfo: '' })

    // updated when edit show product details
    useEffect(() => {
        if (resturantId) {
            ListCategoryUX?.length === 0 && dispatch(getCategoryAction(resturantId))
            return show?.object ? setProductDetails({
                name: show?.object?.name ? show?.object?.name : '',
                description: show?.object?.description ? show?.object?.description : '',
                image: show?.object?.image ? show?.object?.image : '',
                popular: show?.object?.popular ? show?.object?.popular : false,
                prices: show?.object?.prices ? show?.object?.prices : Number(),
                category: show?.object?.category?._id ? show?.object?.category?._id :
                    ListCategoryUX ? ListCategoryUX?.[0]?._id : ListCategoryUX?.[0]?._id,
                _id: show?.object?._id ? show?.object?._id : '',
                cartinfo: show?.object?.cartinfo ? show?.object?.cartinfo : '620d1f1084f54514ebb4dac8'
            }) : setProductDetails({
                name: '',
                description: '',
                image: '',
                popular: false,
                prices: Number(),
                category: ListCategoryUX ? ListCategoryUX?.[0]?._id : ListCategoryUX?.[0]?._id,
                cartinfo: show?.object?.cartinfo ? show?.object?.cartinfo : '620d1f1084f54514ebb4dac8'
            })
        }





        return () => {
            setProductDetails([])

        }

        // eslint-disable-next-line
    }, [
        resturantId,
        ListCategoryUX?.length,
        dispatch,
        show?.object,
        setProductDetails,
    ])


    // console.log(productDetails)

    // updated and remove ...
    useEffect(() => {
        if (updated || created) {
            return setUpdateSuccessFully(true)

        }

        return () => {
            setUpdateSuccessFully(false)
        }

    }, [updated,
        created,
        setUpdateSuccessFully])





    // send form to backend updated and create
    // Handle Edit and Create new product.
    const HandleForm = (e) => {
        e.preventDefault()

        setHandleError(false)

        if (
            productDetails?.name?.length >= 3
            && productDetails?.description?.length >= 3
            && Number(productDetails?.prices) > Number(0)
        ) {

            // [1] : check out all 
            // [2] : code cleaning with  ChangeCode(params)
            // [3] : checkut picture

            if (changeImage?.length >= 1) {
                // Updated image and delete old photo

                return show?.object === '' ? dispatch(UploadingNewImageProduct(imageSave, productDetails, true))
                    : dispatch(UploadingNewImageProduct(imageSave, productDetails))
                // console.log('add new image', imageSave, productDetails)

            }

            // Updated Input and without changing th picture....
            // updated product.....

            const ChekOutInput = {
                name: ChangeCode(productDetails?.name),
                description: ChangeCode(productDetails?.description),
                image: productDetails?.image,
                popular: productDetails?.popular,
                prices: productDetails?.prices,
                category: productDetails?.category,
                _id: productDetails?._id,
                cartinfo: productDetails?.cartinfo,
            }
            return dispatch(ProductUpdatedAction(ChekOutInput))

        } else {

            return setHandleError(true)
        }








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
        return TheProductRemoveAndUpdated(dispatch)


    }

    // remove all error 
    const BackAndRemoveError = () => {
        return TheProductRemoveAndUpdated(dispatch)
    }

    return <Modal
        show={props?.show?.value}
        onHide={() => HandleClose()}
    >
        <HandleLoadingPage
            loading={loading}
            error={error}
            updateSuccessFully={updateSuccessFully}
            HandleClose={HandleClose}
            BackAndRemoveError={BackAndRemoveError}
            updated={updated}
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

                            <h1>
                                {show?.object?.name ?
                                    `Uppdatering - ${show?.object?.name}` :
                                    `skapa ny kategori`

                                }
                            </h1>
                            <ImageScreen
                                ImageIcon={MyOderImage.close}
                                className='close-pp-pp-image'
                                onClick={() => setShow({ value: false, object: '' })}
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
                                    placeholder='Produktnamn'
                                    onChange={(e) => setProductDetails({ ...productDetails, name: e.target.value })}
                                    value={productDetails.name}
                                    className='Input-type-style productdetials'
                                    type='text'
                                    title='Produktnamn'
                                    validation={ValtionMe(productDetails.name, 'inputname').toString()}
                                />

                                <Input
                                    placeholder='Beskrivning'
                                    className='Input-type-style productdetials hegith'
                                    as='textarea'
                                    type='text'
                                    title='Beskrivning'
                                    onChange={(e) => setProductDetails({ ...productDetails, description: e.target.value })}
                                    value={productDetails.description}
                                    validation={ValtionMe(productDetails.description, 'description').toString()}
                                />


                                <Input
                                    placeholder='Priser'
                                    title='Priser'
                                    onChange={(e) => setProductDetails({ ...productDetails, prices: e.target.value })}
                                    value={productDetails.prices}
                                    className='Input-type-style productdetials'
                                    type='number'
                                    validation={ValtionMe(productDetails.prices, 'Prices').toString()}
                                />


                                <span className='category-span'>Välj kategori</span>
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
                                        title='ladda upp bild'
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



                                <PageSwitch
                                    onClick={() => setProductDetails({
                                        ...productDetails, popular: productDetails?.popular ? false : true

                                    })}
                                    OtherInput={productDetails?.popular}
                                    TextInput='Är det populär mat?'

                                />







                                <div className='Buttom-class'>
                                    <ButtomClick
                                        style={Styles.TabButtomCreate}
                                        title={show?.object
                                            ?
                                            ValidationProducts(productDetails, changeImage) !== true ? 'Uppdatering' : 'kolla in typinmatning'
                                            :
                                            ValidationProducts(productDetails, changeImage) !== true ? 'skapa ny produkt' : 'kolla in typinmatning'

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

        </HandleLoadingPage>



    </Modal>
}

