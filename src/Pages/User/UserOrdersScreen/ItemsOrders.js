import { Fragment } from 'react'
import { Row, Col } from 'react-bootstrap'
import { format } from 'timeago.js'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import { SliceName } from '../../../Assistant/Slice'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import Styles from '../../../Components/Update/StylesComponents/style'

export default function ItemsOrders(props) {
    const { UserOrders ,history } = props




    // ruter to order id.
    const HandleProductId = (e, id) => {
        e.preventDefault()
        // console.log('hello', id)
        return history.push(`/order/shipping/${id}`)
    }





    return <Row className='justify-content-center'>
        <Fragment>
            <div className="Order_List_User_Info">

                <h1 >Du har inte gjort några beställningar än</h1>
            </div>

            {UserOrders ?

                UserOrders?.map((order, orderIndex) => (


                    <Col xs={11} sm={6} md={6} lg={6} key={orderIndex} >

                        <div style={Styles.Orderbox} className="xp_order">

                            <div className="Remove_order_user">
                                <ImageScreen ImageIcon={MyOderImage.remove} style={Styles.Ordersremove} />

                            </div>

                            <div className="Order_List_list">
                                <h1 >Order # <span className="Order_List_list_color">{SliceName(order?._id, 15)}</span></h1>

                                <div className="time_buy">


                                    <span>{format(order?.createdAt)}</span>
                                    <ImageScreen ImageIcon={MyOderImage.time} style={Styles.Orderstime} />

                                </div>

                                <div className="Delivered">

                                    <span className="add_delivered">{order?.OrderStatus}</span>
                                    {order?.OrderStatus === 'processing' ?

                                        <ImageScreen ImageIcon={MyOderImage.processing}
                                            style={Styles.Orderstime} />
                                        :
                                        <ImageScreen ImageIcon={MyOderImage.delivery}
                                            style={Styles.Orderstime} />

                                    }




                                </div>

                                <p className="order_payment">pay Payment :
                                    <span className="method_payment">{order?.paymentMethod}</span>
                                    <span className="credit_card">

                                        <ImageScreen ImageIcon={MyOderImage.credit}
                                            style={Styles.OrderstimenotLeft} />
                                    </span>

                                </p>

                            </div>





                            <div style={Styles.Ordersbottom} className="items_total_info">
                                <span className="time_boking_info_info">
                                    <span className="time_boking_info_info_time" >time boking :</span>
                                    <span className="credit_card" >{format(order?.orderTime)}</span>
                                    <span className="credit_card">
                                        <ImageScreen ImageIcon={MyOderImage.delivery}
                                            style={Styles.OrderstimenotLeft} />
                                    </span>
                                </span>
                            </div>







                            <div style={Styles.Ordersbottom} className="items_total_info">
                                <span className="">
                                    {order?.orderitems?.length}x items
                                </span>

                            </div>

                            <div style={Styles.Ordersbottom} className="items_total_info" onClick={(e) => HandleProductId(e, order?._id)}>
                                <span style={Styles.Orderslooklike} className="Add_last">
                                    <span style={Styles.Ordersfont}>detail </span>
                                </span>
                            </div>

                            <div style={Styles.Ordersbottom} className="items_total_info">
                                <span style={Styles.Ordersboxpric} className="Add_last">
                                    <span>{order?.OrdersitemsPrics} Kr </span>
                                </span>
                            </div>

                        </div>



                    </Col>
                ))

                : null}







        </Fragment>

    </Row>
}