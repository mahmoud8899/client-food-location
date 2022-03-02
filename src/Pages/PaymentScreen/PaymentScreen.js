import { Container, Row, Col } from 'react-bootstrap'
import './PaymentScreen.css'
import Title from '../../Components/ScreenTitle/ScreenTitle'
import PaymentAddresDriverScreen from './PaymentAddresDriverScreen'
import PaymentCartIemsScreen from './PaymentCartIemsScreen'
import PaymentCreditScreen from './PaymentCreditScreen'
import PaymentCourierScreen from './PaymentCourierScreen'
import PaymentPromoCodeScreen from './PaymentPromoCodeScreen'
import PaymentPricesScreen from './PaymentPricesScreen'
import PaymentMapsScreen from './PaymentMapsScreen'
import { useContext, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { GetCartInfoIdAction } from '../../redux/Action/CartItemAction'
import { useDispatch } from 'react-redux'
import { FilterCartDetials } from '../../Components/Update/UseContext/FilterRestarangeProduct'
import LoadingErrorHandle from '../../Components/Update/LoadingErrorHandle/LoadingErrorHandle'
export default function CheckOutPaymentScreen(props) {




    // location checkout.... 
    const ChangeParams = props?.match?.params.id.replace("-", " ")

    // this is products add items 
    const { setLocationNotNu } = useContext(FilterCartDetials)

    const dispatch = useDispatch()


    // cart info restrange... 
    const cartInfoid = useSelector((state) => state?.cartInfoid)
    const { loading, error, cartinfo } = cartInfoid


    // useriNFO 
    const checkUseriNFO = useSelector((state) => state?.userLogin?.userInfo?.firstname)






    // get restrange information for payment....
    useEffect(() => {

        if (!checkUseriNFO) {

            props?.history.goBack()


        } else if (ChangeParams) {

            return dispatch(GetCartInfoIdAction(ChangeParams))
            // return setLocationNotNu(location?.state)
        }


        // eslint-disable-next-line
    }, [ChangeParams, checkUseriNFO])


    // this is cart items 
    useEffect(() => {
        if (cartinfo?._id) {

            return setLocationNotNu(cartinfo?._id)
        }

        return () => {
            setLocationNotNu('')
        }

    }, [cartinfo?._id, setLocationNotNu])





    return <Container fluid>
        <Title TextTitle='Checkout' />
        <LoadingErrorHandle loading={loading} error={error} home={cartinfo} >


            <Row className='justify-content-center'>
                <PaymentMapsScreen cartinfo={cartinfo?.username} />

                <Row className='row-box'>

                    <Col xs={12} sm={12} md={10} lg={5} className='removePaddingmarggin'>



                        <Col xs={12} ms={12} md={12} lg={12} >

                            <h1 className='Delivery-method-and-time'>
                                Delivery method and time
                            </h1>
                            <PaymentAddresDriverScreen />
                        </Col>





                        <PaymentCartIemsScreen
                            cartinfo={cartinfo}
                            loading={loading}
                        />

                        <PaymentCreditScreen />
                        <PaymentCourierScreen />
                        <PaymentPromoCodeScreen />

                    </Col>

                    <PaymentPricesScreen  
                     cartinfo={cartinfo}
                    />
                </Row>





            </Row>

        </LoadingErrorHandle>


    </Container>

}


