import { Container, Row, Col } from 'react-bootstrap'
import { MyOderImage } from '../../Assistant/MyOrderImage'
import './NavBarCity.css'
import ImageScreen from '../../Components/ImageScreen/ImageScreen'
import { Link } from 'react-router-dom'
import LoactionCity from './LoactionCity'
import { useState } from 'react'


const NavBarCity = (props) => {

    const {
        ClassNameHOMEactive,
        ClassNameCategory,
        ClassNameLike,
    } = props





    const [showCity, setShowCity] = useState(false)


   






    return <Container fluid>
        <Row className='justify-content-center'>

            <Col xs={12} sm={12} md={3} lg={3} className='TestingCol xs'>
                <div className='NavBar-city' onClick={() => setShowCity(true)}>
                    <div className='center-image-city'>
                        <ImageScreen
                            ImageIcon={MyOderImage.testloction}
                            className='NavBar-city-image'

                        />
                    </div>
                    <div className='center-city-city'>
                        <span className='NavBar-city-text' >upppsala</span>
                    </div>

                    <ImageScreen
                        ImageIcon={MyOderImage.down}
                        className='NavBar-city-image-left'

                    />


                </div>

            </Col>
            <Col xs={12} sm={12} md={8} lg={8} className='TestingCol'>
                <div className='NavBar-city add-postion'>



                    <Link className={ClassNameHOMEactive ? 'center-image-city home addx' : 'center-image-city home'}
                       to={{ pathname: '/uppsala/' }}
                    >
                        <ImageScreen
                            ImageIcon={MyOderImage.cityB}
                            className='NavBar-city-image'

                        />
                        <span>Upptäck</span>

                    </Link>

                    <Link 
                    to={{ pathname: '/uppsala/restaurants/' }}
                    className={ClassNameCategory ? 'center-image-city home addx' : 'center-image-city home'}
                    >
                        <ImageScreen
                            ImageIcon={MyOderImage.rest}
                            className='NavBar-city-image' />
                        <span>restaurants</span>
                    </Link>


                    <Link
                        className={ClassNameLike ? 'center-image-city home addx' : 'center-image-city home'}
                        to={{ pathname: '/uppsala/butiker/' }}
                    >


                        <ImageScreen
                            ImageIcon={MyOderImage.heart}
                            className='NavBar-city-image'

                        />
                        <span>Butiker</span>

                    </Link>


                </div>



            </Col>

        </Row>


        <LoactionCity
            showCity={showCity}
            setShowCity={setShowCity}

        />
    </Container>

}


export default NavBarCity

