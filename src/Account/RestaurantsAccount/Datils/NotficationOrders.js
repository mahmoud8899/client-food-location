import { MyOderImage } from '../../../Assistant/MyOrderImage'
import { SliceName } from '../../../Assistant/Slice'
import ButtomClick from '../../../Components/Buttom/Buttom'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import LoadingErrorHandle from '../../../Components/Update/LoadingErrorHandle/LoadingErrorHandle'
import Styles from '../style'
import { Col } from 'react-bootstrap'



export default function NotficationOrders(props) {


    const {
        error,
        loading,
        orderNotfications

    } = props




    return <LoadingErrorHandle loading={loading} error={error} home={orderNotfications}>




        {orderNotfications ?

            orderNotfications?.map((order, Index) => (
                <Col xs={12} sm={6} md={6} lg={6} key={Index}>



                    <div className='List'>

                        <div className='item'>
                            <ImageScreen
                                ImageIcon={MyOderImage.number}
                                style={Styles.processing}
                            />

                            <span>order number : {SliceName(order?._id, 10)}</span>
                        </div>


                        <div className='item'>
                            <ImageScreen
                                ImageIcon={MyOderImage.credit}

                                style={Styles.processing}
                            />

                            <span>payment - </span>
                            <span className='Color-su' > {order?.paymentMethod}</span>
                        </div>

                        <div className='item'>
                            <ImageScreen
                                ImageIcon={MyOderImage.processing}

                                style={Styles.processing}
                            />

                            <span> order status : {order?.OrderStatus}</span>
                        </div>



                        <div className='item'>
                            <ImageScreen
                                ImageIcon={MyOderImage.food}

                                style={Styles.processing}
                            />

                            <span> driver  -  </span>
                            <span className='Color-su' >{order?.driver} </span>

                        </div>

                        <div className='item'>
                            <ImageScreen
                                ImageIcon={MyOderImage.time}

                                style={Styles.processing}
                            />

                            <span> last time -</span>
                            <span className='Color-su' >{order?.orderTime} </span>
                        </div>


                        {order?.orderitems?.map((product, productIndex) => (
                            <div className='item OrderMunl' key={productIndex}>
                                <span>name : {product?.product?.name}</span>
                                <span> item {product?.qty}</span>
                                <span>prices : {product?.product?.prices}</span>
                            </div>
                        ))}


                        <div className='item'>
                            <ImageScreen
                                ImageIcon={MyOderImage.add}

                                style={Styles.processing}
                            />

                            <span> totalsomu :</span>
                            <span className='Color-su' >  {order?.itemsPrics}</span>
                        </div>



                        <div className='coustomAddres'>
                            <div className='item'>
                                <ImageScreen
                                    ImageIcon={MyOderImage.user}

                                    style={Styles.processing}
                                />

                                <span> full name : {order?.shippingAdress?.firstName} {order?.shippingAdress?.lastName} </span>
                            </div>

                            <div className='item'>
                                <ImageScreen
                                    ImageIcon={MyOderImage.myHome}

                                    style={Styles.processing}
                                />

                                <span>addres : {order?.shippingAdress?.yourAddress}</span>
                            </div>

                            <div className='item'>
                                <ImageScreen
                                    ImageIcon={MyOderImage.city}

                                    style={Styles.processing}
                                />

                                <span>city : {order?.shippingAdress?.city}</span>
                            </div>

                            <div className='item'>
                                <ImageScreen
                                    ImageIcon={MyOderImage.smartphone}

                                    style={Styles.processing}
                                />

                                <span>telefon : {order?.shippingAdress?.telephone}</span>
                            </div>



                            <div className='cancel'>
                                <ButtomClick
                                    title='Cancel Order'
                                    style={Styles.stylebuttom}
                                />
                            </div>



                        </div>



                    </div>

                </Col>
            ))

            : null}






    </LoadingErrorHandle>
}