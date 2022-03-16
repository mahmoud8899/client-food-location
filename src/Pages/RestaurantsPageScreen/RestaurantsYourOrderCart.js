import { Modal } from 'react-bootstrap'
import { MyOderImage } from '../../Assistant/MyOrderImage'
import { useContext, useState, } from 'react'
import ImageScreen from '../../Components/ImageScreen/ImageScreen'
import DriverComment from '../../Components/Update/DriverComment/DriverComment'
import ButtomClick from '../../Components/Buttom/Buttom'
import CartItemsScreen from '../../Components/Update/Cartitems/Cartitems'
import { FilterCartDetials } from '../../Components/Update/UseContext/FilterRestarangeProduct'
import GoToCheckOut from '../../Components/Update/GoToCheckOut/GoToCheckOut'
import Styles from '../../Components/Update/StylesComponents/style'
import { HiOutlineX ,HiArrowNarrowLeft } from 'react-icons/hi'
import {CgComment} from 'react-icons/cg'
import './style.css'
export default function RestaurantsYourOrderCart(props) {

    const { setYourOrder, yourOrder } = props




    const { filterCartProduct } = useContext(FilterCartDetials)
    const [addCurrnt, setAddCurrnt] = useState(false)
    const [saveId, setSaveId] = useState(null)
    const [openComment, setOpenComment] = useState(false)



    const HandleMatchId = (e, id) => {
        e.preventDefault()

        setSaveId(id)

        return setAddCurrnt(!addCurrnt)
    }







    return <Modal show={yourOrder} onHide={() => setYourOrder(!yourOrder)}>


        <div className='overflow-hidden'>
            <div className='close-yourOrder flex-box-box' >

                {openComment && 
                <HiArrowNarrowLeft  className='close-pp-pp-image' onClick={() => setOpenComment(!openComment)} />
                }
                <HiOutlineX  className={!openComment ? 'close-pp-pp-image add-leftx-' : 'close-pp-pp-image'} onClick={() => setYourOrder(!yourOrder)} />



            </div>

            {openComment ? <>


                <DriverComment setOpenComment={setOpenComment} />


            </> :
                filterCartProduct?.length === 0 ?
                    <div className='empty-cart'>
                        <ImageScreen ImageIcon={MyOderImage.basket2} className='empty-cart-image' />
                        <h1 className='font-h1'>No items in your order</h1>
                        <p>Your order is lonely without items. Let's add some!</p>


                        <ButtomClick title='Add items' style={Styles.colorBox} onClick={() => setYourOrder(!yourOrder)} />

                    </div>

                    :
                    <>

                        <div className='close-yourOrder'>
                            <h1 className='your-h1' >Your order</h1>
                        </div>

                        <div className='scroll-comment'>



                            <CartItemsScreen
                                cartItems={filterCartProduct}
                                HandleMatchId={HandleMatchId}
                                addCurrnt={addCurrnt}
                                saveId={saveId}

                            />



                            <div className='close-yourOrder top-border'>

                                <div className='comment-image-top'>
                                    
                                    <CgComment 
                                        className='comment-image-left'
                                    />
                                </div>

                                <div className='comment-image-top-text'>
                                    <span className='comment-image-top-text-first'>Lägg till kommentar för platsen</span>
                                    <span className='comment-image-top-text-last'>Särskilda önskemål, allergier, kostrestriktioner, etc.</span>
                                </div>


                                <div style={Styles.backgroundAll} className='comment-image-top-edit' onClick={() => setOpenComment(!openComment)}>
                                    <span className='font-size-st'>edit</span>
                                </div>

                            </div>
                        </div>


                        <GoToCheckOut
                            filterCartProduct={filterCartProduct}
                        />


                    </>

            }


        </div>

    </Modal>
}