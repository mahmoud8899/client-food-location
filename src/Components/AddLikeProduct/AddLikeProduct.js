import React, { Fragment, useEffect, useState } from 'react'
import Styles from './style'
import { useDispatch, useSelector } from 'react-redux'
import { AddLikeCartAction } from '../../redux/Action/Like_Action'



const AddLikeProduct = (props) => {


    const { post } = props

    // const [qty, SetQty] = useState(1)
    const dispatch = useDispatch()




    // product Like 
    const like = useSelector((state) => state.like)
    const { likeCart } = like

    const [likeProduct, setLikeProduct] = useState(null)



    useEffect(() => {

        if (post && likeCart) {
            setLikeProduct(likeCart?.find((result) => result.product === post))
        }



    }, [likeCart, post])





    // add Like Product....
    const Handlelile = (e, id) => {

        e.preventDefault()


        const qty = Number(1)

        return dispatch(AddLikeCartAction(id, qty))

    }





    return <Fragment>


        <i
            style={Styles.icon}
            className={likeProduct ? "fas fa-heart" : "far fa-heart"}
            onClick={(e)=>Handlelile(e,post)}
        ></i>


    </Fragment>

}



export default AddLikeProduct