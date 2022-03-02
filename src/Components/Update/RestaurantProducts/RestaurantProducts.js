import { useContext } from 'react'
import { Row, Col } from 'react-bootstrap'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import ImageScreen from '../../ImageScreen/ImageScreen'
import { SearchingContext } from '../../Update/UseContext/SearchingResult'



export default function RestaurantProducts(props) {

    const {
        matProducts,
        HandleOpenProductid
    } = props


    const { searching, setSearching } = useContext(SearchingContext)





    return <>

        {searching ?
            <div className='searching-text-style-box' >
                <h1 className='searching-text-style'> {searching}</h1>
                <span onClick={(e) => setSearching(e.target.value = '')} >see all</span>
            </div>
            : null}




        {matProducts?.length > 0 ? matProducts?.map((post, postIndex) => (


            <Row className='justify-content-center' key={postIndex}>

                <Col xs={12} sm={12} md={8} lg={8} >

                    <div className='item_products' onClick={(e) => HandleOpenProductid(e, post?._id)}>

                        <div className='item_products-name'>
                            <span className='font-product'>{post?.name}</span>
                            <div className='line-heigt'>
                                <span className='class-font-size' > {post?.description}</span>
                            </div>
                            <div className='popular'>
                                <span className='prics-item'>{post?.prices} kr</span>


                                {post?.popular &&
                                    <div className='box-popular'>
                                        <ImageScreen ImageIcon={MyOderImage.heart} className='herat-images' />
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
            </Row>

        )) : null}

    </>

}