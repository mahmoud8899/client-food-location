import { Container, Row, Col } from 'react-bootstrap'
import { MyOderImage } from '../../Assistant/MyOrderImage'
import Title from '../../Components/ScreenTitle/ScreenTitle'
import RestaurantsNavBarScreen from './RestaurantsNavBarScreen'
import { useEffect, useState } from 'react'
import CartItemsProducts from './Datils/CartItemsProducts'
import ImageScreen from '../../Components/ImageScreen/ImageScreen'
import { productpaginationAction } from '../../redux/Action/Product_Action'
import { useDispatch, useSelector } from 'react-redux'
import ProductEditOchCreate from './Datils/ProductEditOchCreate'
import Input from '../../Components/Input/Input'
import NavBarList from './Datils/NavBarList'
import Styles from './style'
import './style.css'
export default function RestaurantsProductScreen(props) {



    const resturantId = props?.match?.params?.id
    const dispatch = useDispatch()
    const matProducts = useSelector((state) => state?.PaginationProducts?.categoryproduct[resturantId]) || []

    useEffect(() => {
        if (resturantId) {
            return matProducts?.length === 0 && dispatch(productpaginationAction(resturantId))
        }
    }, [resturantId, matProducts?.length, dispatch])




    // open create product or edit.....
    const [show, setShow] = useState({ value: false, object: '' })


    return <Container >

        <div className='box'></div>


        <Title TextTitle='product Admin' />
        <Row className='justify-content-center'>



            <Col xs={12} sm={12} md={3} lg={3} >
                <RestaurantsNavBarScreen ClassNameUpdate />
            </Col>

            <Col xs={12} sm={12} md={9} lg={9} >



                <NavBarList
                    onClick={(e) => setShow({ value: true, object: '' })}
                    Other={
                        <div className='Order-List-New color-color'>
                            <ImageScreen ImageIcon={MyOderImage.uploading} style={Styles.image} />
                            <span>Create Product</span>
                        </div>


                    }
                    OtherLast={
                        <div className='Order-List-New'>
                            <Input className='Input-type-style notLeft' placeholder='Searching Product...' ImageLog={MyOderImage.search} />
                        </div>

                    }
                />






                <CartItemsProducts
                    matProducts={matProducts}
                    setShow={setShow}
                />

            </Col>

        </Row>

        {show?.value &&
            <ProductEditOchCreate
                show={show}
                setShow={setShow}
                resturantId={resturantId}

            />

        }

    </Container>
}