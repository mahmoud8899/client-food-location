import { Col, Row, } from 'react-bootstrap'
import { useState } from 'react'
// import { Link } from 'react-router-dom'
import Styles from '../../../Components/Update/StylesComponents/style'
import Carousel from 'react-bootstrap/Carousel'
import Rating from '../../../Components/Rating/Rating'
import ScreenDiscount from '../../../Components/ScreenDiscount/ScreenDiscount'
import { Conversion } from '../../../Components/Update/Conversion/Conversion'
import { Link } from 'react-router-dom'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import '../Home.css'
const CarouselItems = (props) => {



    const { home } = props


    const [dataTesting, setDataTesting] = useState(null)










    const ChangeData = (e, data) => {

        e.preventDefault()
        return setDataTesting(data)
    }





    return home?.length > Number(0) ? <div style={Styles.firstClass} className='exstra-margint'>

        <Row className='justify-content-center'>
            <Col xs={12} sm={12} md={8} lg={8}>
                <Carousel >
                    {home?.map((top, Index) => (
                        <Carousel.Item
                            key={Index}

                            onMouseOver={(e) => ChangeData(e, top)}
                            className='Hovermore'
                        >
                            <Link
                                to={{ pathname: Conversion(top) }}
                                className='add'
                            >
                                <div
                                    className="add_link_all"

                                >
                                    <ImageScreen
                                        className="d-block w-100"
                                        ImageIcon={top?.image}
                                        alt="First slide"
                                        style={Styles.CarouselItems}
                                        fluid
                                    />
                                    <Carousel.Caption>
                                        {top?.discount > 0 &&
                                            <ScreenDiscount dis={top?.discount} />}

                                    </Carousel.Caption>

                                </div>
                            </Link>
                            <Carousel.Caption variant="info">
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>

                        </Carousel.Item>
                    ))}
                </Carousel>


            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className='Home-display'>
                <div className='carousel-box' >
                    <span className='carousel-box-children'>{dataTesting?.name ? dataTesting?.name : null}</span>
                    <span className='carousel-box-children'> {dataTesting?.description ? dataTesting?.description : 'The best food in the world'}</span>
                    <span className='carousel-box-children' >{dataTesting?.prices ? dataTesting?.prices : null}</span>
                    <div className=''>
                        <Rating
                            value={dataTesting?.rating ? dataTesting?.rating : 5}
                            text={`${dataTesting?.numReviews ? dataTesting?.numReviews : 5} reviews`}
                        />
                    </div>

                </div>
            </Col>
        </Row>


    </div> : null




}

export default CarouselItems
