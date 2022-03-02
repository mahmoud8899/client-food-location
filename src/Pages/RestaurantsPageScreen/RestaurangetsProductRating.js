import { Modal } from 'react-bootstrap'
import './style.css'
import ButtomClick from '../../Components/Buttom/Buttom'
import Styles from '../../Components/Update/StylesComponents/style'
import ImageScreen from '../../Components/ImageScreen/ImageScreen'
import { MyOderImage } from '../../Assistant/MyOrderImage'
import { TheRating } from '../../Assistant/Selection'
import { useState } from 'react'
import { CartInfoIdRatingAction } from '../../redux/Action/CartItemAction'
import { useDispatch } from 'react-redux'
import CodeError from '../../Components/CodeError/CodeError'
import {CloseRating} from '../../Components/CloseScreen/CloseScreen'
export default function RestaurangetsProductRating(props) {
    const {
        showRating,
        setShowRating,
        cartid,
        error
    } = props

    const dispatch = useDispatch()
    const [rating, setRating] = useState(1)











    const HandleRating = (e) => {
        e.preventDefault()
        const user = {
            _id: cartid,
            rating
        }
        return dispatch(CartInfoIdRatingAction(user))
    }


    return <Modal show={showRating} onHide={() => setShowRating(!showRating)}>





        <div className='small-select-form'>
            <ImageScreen
                ImageIcon={MyOderImage.close}
                className='Login-Close-Image-rigth left-black'
                onClick={() => setShowRating(!showRating)}
            />
            <h1 className='select-h'>products rating</h1>
            {error ? <CodeError
                error={error}
                onClick={()=>CloseRating(dispatch)}
            /> : null}


            <select className='small-select' onChange={(e) => setRating(e.target.value)}>
                {TheRating?.map((x, Index) => (
                    <option value={x} key={Index} >{x}</option>
                ))}

            </select>

            <div className='dev-buttom'>
                <ButtomClick
                    title='select'
                    style={Styles.buttomSelection}
                    onClick={(e) => HandleRating(e)}
                    disabled={rating === 1}
                />
            </div>



        </div>


    </Modal>

}

