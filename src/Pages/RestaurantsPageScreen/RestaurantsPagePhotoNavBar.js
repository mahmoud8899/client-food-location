import { Row, Col } from 'react-bootstrap'
import './style.css'
import { TheDoday } from '../../Assistant/Selection'
import {SliceNameNot} from '../../Assistant/Slice'
export default function RestaurantsPagePhotoNavBar(props) {


    const {cartinfo,category} = props





    return <Col xs={12} md={12} lg={12} className='removePaddingmarggin'>

        <div className='navbar-slider'>



            <Row className='justify-content-center'>
                <Col xs={11} sm={11} md={11} lg={11}>
                    <div className='class-bottom-name'>
                        <h1 className='name-res'>
                            {cartinfo ? cartinfo?.username : null}
                        </h1>
                        
                     
                            <div className='margin-top-navbar'>
                                {category?.map((us, Index) => (
                                    <span
                                        className='font-size-navbar'
                                        key={Index}
                                    >
                                        {us?.name},
                                    </span>
                                ))}

                            </div>

                        

                        <div className='Open-time-tody'>
                            <span>{TheDoday()} open {SliceNameNot(cartinfo?.opentime?.oppen, 5)  }</span>
                        </div>
                    </div>
                </Col>
            </Row>



        </div>
    </Col>
}