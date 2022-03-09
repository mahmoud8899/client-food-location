import { Container, Row, Col } from 'react-bootstrap'
import Title from '../../Components/ScreenTitle/ScreenTitle'
import RestaurantsNavBarScreen from './RestaurantsNavBarScreen'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItemsCategory from './Datils/CartItemsCategory'
import { getCategoryAction } from '../../redux/Action/Category_Action'
import CategoryEditOchCreate from './Datils/CategoryEditOchCreate'
import CategoryNavBarSearching from './Datils/CategoryNavBarSearching'
import LoadingErrorHandle from '../../Components/Update/LoadingErrorHandle/LoadingErrorHandle'
import UserName from './Datils/UserName'
import './style.css'
export default function RestaurantsCategoryScreen(props) {





    // cart info id
    const resturantId = props?.match?.params?.id
    const dispatch = useDispatch()
    // open edit and create.....
    const [editCategory, setEditCategory] = useState({ value: false, object: '' })





    // event after reqqurest...
    const PageCategory = useSelector((state) => state?.PageCategory)
    const { updated, create, remove, category: ListCategoryUX, error, loading } = PageCategory

    // requrest category
    useEffect(() => {

        if (resturantId) {
            return ListCategoryUX?.length === 0 && dispatch(getCategoryAction(resturantId))
        }


    }, [
        resturantId,
        dispatch,
        ListCategoryUX?.length,
    ])


    // updated and create category....
    useEffect(() => {

        if (updated || create || remove) {

            console.log('helllo')
            dispatch(getCategoryAction(resturantId))
            return
        }

    }, [updated, create, dispatch, resturantId, remove])


    // searching in category....
    const [query, setQuery] = useState("");
    const keys = ["name"];
    const search = (data) => {
        return data?.filter((item) =>
            keys?.some((key) => item[key]?.toLowerCase()?.includes(query))
        )
    };




    return <Container>

        <div className='box'>
            <UserName />
        </div>


        <Title TextTitle='product Admin' />
        <LoadingErrorHandle
            loading={loading}
            error={error}
            home={ListCategoryUX}
            TextNotItems='Empty'

        >

            <Row className='justify-content-center'>

                <Col xs={12} sm={12} md={4} lg={3} >
                    <RestaurantsNavBarScreen ClassCategoryActive />
                </Col>

                <Col xs={12} sm={12} md={8} lg={9} >

                    <CategoryNavBarSearching
                        setEditCategory={setEditCategory}
                        setQuery={setQuery}
                    />


                    <CartItemsCategory
                        ListCategoryUX={search(ListCategoryUX)}
                        setEditCategory={setEditCategory}

                    />


                </Col>

            </Row>


        </LoadingErrorHandle>

        <CategoryEditOchCreate
            editCategory={editCategory}
            setEditCategory={setEditCategory}
        />




    </Container>
}
