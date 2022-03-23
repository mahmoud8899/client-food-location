import { Row, Col } from 'react-bootstrap'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import Styles from '../../../Components/Update/StylesComponents/style'
import { Link } from 'react-router-dom'
import Rating from '../../../Components/Rating/Rating'
import { Conversion } from '../../../Components/Update/Conversion/Conversion'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import { SettingsSlider } from '../../../Assistant/SettingsSlider'
import { TheTimeOppenProduct } from '../../../Assistant/TheTimeOppenProduct'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../Home.css'

export default function RestrangeItems(props) {


    // params [1] : data [2] : name data [3] : new restrange or butiker
    const { home, Title, newRest } = props

    return <Row className='Margin-top-home'>
        <Col xs={12} sm={12} md={12} lg={12}>
            <div className='Handplockat-class'>

                <h1>{Title}</h1>

             <Slider {...SettingsSlider}>

                    {home?.map((ho, Index) => (


                        <div key={Index} className='box-Slider-Show-home'>
                            <div className='box-Slider-Show-home-children'>
                                <div className='list-image'>
                                    <Link to={{ pathname: Conversion(ho) }}>
                                        {ho?.image ? <ImageScreen ImageIcon={ho?.image}
                                            className='image-res'
                                        /> : <ImageScreen ImageIcon={MyOderImage.clock}
                                            className='image-res'
                                        />}
                                    </Link>


                                    {newRest && <div className='new-restrange'>
                                        new
                                    </div>
                                    }

                                    {TheTimeOppenProduct(ho?.opentime)?.toString() === 'true' ?

                                        <></>
                                        :
                                        <Link className='list-image-close' to={{ pathname: Conversion(ho) }} >
                                            stängd
                                        </Link>

                                    }


                                </div>



                                <div className='medi-size'>


                                    <div className='title'>
                                        <div className='map'>
                                            <span className='Font-goo' >{ho?.username}</span>
                                            <span className='font-size'>{ho?.addressinfo?.city}</span>

                                        </div>



                                    </div>


                                    <div className='title-bottom' style={Styles.buttom}>



                                        <ImageScreen
                                            ImageIcon={MyOderImage.delivery}
                                            className='driver-image'
                                        />

                                        <div className='title-bottom-price'>
                                            SEK0.00
                                        </div>
                                        <div className='title-bottom-price dispay'>
                                            <Rating value={ho?.rating} text={ho?.numReviews} />
                                        </div>

                                        <div className='driver'>
                                            <div >{ho?.finishfood?.to}-{ho?.finishfood?.to}</div>
                                            <div className='class-last'> min</div>
                                        </div>

                                    </div>

                                </div>






                            </div>


                        </div>

                    ))}
                    
                </Slider>

            </div>

        </Col>

    </Row>
}




