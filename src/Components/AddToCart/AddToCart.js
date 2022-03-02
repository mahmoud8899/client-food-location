import React, { useEffect, useState } from 'react'
import { MyOderImage } from '../../Assistant/MyOrderImage'
import Styles from './style'
import './add.css'
import { useDispatch, useSelector } from 'react-redux'
import { AddCart_Action } from '../../redux/Action/Cart_Action'
import Componentquantity from '../quantity/quantity'
import { Image } from 'react-bootstrap'
const AddToCart = (props) => {


    const { id } = props


    const dispatch = useDispatch()
    const [result, setResult] = useState('')



    // cart Items.
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart


    // console.log('cartItems', result.product)


    useEffect(() => {

        if (id && cartItems?.length >= 0) {
            setResult(cartItems.find((xops) => xops.product === id))

            return


        }


    }, [cartItems, id, setResult])



    // add to cart..
    const HandleAddToCart = (e) => {
         e.preventDefault()

        const qty = Number(1)

    //    return  console.log('from   Buttom.....',id, qty)
       return  dispatch(AddCart_Action(id, qty))

    }




    // console.log('result.qty',result?.qty)


    return <>

        {result ?
            <Componentquantity
                curunt={result?.qty}
                productId={result}

            />
            :

            <div style={Styles.container}
               
                onClick={(e) => HandleAddToCart(e)}>
                <Image
                    src={MyOderImage.basket2}
                    style={Styles.basket}
                    alt='Image Add'
                />

            </div>
        }

    </>
}



export default AddToCart