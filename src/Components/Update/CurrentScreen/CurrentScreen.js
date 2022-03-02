import { MyOderImage } from '../../../Assistant/MyOrderImage'
import ImageScreen from '../../ImageScreen/ImageScreen'
import Styles from '../StylesComponents/style'
import { useContext, useEffect, useState } from 'react'
import { CollectNumber } from '../../../Assistant/CollectNumber'
import { AddCart_Action, RemoveCart_Action } from '../../../redux/Action/Cart_Action'
import { useDispatch } from 'react-redux'
import { FilterCartDetials } from '../UseContext/FilterRestarangeProduct'
export default function CurrentScreen(props) {
    const {
        productId,
        YourOrderClass,
        setOpenCartProduct,
        ScreenAdd,
        CheckOutReload
    } = props




    const { mapsFil } = useContext(FilterCartDetials)
    const dispatch = useDispatch()

    const [courrent, setCourrent] = useState(
        ScreenAdd ?
            mapsFil?.courrent ? mapsFil?.courrent : 1 :
            productId?.courrent ? productId?.courrent : 1)
    const [openArray, setOpenArray] = useState(false)









    useEffect(() => {



        if (courrent && openArray) {

            dispatch(AddCart_Action(CartProduct))

            return setOpenArray(false)

        } else {
            return
        }
        // eslint-disable-next-line
    }, [courrent, openArray])








    // this is object 
    const CartProduct = {
        _id: productId?._id,
        name: productId?.name,
        prices: productId?.prices,
        image: productId?.image,
        cartinfo: productId?.cartinfo,
        description: productId?.description,
        courrent
    }



    // this is add to cart 
    const AddProductCart = (e) => {

        e.preventDefault()
        if (CartProduct) {
            //  console.log(productId)
            dispatch(AddCart_Action(CartProduct))
            setOpenCartProduct({ value: false, id: '' })

            return

        }

    }



    // add plus more 
    const CourrentPlus = () => {

        if (YourOrderClass && courrent) {

            setCourrent(prev => prev + 1)


            return setOpenArray(true)


        }

        return setCourrent(prev => prev + 1)
    }



    // add minuse,,,,,
    const CurrentMinus = () => {




        if (YourOrderClass) {
            setCourrent(prev => prev - 1)
            // console.log(CartProduct)
            return setOpenArray(true)
        }
        return setCourrent(prev => prev - 1)
    }


    const Testingup = (e) => {
        e.preventDefault()


        if (CheckOutReload) {
            // testing... console.log('hello')
            if (courrent === Number(0)) return
            return setCourrent(prev => prev - 1)

        }



        if (courrent === Number(1)) {
            return dispatch(RemoveCart_Action(productId?._id))
        }


    }



    const TheRemove = (e) => {
        e.preventDefault()
        dispatch(RemoveCart_Action(productId?._id))
        return setOpenCartProduct({ value: false, id: '' })

    }






    return <>


        <div style={Styles.backgroundAll} className={YourOrderClass ? 'remove-your-order-create add-transtion' : 'curent-box'}>
            <div style={CheckOutReload ? courrent === 0 ? Styles.backgroundSizenot : Styles.backgroundSize
                :
                courrent === 1 ? Styles.backgroundSizenot : Styles.backgroundSize

            } className='add-more-plus'>
                <ImageScreen
                    ImageIcon={MyOderImage.minus}
                    className='IMAGE-CURRENT'
                    onClick={(e) => courrent <= 1 ? Testingup(e) : CurrentMinus()}
                />
            </div>
            <div className='add-more-center'>
                {courrent}
            </div>
            <div style={Styles.backgroundSize} className='add-more-plus add-rigth-add' onClick={CourrentPlus}>
                <ImageScreen ImageIcon={MyOderImage.plus} className='IMAGE-CURRENT' />
            </div>
            {YourOrderClass && <div className='add-more-plus addleft-right' onClick={(e) => dispatch(RemoveCart_Action(productId?._id))} >
                <ImageScreen ImageIcon={MyOderImage.remove} className='image-remove-yourorder' />
            </div>
            }


        </div>


        {YourOrderClass ? null :
            <div style={courrent === 0 ? Styles.backgroundAllnotcolor : Styles.backgroundAll} className='AddCart-box-add'
                onClick={(e) => courrent === 0 ? TheRemove(e) : AddProductCart(e)}

            >
                {courrent === 0 ?
                    <span>
                        remove from order
                    </span>
                    :
                    <>
                        <span className='color-family add-diffren'> add to order</span>
                        <span className='color-family add-diffren'>kr
                            {CollectNumber(courrent, productId?.prices)}
                        </span>
                    </>
                }

            </div>
        }


    </>
}