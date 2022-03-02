import { Col, Container, Row, } from 'react-bootstrap'
import RestaurantsNavBarScreen from './RestaurantsNavBarScreen'
import Title from '../../Components/ScreenTitle/ScreenTitle'
import './style.css'
import { MyOderImage } from '../../Assistant/MyOrderImage'
import ImageScreen from '../../Components/ImageScreen/ImageScreen'
import { useEffect } from 'react'
import { OrderResturantNotifications } from '../../redux/Action/Order_Action'
import { useDispatch, useSelector } from 'react-redux'
import NotficationOrders from './Datils/NotficationOrders'
import NavBarList from './Datils/NavBarList'
export default function RestaurantsHomeScreen(props) {


    const resturantId = props?.match?.params?.id


    const theResturant = useSelector((state) => state?.theResturant)
    const { loading, error, orderNotfications } = theResturant


    const dispatch = useDispatch()




    useEffect(() => {

        if (resturantId) {


            return orderNotfications?.length === 0 && dispatch(OrderResturantNotifications(resturantId))
        }

    }, [dispatch, resturantId, orderNotfications?.length])








    return <Container >

        <div className='box'> </div>
        <Title TextTitle='Restaurant Admin' />
        <Row className='justify-content-center'>



            <Col xs={12} sm={12} md={3} lg={3} >
                <RestaurantsNavBarScreen />
            </Col>

            <Col xs={12} sm={12} md={9} lg={9} >


                <NavBarList
                    Other={

                        <div className='Order-List-New'>Order List New</div>

                    }
                    OtherLast={
                        <div className='children_notification'>
                            <ImageScreen ImageIcon={MyOderImage.notification} className='notification' />
                            <span className='notification_number' >2</span>
                        </div>
                    }
                />





                <Row className='justify-content-center'>

                    <NotficationOrders
                        error={error}
                        loading={loading}
                        orderNotfications={orderNotfications}

                    />
                </Row>
            </Col>


















        </Row>
    </Container>
}

