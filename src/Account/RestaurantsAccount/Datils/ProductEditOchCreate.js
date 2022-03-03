import { useEffect, useState } from 'react'
import { Modal, Form } from 'react-bootstrap'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import Input from '../../../Components/Input/Input'
import ButtomClick from '../../../Components/Buttom/Buttom'
import Styles from '../style'
import '../style.css'
import OppenImage from '../../../Components/Update/OppenImage/OppenImage'
import { getCategoryAction } from '../../../redux/Action/Category_Action'
import { useDispatch, useSelector } from 'react-redux'
import { ValtionMe } from '../../../Assistant/ValtionMe'

export default function ProductEditOchCreate(props) {

    const { resturantId, setShow, show } = props

    const dispatch = useDispatch()
    // show image 
    const [showImage, setShowImage] = useState({ value: false, image: '' })
    const ListCategoryUX = useSelector((state) => state?.ListCategory?.category[resturantId]) || []
    const [imageSave, setImageSave] = useState('')
    const [changeImage, setChangeImage] = useState('')
    const [productDetails, setProductDetails] = useState({
        name: '',
        description: '',
        image: '',
        popular: false,
        prices: Number(),
        category: '',
    })

    useEffect(() => {

        if (resturantId) {
            ListCategoryUX?.length === 0 && dispatch(getCategoryAction(resturantId))
            return show?.object && setProductDetails({
                name: show?.object?.name ? show?.object?.name : '',
                description: show?.object?.description ? show?.object?.description : '',
                image: show?.object?.image ? show?.object?.image : '',
                popular: show?.object?.popular ? show?.object?.popular : false,
                prices: show?.object?.prices ? show?.object?.prices : Number(),
                category: show?.object?.category?._id ? show?.object?.category?._id : ''
            })

        }



        return () => {
            setProductDetails([])
        }


    }, [resturantId, dispatch, ListCategoryUX?.length, show?.object, setProductDetails])







    const HandleForm = (e) => {
        e.preventDefault()

        if (productDetails?.category.length === 0) {
            setProductDetails({ ...productDetails, category: ListCategoryUX[0]?._id })
            return console.log('add category....', productDetails)
        }


        console.log('click', productDetails)
    }



    // uploading image 

    const HandleIamge = async (e) => {
        e.preventDefault()
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        const UrlImage = URL.createObjectURL(file)
        setChangeImage(UrlImage)
        setImageSave(formData)


    }



    // console.log(ListCategoryUX[0]._id)
    return <Modal
        show={props?.show?.value}
        onHide={() => props?.setShow({ value: false, object: '' })}
    >

        <div className='body-category'>

            {showImage?.value ?
                <OppenImage
                    showImage={showImage}
                    setShowImage={setShowImage}
                />


                :

                <>


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
                                validation={ValtionMe(productDetails.name, 'isUser').toString()}
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
                                            onClick={(e) =>
                                                changeImage ? setChangeImage('')
                                                    : setProductDetails({ ...productDetails, image: '' })}
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
                                    title='Save'
                                    onClick={HandleForm}
                                    disabled={
                                        !ValtionMe(productDetails.name, 'isUser') ||
                                        !ValtionMe(productDetails.description, 'description') ||
                                        !ValtionMe(productDetails.prices, 'Prices')

                                    }
                                />
                            </div>
                        </Form>

                    </div>



                </>






            }







        </div>











    </Modal>
}


