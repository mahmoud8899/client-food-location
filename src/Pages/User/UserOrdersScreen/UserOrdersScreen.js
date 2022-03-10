import { Row, Col, Image, Container } from 'react-bootstrap'
import { format } from 'timeago.js'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Styles from '../UserProfileScreen/style'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import { SliceName } from '../../../Assistant/Slice'
import { Fragment, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { OrdersUserAction } from '../../../redux/Action/Order_Action'
import UserNavBarScreen from '../UserNavBarScreen/UserNavBarScreen'
import '../UserProfileScreen/Profile.css'
import UserVerifiedID from '../../../Components/Update/UserVerifiedID/UserVerifiedID'
const UserOrdersScreen = (props) => {






    const dispatch = useDispatch()
    const history = useHistory()



    //console.log('token',token)
    // list orders to user 
    const myOrder = useSelector((state) => state?.myOrder)
    const { UserOrders, nextNumber } = myOrder
    // const OrderNext = useSelector((state) => state?.myOrder?.nextNumber[OrderNumbersUser])





    useEffect(() => {
        return UserOrders?.length === 0 && dispatch(OrdersUserAction())

    }, [dispatch, UserOrders?.length, nextNumber])




    // ruter to order id.
    const HandleProductId = (e, id) => {
        e.preventDefault()
        // console.log('hello', id)
        return history.push(`/order/shipping/${id}`)
    }











    // fatch user.......... more data
    const fetchData = () => {

        if (nextNumber === 1 || nextNumber === null || nextNumber === undefined) {


            return
        } else {
            return dispatch(OrdersUserAction())
        }


        // if(nextNumber === null ||  nextNumber === 'undefined') return 





    }





    return <UserVerifiedID>
        <Container>

            <Row className="justify-content-center margin-top-class" >


                <Col xs={12} sm={12} md={12} lg={12} >
                    <div className='myprofile'>
                        <h1>Profile</h1>
                    </div>

                </Col>


                <Col xs={12} sm={12} md={12} lg={12}>


                    <UserNavBarScreen ClassNameOrder />

                    <div className='margin-bottom-class'>  </div>

                </Col>


                <Col xs={12} sm={12} md={12} lg={8} >

                    <InfiniteScroll
                        style={Styles.co}

                        dataLength={UserOrders.length} //This is important field to render the next data
                        next={fetchData}
                        hasMore={nextNumber === null ? false : true}
                        loader={nextNumber === null ? false : <h1>loading....</h1>}


                    >
                        <Row className='justify-content-center'>
                            <Fragment>
                                <div className="Order_List_User_Info">

                                    <h1 >Du har inte gjort några beställningar än</h1>
                                </div>

                                {UserOrders ?

                                    UserOrders?.map((order, orderIndex) => (


                                        <Col xs={11} sm={6} md={6} lg={6} key={orderIndex} >

                                            <div style={Styles.box} className="xp_order">

                                                <div className="Remove_order_user">
                                                    <Image src={MyOderImage.remove}
                                                        style={Styles.remove} />

                                                </div>

                                                <div className="Order_List_list">
                                                    <h1 >Order # <span className="Order_List_list_color">{SliceName(order?._id, 15)}</span></h1>

                                                    <div className="time_buy">


                                                        <span>{format(order?.createdAt)}</span>
                                                        <Image src={MyOderImage.time}
                                                            style={Styles.time} />

                                                    </div>

                                                    <div className="Delivered">

                                                        <span className="add_delivered">{order?.OrderStatus}</span>
                                                        {order?.OrderStatus === 'processing' ?

                                                            <Image src={MyOderImage.processing}
                                                                style={Styles.time} />
                                                            :
                                                            <Image src={MyOderImage.delivery}
                                                                style={Styles.time} />

                                                        }




                                                    </div>

                                                    <p className="order_payment">pay Payment :
                                                        <span className="method_payment">{order?.paymentMethod}</span>
                                                        <span className="credit_card">

                                                            <Image src={MyOderImage.credit}
                                                                style={Styles.timenotLeft} />
                                                        </span>

                                                    </p>

                                                </div>





                                                <div style={Styles.bottom} className="items_total_info">
                                                    <span className="time_boking_info_info">
                                                        <span className="time_boking_info_info_time" >time boking :</span>
                                                        <span className="credit_card" >{format(order?.orderTime)}</span>
                                                        <span className="credit_card">
                                                            <Image src={MyOderImage.delivery}
                                                                style={Styles.timenotLeft} />
                                                        </span>
                                                    </span>
                                                </div>







                                                <div style={Styles.bottom} className="items_total_info">
                                                    <span className="">
                                                        {order?.orderitems?.length}x items
                                                    </span>

                                                </div>

                                                <div style={Styles.bottom} className="items_total_info" onClick={(e) => HandleProductId(e, order?._id)}>
                                                    <span style={Styles.looklike} className="Add_last">
                                                        <span style={Styles.font}>detail </span>
                                                    </span>
                                                </div>

                                                <div style={Styles.bottom} className="items_total_info">
                                                    <span style={Styles.boxpric} className="Add_last">
                                                        <span>{order?.itemsPrics} Kr </span>
                                                    </span>
                                                </div>

                                            </div>



                                        </Col>
                                    ))

                                    : null}







                            </Fragment>

                        </Row>
                    </InfiniteScroll>
                </Col>
            </Row>
        </Container>

    </UserVerifiedID>








}



export default UserOrdersScreen





