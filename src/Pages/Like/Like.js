import { Container, Row, Col } from 'react-bootstrap'
import Title from '../../Components/ScreenTitle/ScreenTitle'
import { useSelector } from 'react-redux'
import { MyOderImage } from '../../Assistant/MyOrderImage'
import Rating from '../../Components/Rating/Rating'
import '../Home/Home.css'
import NavBarCity from '../NavBarCity/NavBarCity'
import ImageScreen from '../../Components/ImageScreen/ImageScreen'
import { Link } from 'react-router-dom'
import { Conversion } from '../../Components/Update/Conversion/Conversion'
const ScreenLike = (props) => {


    const { Hidding } = props




    // like cart...
    const like = useSelector((state) => state?.like)
    const { likeCart } = like









    return <Container fluid>


        {Hidding ? null : <>

            <div className='margin-top-like'>
                <NavBarCity ClassNameLike />
            </div>
        </>
        }



        <Title TextTitle='Cart like' />
        <Row className='justify-content-center'>
            <Col xs={12} sm={12} md={12} lg={Hidding ? 12 : 11}>


                <Row className="margin-top-cart">


                    {likeCart?.map((slider, sliderIndex) => (
                        <Col xs={12} sm={6} md={4} lg={4} key={sliderIndex} >

                            <div className='Favourites-items margin-top-'
                                onClick={() => console.log('click')}
                            >

                                <Link to={{ pathname: Conversion(slider) }}>
                                    <ImageScreen
                                        ImageIcon={slider?.image}
                                        className='Favourites-items-category'
                                    />
                                </Link>

                                <div className='box-name'>
                                    <span className='font-name-size'>{slider?.username}</span>
                                    <span className='font-name-size-line'>{slider?.addressinfo?.city}</span>
                                </div>

                                <div className='box-name aad-top-style'>

                                    <div>  <Rating value={slider?.numReviews} /></div>
                                    <div className='class-driver'>
                                        <ImageScreen
                                            ImageIcon={MyOderImage.delivery}
                                            className='driver-class'

                                        />
                                        <span className='driver-class-name'>Driver</span>
                                    </div>



                                </div>

                            </div>



                        </Col>
                    ))}





                </Row>

            </Col>

        </Row>


    </Container>

}


export default ScreenLike
