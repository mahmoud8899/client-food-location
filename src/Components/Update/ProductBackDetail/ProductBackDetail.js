import { MyOderImage } from '../../../Assistant/MyOrderImage'
import ImageScreen from '../../ImageScreen/ImageScreen'




export default function ProductBackDetail(props) {
const {
    productId,
    setProductInfo,
    productInfo,
    setOpenCartProduct
} = props


    return   <div className='animationclass'>

    <div className='cart-text-box-row add-margin-top-CART'>
        <div className='image-size' onClick={(e) => setProductInfo(!productInfo)}>
            <ImageScreen
                ImageIcon={MyOderImage.left}

                className='CloseClass'

            />
        </div>


        <h2 className='color-family-CART'> product info</h2>


        <div className='image-size left-as' onClick={(e) => setOpenCartProduct({ value: false })}>
            <ImageScreen
                ImageIcon={MyOderImage.close}
                className='CloseClass'

            />
        </div>


    </div>


    <div className='cart-text-box extra class-padding-style-CART'>
        <span className='cart-text-box-text color-family-CART extra'>{productId?.name}</span>

        <p className='cart-text-box-desc  color-last-items-CART extra'>
            {productId?.description}
        </p>






    </div>

</div>

    
}