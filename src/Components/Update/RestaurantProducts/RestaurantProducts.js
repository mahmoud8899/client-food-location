import { Row, Col } from 'react-bootstrap'
import ImageScreen from '../../ImageScreen/ImageScreen'
import { Fragment } from 'react'
import {SliceName} from '../../../Assistant/Slice'
import { FiHeart } from "react-icons/fi";
export default function RestaurantProducts(props) {

    const {
        matProducts,
        HandleOpenProductid,
        setSearching,
        searching,
        category
    } = props







    // [1] : all products
    // [2] : see all searching from user

    return <Fragment>
        <Row className='justify-content-center' >

            <Col xs={12} sm={12} md={8} lg={8} >
                {searching ?
                    <div className='searching-text-style-box' >
                        <h1 className='searching-text-style'> {searching}</h1>
                        <span onClick={(e) => setSearching(e.target.value = '')} >see all</span>
                    </div>
                    : null}

            </Col>
        </Row>



        {category?.map((xs, postIndex) => (
            <div key={postIndex}>
                <Row className='justify-content-center' >

                    <Col xs={12} sm={12} md={8} lg={8} >
                        <h1 className='name-res style-font'>{xs?.name}</h1>
                    </Col>
                </Row>


                {matProducts?.length > 0 ? matProducts?.map((post, postIndex) => (
                    <Row className='justify-content-center' key={postIndex}>
                        {xs?.name === post?.category?.name &&

                            <Col xs={12} sm={12} md={8} lg={8} >

                                <div className='item_products' onClick={(e) => HandleOpenProductid(e, post?._id)}>

                                    <div className='item_products-name'>
                                        <span className='font-product'>{post?.name}</span>
                                        <div className='line-heigt'>
                                            <span className='class-font-size' > { SliceName(post?.description, 40)  }</span>
                                        </div>
                                        <div className='popular'>
                                            <span className='prics-item'>{post?.prices} kr</span>


                                            {post?.popular &&
                                                <div className='box-popular'>
                                                    <FiHeart  className='herat-images' />
                                                    {/* <ImageScreen ImageIcon={MyOderImage.heart}  /> */}
                                                    <span className='text-popular'>popular</span>
                                                </div>




                                            }

                                        </div>

                                    </div>

                                    <ImageScreen
                                        ImageIcon={post?.image}
                                        className='items-products'

                                    />

                                </div>

                            </Col>
                        }
                    </Row>
                )) : null}

            </div>

        ))}




    </Fragment>

}