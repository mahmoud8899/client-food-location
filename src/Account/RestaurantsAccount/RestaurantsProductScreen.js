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
import { FetchCategoryUser } from '../../redux/Action/Category_Action'
import { PageTextEmpty } from '../../Components/Update/PageEmpty/PageEmpty'
import LoadingErrorHandle from '../../Components/Update/LoadingErrorHandle/LoadingErrorHandle'
import { ErrorServer } from '../../Assistant/TextError'



export default function RestaurantsProductScreen(props) {

    const { history } = props




    // testing 
    const loading = false
    const dispatch = useDispatch()
    // user check ut
    const userLogin = useSelector((state) => state?.userLogin)
    const { userInfo } = userLogin

    // get all products..
    const matProducts = useSelector((state) => state?.PaginationProducts)
    const { categoryProductsNextPagesxp, products, error } = matProducts

    // [1]  open create product --- show.value equal true
    // [2] show.object  has object product for edit 
    const [show, setShow] = useState({ value: false, object: '' })

    //----------- updated and remove and create product  ---------- important ---------->
    const PageUpdatedProduct = useSelector((state) => state?.PageUpdatedProduct)
    const { updated, created, removeproduct } = PageUpdatedProduct


    // get all category to user.
    const UserpageCategory = useSelector((state) => state?.UserpageCategory)
    const { usercategory: ListCategoryUX } = UserpageCategory





    // console.log(userInfo?.cartinfo)
    // '622b3885fc1613a48d2dc4fb1'
    // get products...
    useEffect(() => {
        if (userInfo?.restaurantid) {
            return userInfo?.cartinfo && products?.length === 0 && dispatch(productpaginationAction(userInfo?.cartinfo))
        } else {
            return history.push('/uppsala/')
        }

    }, [
        dispatch,
        products,
        userInfo,
        history
    ])



    
  
  

    useEffect(() => {

        if (userInfo?.restaurantid) {


            return products?.length === Number(0) &&  userInfo?.cartinfo
                && ListCategoryUX?.length === 0 && dispatch(FetchCategoryUser())
        } else {
            return history.push('/uppsala/')
        }


    }, [
        dispatch,
        userInfo,
        ListCategoryUX,
        history,
        products,
        

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

                <LoadingErrorHandle
                    loading={loading}
                    error={error}
                    home={products}
                    TextNotItems={ErrorServer}
                    TextData='ccc'
                    extraStyle
                >


                    {ListCategoryUX?.length !== 0
                        && ListCategoryUX !== 'Empty'
                        && userInfo?.cartinfo &&
                        <ProductsNavBarSearching setShow={setShow} setQuery={setQuery} />
                    }



                    {products?.length === Number(0) ?
                        <PageTextEmpty Pagetext='först måste du skapa kategori' />

                        :
                        <CartItemsProducts
                            products={search(products)}
                            setShow={setShow}
                            categoryProductsNextPagesxp={categoryProductsNextPagesxp}
                            resturantId={userInfo?.cartinfo}
                        />
                    }






                    {show?.value &&
                        <ProductEditOchCreate
                            show={show}
                            setShow={setShow}
                            userInfo={userInfo}
                            ListCategoryUX={ListCategoryUX}
                        />

                    }



                </LoadingErrorHandle>




            </Col >

        </Row >


    </Container >
}









