import { Fragment } from 'react'
import { Col } from 'react-bootstrap'
import MapsLocation from '../Home/MapsLocation/MapsLocation'
import './PaymentScreen.css'


export default function PaymentMapsScreen(props) {
const {cartinfo} = props



// console.log(cartinfo)

    return <Fragment>
        <Col xs={12} sm={12} md={12} lg={12} className='removePaddingmarggin'>


            <div className='Cover-image' >
                <MapsLocation  coordinates={cartinfo?.location?.coordinates} />
            </div>


        </Col>

        <Col xs={12} sm={12} md={12} lg={12} className='removePaddingmarggin'>
            <div className='update-imageover'>
                <h1 className='add_color_maps'>
                    Checkout
                </h1>
                <h1 className='add_color_maps'>
                    {cartinfo?.username}
                </h1>
            </div>
        </Col>

    </Fragment>
}

