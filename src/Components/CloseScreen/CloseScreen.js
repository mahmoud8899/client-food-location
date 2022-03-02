import * as ActionTypes from '../../redux/Action/Types'
import {Action_logout} from '../../redux/Action/Auth_Action'

export const CloseScreen = (dispatch) => {
    // const dispatch = useDispatch()
    return dispatch({
        type: ActionTypes.ADD_USER_FAIL,
        payload: null
    })

}



export const CloseUserCheck = (dispatch)=>{

    return dispatch({
        type: ActionTypes.ADD_USER_CHECKIN,
        payload: null
    })

}


export const CloseRating = (dispatch)=>{

    return dispatch({
        type: ActionTypes.ADD_CARTINFO_ID_FAIL,
        payload: null
    })

}


// logo ut....
export const LogoUtUser = (dispatch)=>{

    return dispatch(Action_logout())

}




// // // save localstory..
// export const HandleSaveCheckout = (name,dispatch,history) =>{

//     dispatch(TheSaveCheckOutLocal(name))

//     return history.push(`/en/checkout/payment/`)
// }