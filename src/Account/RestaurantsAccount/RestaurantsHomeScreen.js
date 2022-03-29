import { Col, Container, Row, } from 'react-bootstrap'
import RestaurantsNavBarScreen from './RestaurantsNavBarScreen'
import Title from '../../Components/ScreenTitle/ScreenTitle'
import { MyOderImage } from '../../Assistant/MyOrderImage'
import ImageScreen from '../../Components/ImageScreen/ImageScreen'
import { OrderResturantNotifications } from '../../redux/Action/Order_Action'
import { useDispatch, useSelector } from 'react-redux'
import NotficationOrders from './Datils/NotficationOrders'
import NavBarList from '../../Components/Update/NavBarSearchingTopAll/NavBarList'
import UserName from './Datils/UserName'
import { useEffect } from 'react'
import './style.css'

export default function RestaurantsHomeScreen(props) {

    const { history } = props



    // user check ut
    const userLogin = useSelector((state) => state?.userLogin)
    const { userInfo } = userLogin


    // get all order....>
    const theResturant = useSelector((state) => state?.theResturant)
    const { loading, error, orderNotfications } = theResturant


    const dispatch = useDispatch()






    // get all order notfiation ... 
    useEffect(() => {

        if (userInfo?.restaurantid) {

            return userInfo?.cartinfo && orderNotfications?.length === 0 && dispatch(OrderResturantNotifications(userInfo?.cartinfo))

        } else {
            return history.push('/uppsala/')
        }



    }, [dispatch, orderNotfications?.length, history, userInfo])









    return <Container >

        <div className='box'>
            <UserName />
        </div>
        <Title TextTitle='Restaurant Admin' />
        <Row className='justify-content-center'>




            <Col xs={12} sm={12} md={4} lg={3} >
                <RestaurantsNavBarScreen ClassNotfication />
            </Col>

            <Col xs={12} sm={12} md={8} lg={9} >




                <NavBarList

                    Other={
                        <div className='Order-List-New-other'>
                            <div className='AddClass-c add-left'>
                                <span className='font-all'>Order List New</span>
                            </div>
                        </div>
                    }
                    OtherLast={
                        <div className='Order-List-New-other'>
                            <div className='children_notification'>
                                <ImageScreen ImageIcon={MyOderImage.notification} className='notification' />
                                <span className='notification_number' >2</span>
                            </div>
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

// {/* 
//         <div className='Margin-top'>
//     <LoadingErrorHandle loading={loading} error={error} TextNotItems={ErrorServer} extraStyle >
//               </LoadingErrorHandle>
//  </div>
//                {orderNotfications?.length === Number(0) ||
//                                 orderNotfications === 'Empty' ?
//                                 <PageTextEmpty Pagetext='Det finns inga aviseringar för tillfället' />
//                                 :

//    }
// */ }