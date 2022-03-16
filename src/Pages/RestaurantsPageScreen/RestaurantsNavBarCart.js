import { Row, Col } from 'react-bootstrap'
import PaymentAddresDriverScreen from '../PaymentScreen/PaymentAddresDriverScreen'
import Styles from '../../Components/Update/StylesComponents/style'
import { TotalPrice, CollectOrder } from '../../Assistant/TotalPrice'
import { FilterCartDetials } from '../../Components/Update/UseContext/FilterRestarangeProduct'
import { useContext } from 'react'
import SetTimeout from '../../Components/Update/SetTimeout/SetTimeout'
import {FiChevronRight } from 'react-icons/fi'
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










    // options here 
    // [1]  selection selection takeway and delivery  .. PaymentAddresDriverScreen
    // [2] : Optim time restruant and butiker
    // [3] : set time nofation if restrurant closee.
    // [4] : page order cart and check out 
    // [5] : icons


    return <Row className={!hiddenNavBar ? 'justify-content-center color-row-testing dispalaynone' : 'justify-content-center color-row-testing removeMargin-top dispalaynone'}  >
        <Col xs={4} sm={4} md={4} lg={4}>
            <PaymentAddresDriverScreen ClassNameNavBarCart />
        </Col>

        <Col xs={4} sm={4} md={4} lg={3}>
            <div className='Open-today-time' onClick={() => setOpenDescription(!openDescription)}>
                <span className='font-size-navbar'>Öppet idag : </span>
                <span className='font-size-navbar extra-font-time'>
                    {cartinfo?.opentime?.oppen}-{cartinfo?.opentime?.close}
                </span>
                <FiChevronRight  className='opentody-image' />

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


