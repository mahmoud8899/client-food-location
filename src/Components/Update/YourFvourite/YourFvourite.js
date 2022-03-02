import { useSelector } from 'react-redux'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import ImageScreen from '../../ImageScreen/ImageScreen'
import LoadingScreen from '../../LoadingScreen/LoadingScreen'
import {useDispatch} from 'react-redux'
import { AddLikeCartAction, removeLikeAction } from '../../../redux/Action/Like_Action'
import { useEffect, useState } from 'react'




export  default function YourFvourite(){

    const dispatch = useDispatch()

    // cart info id....
    const cartInfoid = useSelector((state) => state?.cartInfoid)
    const { loading, cartinfo } = cartInfoid

     /// like restarge...
    const like = useSelector((state) => state?.like)
    const { likeCart } = like


    const [likeProduct, setLikeProduct] = useState('')

  

    useEffect(() => {

        if (cartinfo && likeCart) {
            setLikeProduct(likeCart?.find((result) => result?._id === cartinfo?._id))
        }

    }, [likeCart, cartinfo,likeProduct])

   








    const AddFavourit = (e) =>{
        e.preventDefault()

        if(likeProduct){
            
            return dispatch(removeLikeAction(cartinfo?._id))
        }

        if(cartinfo !== null){

            return  dispatch(AddLikeCartAction(cartinfo))
        }


         
    }

    return loading  ? <LoadingScreen  /> :  
     <div className='favourite' onClick={(e)=>AddFavourit(e)}>
    <ImageScreen ImageIcon={likeProduct ?   MyOderImage.heartFull : MyOderImage.heart} className='image-favourite' />
    <span className='text-favourit asdextrax'>Favourit</span>
</div>
}