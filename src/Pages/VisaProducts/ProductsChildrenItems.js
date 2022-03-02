import ImageScreen from '../../Components/ImageScreen/ImageScreen'
import Rating from '../../Components/Rating/Rating'
import { Col } from 'react-bootstrap'
import './VisaProducts.css'
import Styles from '../../Components/Update/StylesComponents/style'
import { MyOderImage } from '../../Assistant/MyOrderImage'
import { Link } from 'react-router-dom'
import { Conversion } from '../../Components/Update/Conversion/Conversion'
import { TheTimeOppenProduct } from '../../Assistant/TheTimeOppenProduct'
export default function ProductsChildrenItems(props) {

    const { item, Index } = props

    return <Col xs={6} sm={4} md={4} lg={4} key={Index}>

        <div className='box-Slider-Show-home notPadding' >
            <div className='box-Slider-Show-home-children'>
                <div className='list-image'>
                    <Link to={{ pathname: Conversion(item) }} >
                        <ImageScreen
                            ImageIcon={item?.image}
                            className='image-res'
                        />
                    </Link>

                    {TheTimeOppenProduct(item?.opentime)?.toString() === 'true' ?

                        <></>
                        :
                        <Link className='list-image-close' to={{ pathname: Conversion(item) }} >
                            stängd
                        </Link>

                    }


                </div>



                <div className='medi-size'>


                    <div className='title'>
                        <div className='map'>
                            <span>{item?.username}</span>
                            <span className='font-size'>{item?.addressinfo?.city}</span>

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
                            <Rating value={item?.rating} text={item?.numReviews} />
                        </div>

                        <div className='driver'>
                            <div>{item?.finishfood?.to}-{item?.finishfood?.end}</div>
                            <div className='class-last'> min</div>
                        </div>

                    </div>

                </div>


            </div>


        </div>





    </Col>

}