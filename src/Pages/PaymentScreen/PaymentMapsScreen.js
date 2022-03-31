import { Fragment } from 'react'
import { Col } from 'react-bootstrap'
import LocationUser from '../Home/LocationUser/LocationUser'
import './PaymentScreen.css'


export default function PaymentMapsScreen(props) {




    return <Fragment>
        <Col xs={12} sm={12} md={12} lg={12} className='removePaddingmarggin'>


            <div className='Cover-image' >
                <LocationUser />
            </div>


        </Col>

        <Col xs={12} sm={12} md={12} lg={12} className='removePaddingmarggin'>
            <div className='update-imageover'>
                <h1 className='add_color_maps'>
                    Checkout
                </h1>
                <h1 className='add_color_maps'>
                    {props?.cartinfo}
                </h1>
            </div>
        </Col>

    </Fragment>
}

