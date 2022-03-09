
import { Container, Row, Col } from 'react-bootstrap'
import Title from '../../Components/ScreenTitle/ScreenTitle'
import RestaurantsNavBarScreen from './RestaurantsNavBarScreen'
import { useSelector, useDispatch } from 'react-redux'
import { ShowOrderAction } from '../../redux/Action/Order_Action'
import CartItemsOrders from './Datils/CartItemsOrders'
import OrderNavBarSearching from './Datils/OrderNavBarSearching'
import { useEffect, useState } from 'react'
import './style.css'
import UserName from './Datils/UserName'

export default function RestaurantsOrderScreen(props) {



    const resturantId = props?.match?.params?.id
    const dispatch = useDispatch()

    // get all orders
    const TheResturantShowsOrders = useSelector((state) => state?.TheResturantShowsOrders)
    const { ordersAllNumber, ShowOrders } = TheResturantShowsOrders



    useEffect(() => {

        if (resturantId) {


            return ShowOrders?.length === 0 && dispatch(ShowOrderAction(resturantId))
        }

    }, [dispatch, resturantId, ShowOrders?.length])









    // Searching...
    const [query, setQuery] = useState("");
    const keys = ["OrderStatus", "paymentMethod"];
    const search = (data) => {
        return data?.filter((item) =>
            keys?.some((key) => item[key]?.toLowerCase()?.includes(query))
        );
    };





    return <Container>
        <div className='box'>
            <UserName />
        </div>
        <Title TextTitle='All Orders' />
        <Row className='justify-content-center'>
            <Col xs={12} sm={12} md={4} lg={3} >
                <RestaurantsNavBarScreen ClassNameOrder />
            </Col>
            <Col xs={12} sm={12} md={8} lg={9} >
                <OrderNavBarSearching setQuery={setQuery} />


                <CartItemsOrders
                    ShowOrders={search(ShowOrders)}
                    history={props?.history}
                    ordersAllNumber={ordersAllNumber}
                    resturantId={resturantId}
                />

            </Col>

        </Row>

    </Container>
}






