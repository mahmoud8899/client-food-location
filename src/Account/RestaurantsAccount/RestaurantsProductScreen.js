import { Container, Row, Col } from 'react-bootstrap'
import Title from '../../Components/ScreenTitle/ScreenTitle'
import RestaurantsNavBarScreen from './RestaurantsNavBarScreen'
import { useEffect, useState } from 'react'
import CartItemsProducts from './Datils/CartItemsProducts'
import { productpaginationAction } from '../../redux/Action/Product_Action'
import { useDispatch, useSelector } from 'react-redux'
import ProductEditOchCreate from './Datils/ProductEditOchCreate'
import { TheClearing } from '../../Components/CloseScreen/CloseScreen'
import ProductsNavBarSearching from './Datils/ProductsNavBarSearching'
import './style.css'
import UserName from './Datils/UserName'





export default function RestaurantsProductScreen(props) {



    // id to user......
    const resturantId = props?.match?.params?.id
    const dispatch = useDispatch()
    // get all products..
    const matProducts = useSelector((state) => state?.PaginationProducts)
    const { categoryProductsNextPagesxp, products } = matProducts

    // [1]  open create product --- show.value equal true
    // [2] show.object  has object product for edit 
    const [show, setShow] = useState({ value: false, object: '' })

    //----------- updated and remove and create product  ---------- important ---------->
    const PageUpdatedProduct = useSelector((state) => state?.PageUpdatedProduct)
    const { updated, created, removeproduct } = PageUpdatedProduct



    // get products...
    useEffect(() => {
        if (resturantId) {

            products?.length === 0 && dispatch(productpaginationAction(resturantId))
            return
        }
    }, [
        dispatch,
        resturantId,
        products?.length,
    ])



    // Update State and products...
    // if there is an updated and remove and create
    useEffect(() => {

        if (updated || created || removeproduct) {

            return TheClearing(dispatch)

        }

    }, [
        dispatch,
        updated,
        created,
        removeproduct
    ])



    // searching with products....
    const [query, setQuery] = useState("");
    const keys = ["name"];
    const search = (data) => {
        return data?.filter((item) =>
            keys?.some((key) => item[key]?.toLowerCase()?.includes(query))
        );
    };




    return <Container >

        <div className='box'>

            <UserName />

        </div>

        <Title TextTitle='Alla Produkter...' />
        <Row className='justify-content-center'>
            <Col xs={12} sm={12} md={4} lg={3} >
                <RestaurantsNavBarScreen ClassNameUpdate />
            </Col>

            <Col xs={12} sm={12} md={8} lg={9} >




                <ProductsNavBarSearching
                    setShow={setShow}
                    setQuery={setQuery}
                />



                <CartItemsProducts
                    products={search(products)}
                    setShow={setShow}
                    categoryProductsNextPagesxp={categoryProductsNextPagesxp}
                    resturantId={resturantId}
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


