import { CollectNumber } from '../../../Assistant/CollectNumber'
import ImageScreen from '../../ImageScreen/ImageScreen'
import CurrentScreen from '../CurrentScreen/CurrentScreen'
import Styles from '../StylesComponents/style'




export default function CartItemsScreen(props) {

    const {

        cartItems,
        HandleMatchId,
        addCurrnt,
        saveId
    } = props






    return <div className='close-yourOrder'>


        {cartItems?.map((cart, Index) => (
            <div className='yourOrder-box' key={Index}>

                {addCurrnt && saveId === cart?._id ?

                    <CurrentScreen
                        YourOrderClass
                        productId={cart}

                    />
                    : null
                    
                }
                <div className='close-yourOrder-number' onClick={(e) => HandleMatchId(e, cart?._id)} >

                    <div style={Styles.Boxshow} className='close-yourOrder-numer-rigth'>
                        {cart?.courrent}
                    </div>
                    <div className='close-yourOrder-numer-text'>
                        <div className='font-famil-color'>{cart?.name}</div>
                        <div className='close-yourOrder-numer-text-culom-d-s'>
                            <span>kr {CollectNumber(cart?.courrent, cart?.prices)}</span>
                         
                            {cart?.popular && <span style={Styles.background} className='popular-popular'>popular</span>}
                            
                        </div>
                    </div>

                    <div className='image-yourorder'>
                        <ImageScreen ImageIcon={cart?.image}
                            className='image-your-Order' />
                    </div>


                </div>

            </div>


        ))}

    </div>

}