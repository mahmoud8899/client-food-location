
import { Container, Row, Col } from 'react-bootstrap'
import { MyOderImage } from '../../Assistant/MyOrderImage'
import Title from '../../Components/ScreenTitle/ScreenTitle'
import RestaurantsNavBarScreen from './RestaurantsNavBarScreen'
import Styles from './style'
import './style.css'
import ImageScreen from '../../Components/ImageScreen/ImageScreen'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ShowOrderAction } from '../../redux/Action/Order_Action'
import CartItemsOrders from './Datils/CartItemsOrders'
import Input from '../../Components/Input/Input'
import NavBarList from './Datils/NavBarList'
export default function RestaurantsOrderScreen(props) {



    const resturantId = props?.match?.params?.id


    const dispatch = useDispatch()

    const TheResturantShowsOrders = useSelector((state) => state?.TheResturantShowsOrders)
    const { ordersAllNumber, ShowOrders } = TheResturantShowsOrders











    useEffect(() => {

        if (resturantId) {


            return ShowOrders?.length === 0 && dispatch(ShowOrderAction(resturantId))
        }

    }, [dispatch, resturantId, ordersAllNumber, ShowOrders?.length])











    return <Container >

        <div className='box'>


        </div>


        <Title TextTitle='All Orders' />
        <Row className='justify-content-center'>

        
 

 <Col xs={12} sm={12} md={3} lg={3} >
                <RestaurantsNavBarScreen />
            </Col>

            <Col xs={12} sm={12} md={9} lg={9} >

                <NavBarList
                    Other={
                        <div className='Order-List-New'>
                            <ImageScreen
                                ImageIcon={MyOderImage.delivery}
                                style={Styles.image}
                            />
                            <span>List Orders</span>
                        </div>
                    }
                    OtherLast={
                        <div className='Order-List-New'>
                            <Input
                                className='Input-type-style notLeft'
                                placeholder='Searching orders...'
                                ImageLog={MyOderImage.search}
                            />
                        </div>

                    }
                />












                <CartItemsOrders ShowOrders={ShowOrders} history={props?.history} />















            </Col>

        </Row>

    </Container>
}






