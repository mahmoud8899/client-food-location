import { Container, Row, Col } from 'react-bootstrap'
import { MyOderImage } from '../../Assistant/MyOrderImage'
import Title from '../../Components/ScreenTitle/ScreenTitle'
import RestaurantsNavBarScreen from './RestaurantsNavBarScreen'
import Styles from './style'
import './style.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItemsCategory from './Datils/CartItemsCategory'
import ImageScreen from '../../Components/ImageScreen/ImageScreen'
import { getCategoryAction } from '../../redux/Action/Category_Action'
import CategoryEditOchCreate from './Datils/CategoryEditOchCreate'
import Input from '../../Components/Input/Input'
import NavBarList from './Datils/NavBarList'
export default function RestaurantsCategoryScreen(props) {





    const resturantId = props?.match?.params?.id
    const dispatch = useDispatch()


    const ListCategoryUX = useSelector((state) => state?.ListCategory?.category[resturantId]) || []


    useEffect(() => {

        if (resturantId) {

            return ListCategoryUX?.length === 0 && dispatch(getCategoryAction(resturantId))
        }

    }, [resturantId, dispatch, ListCategoryUX?.length])



    const [editCategory, setEditCategory] = useState({
        value: false,
        object: ''
    })






    return <Container>

        <div className='box'> </div>


        <Title TextTitle='product Admin' />
        <Row className='justify-content-center'>



            <Col xs={12} sm={12} md={3} lg={3} >
                <RestaurantsNavBarScreen ClassNameUpdate />
            </Col>

            <Col xs={12} sm={12} md={9} lg={9} >


                <NavBarList
                    onClick={() => setEditCategory({ value: true })}
                    Other={
                        <div className='Order-List-New color-color'>
                            <ImageScreen ImageIcon={MyOderImage.uploading} style={Styles.image} />
                            <span>Create Category</span>
                        </div>
                    }
                    OtherLast={
                        <div className='Order-List-New'>
                            <Input className='Input-type-style notLeft' placeholder='Searching Product...' ImageLog={MyOderImage.search} />
                        </div>

                    }
                />


                <CartItemsCategory
                    ListCategoryUX={ListCategoryUX}
                    setEditCategory={setEditCategory}

                />


            </Col>

        </Row>



        <CategoryEditOchCreate

            editCategory={editCategory}
            setEditCategory={setEditCategory}
        />

    </Container>
}