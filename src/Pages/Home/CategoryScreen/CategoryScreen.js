import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { SettingsSlider } from '../../../Assistant/SettingsSlider'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import '../Home.css'

export default function CategoryScreen(props) {


    // params [data] : category  // class name title
    const { category, Title } = props

    const location = useLocation()

    // some city navigation...
    const FilterLocation = location?.pathname



    useEffect(() => {

    }, [FilterLocation])



    return <Row className='justify-content-center Margin-top-home'>
        <Col xs={12} sm={12} md={12} lg={12}>
            <div className='Handplockat-class'>

                <h1>
                    {Title}
                </h1>
                <Slider {...SettingsSlider}>

                    {category?.map((ho, Index) => (


                        <Link key={Index} className='box-Slider-Show-home'
                            to={{ pathname: `${FilterLocation}${ho?.foodType}/` }}
                        >
                            <div className='box-Slider-Show-home-children add-cateory'>
                                <div className='list-image add-cateory'  >
                                    <ImageScreen ImageIcon={ho?.image}
                                        className='image-res add-category'
                                    />

                                </div>

                                <div className='category-name'>

                                    <span className='cateory-name-list'>
                                        {ho?.foodType}
                                    </span>

                                </div>


                            </div>


                        </Link>

                    ))}
                </Slider>
            </div>

        </Col>

    </Row>
}