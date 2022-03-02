import { Row, Col } from 'react-bootstrap'
import PaymentAddresDriverScreen from '../PaymentScreen/PaymentAddresDriverScreen'
import Styles from '../../Components/Update/StylesComponents/style'
import { TotalPrice, CollectOrder } from '../../Assistant/TotalPrice'
import ImageScreen from '../../Components/ImageScreen/ImageScreen'
import { MyOderImage } from '../../Assistant/MyOrderImage'
import { FilterCartDetials } from '../../Components/Update/UseContext/FilterRestarangeProduct'
import { useContext } from 'react'
import SetTimeout from '../../Components/Update/SetTimeout/SetTimeout'
export default function RestaurantsNavBarCart(props) {

    const {
        hiddenNavBar,
        yourOrder,
        setYourOrder,
        openDescription,
        setOpenDescription,
        cartinfo
    } = props



    const { filterCartProduct } = useContext(FilterCartDetials)











    return <Row className={!hiddenNavBar ? 'justify-content-center color-row-testing dispalaynone' : 'justify-content-center color-row-testing removeMargin-top dispalaynone'}  >
        <Col xs={4} sm={4} md={4} lg={4}>

            <PaymentAddresDriverScreen ClassNameNavBarCart />

        </Col>

        <Col xs={4} sm={4} md={4} lg={3}>
            <div className='Open-today-time' onClick={() => setOpenDescription(!openDescription)}>
                <span className='font-size-navbar'>Open today :</span>
                <span className='font-size-navbar extra-font-time'>
                    {cartinfo?.opentime?.oppen}-{cartinfo?.opentime?.close}
                </span>
                <ImageScreen ImageIcon={MyOderImage.right} className='opentody-image' />

                <SetTimeout
                    cartinfo={cartinfo}
                />

            </div>
        </Col>


        <Col xs={4} sm={4} md={4} lg={4}>
            {filterCartProduct?.length === 0 ? null :
                <div
                    style={Styles.backgroundAll}
                    className='Open-today addColor-navbar'
                    onClick={() => filterCartProduct?.length === 0 ? null : setYourOrder(!yourOrder)}
                >


                    <div style={Styles.backgroundSize} className='view-order-number'>

                        <span>{CollectOrder(filterCartProduct)}</span>
                    </div>


                    <div className='view-order-number-text'>
                        view order
                    </div>


                    <div className='view-order-number-price'>
                        kr {TotalPrice(filterCartProduct)}
                    </div>






                </div>
            }
        </Col>
    </Row>

}


