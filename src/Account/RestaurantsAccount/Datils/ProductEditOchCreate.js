import { useEffect, useState } from 'react'
import { Modal, Form } from 'react-bootstrap'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import Input from '../../../Components/Input/Input'
import ButtomClick from '../../../Components/Buttom/Buttom'
import Styles from '../style'
import '../style.css'
import { getCategoryAction } from '../../../redux/Action/Category_Action'
import { useDispatch, useSelector } from 'react-redux'


export default function ProductEditOchCreate(props) {

    const { resturantId, setShow, show } = props

    const dispatch = useDispatch()
    const ListCategoryUX = useSelector((state) => state?.ListCategory?.category[resturantId]) || []
    const [productDetails, setProductDetails] = useState({
        name: '',
        description: '',
        image: '',
        popular: '',
        prices: false,
        category: '',
    })

    useEffect(() => {

        if (resturantId) {
            ListCategoryUX?.length === 0 && dispatch(getCategoryAction(resturantId))
            return show?.object && setProductDetails({
                name: show?.object?.name ? show?.object?.name : '',
                description: show?.object?.description ? show?.object?.description : '',
                image: show?.object?.image ? show?.object?.image : '',
                popular: show?.object?.popular ? show?.object?.popular : '',
                prices: show?.object?.prices ? show?.object?.prices : false,
                category: show?.object?.category ? show?.object?.name : ''
            })

        }



        return () => {
            setProductDetails([])
        }


    }, [resturantId, dispatch, ListCategoryUX?.length, show?.object, setProductDetails])

















    const HandleForm = (e) => {
        e.preventDefault()
        console.log('click', productDetails)
    }





    return <Modal
        show={props?.show?.value}
        onHide={() => props?.setShow({ value: false, object: '' })}
    >

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
                    />

                    <Input
                        placeholder='Description'
                        className='Input-type-style productdetials hegith'
                        as='textarea'
                        type='text'
                        onChange={(e) => setProductDetails({ ...productDetails, description: e.target.value })}
                        value={productDetails.description}
                    />
                    <div className='edit-product-image-div'>
                        <Input
                            placeholder='image'
                            type="file"
                            multiple
                            name="image"

                        />
                        {productDetails?.image ?
                            <div className='div-image-handle-product-edit'>
                                <ImageScreen ImageIcon={productDetails?.image} className='Image-product-Edit' />
                                <ImageScreen ImageIcon={MyOderImage.close} className='Image-product-Edit close-c' />
                            </div>
                            : null}

                    </div>

                    <Input
                        placeholder='Prices'
                        onChange={(e) => setProductDetails({ ...productDetails, prices: e.target.value })}
                        value={productDetails.prices}
                        className='Input-type-style productdetials'
                        type='number'
                    />


                    <select
                        className='Input-type-style productdetials'

                        onChange={(e) => setProductDetails({ ...productDetails, category: e.target.value })}
                        value={productDetails?.category}
                    >
                        {ListCategoryUX?.map((x, Index) => (
                            <option
                                value={x?.name}
                                key={Index}
                            >{x?.name}</option>
                        ))}

                    </select>

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
                            title='save'
                            onClick={HandleForm}
                        />
                    </div>
                </Form>

            </div>






        </div>



    </Modal>
}


