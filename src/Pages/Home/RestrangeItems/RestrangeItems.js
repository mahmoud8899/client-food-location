import { Row, Col } from 'react-bootstrap'
import { SettingsSlider } from '../../../Assistant/SettingsSlider'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../Home.css'
import CartItemsScreen from '../../CartItemsScreen/CartItemsScreen'
// import { TheTimeOppenProduct } from '../../../Assistant/TheTimeOppenProduct'
// import { MyOderImage } from '../../../Assistant/MyOrderImage'
// import Styles from '../../../Components/Update/StylesComponents/style'
// import { Link } from 'react-router-dom'
// import Rating from '../../../Components/Rating/Rating'
// import { Conversion } from '../../../Components/Update/Conversion/Conversion'
// import ImageScreen from '../../../Components/ImageScreen/ImageScreen'

export default function RestrangeItems(props) {


    // params [1] : data [2] : name data [3] : new restrange or butiker
    const { home, Title, newRest } = props

    return <Row className='Margin-top-home'>
        <Col xs={12} sm={12} md={12} lg={12}>
            <div className='Handplockat-class'>

                <h1>{Title}</h1>

                <Slider {...SettingsSlider}>

                    {home?.map((item, Index) => (

                        <div className='box-Slider-Show-home' key={Index}>
                            <CartItemsScreen item={item} newRest={newRest} />
                        </div>


                    ))}

                </Slider>

            </div>

        </Col>

    </Row>
}




