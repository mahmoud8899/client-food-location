import * as ActionTypes from '../../redux/Action/Types'
import { Action_logout } from '../../redux/Action/Auth_Action'

export const CloseScreen = (dispatch) => {
    // const dispatch = useDispatch()
    return dispatch({
        type: ActionTypes.ADD_USER_FAIL,
        payload: null
    })

}



export const CloseUserCheck = (dispatch) => {

    return dispatch({
        type: ActionTypes.ADD_USER_CHECKIN,
        payload: null
    })

}


export const CloseRating = (dispatch) => {

    return dispatch({
        type: ActionTypes.ADD_CARTINFO_ID_FAIL,
        payload: null
    })

}


// logo ut....
export const LogoUtUser = (dispatch) => {

    return dispatch(Action_logout())

}


// remove Updated category
export const TheRemoveUpdated = (dispatch) => {

    dispatch({
        type: ActionTypes.ADD_CATEGORY_UPDATED_SUCCESS,
        payload: null
    })
    dispatch({
        type: ActionTypes.ADD_CATEGORY_CREATE_SUCCESS,
        payload: null
    })
    dispatch({
        type: ActionTypes.ADD_CATEGORY_DELETE_FAIL,
        payload: null
    })



}

// remove Updated Product
export const TheProductRemoveAndUpdated = (dispatch) => {

    dispatch({
        type: ActionTypes.ADD_PRODUCT_UPDATED_SUCCESS,
        payload: null
    })
    dispatch({
        type: ActionTypes.ADD_PRODUCT_CREATE_SUCCESS,
        payload: null
    })
    dispatch({
        type: ActionTypes.ADD_PRODUCT_UPDATED_FAIL,
        payload: null
    })


}



// cart info updated and error 
export const TheCartInfo = (dispatch) => {

    dispatch({
        type: ActionTypes.ADD_UPDATED_CARTINFO_SUCCESS,
        payload: null
    })
    dispatch({
        type: ActionTypes.ADD_UPDATED_CARTINFO_FAIL,
        payload: null
    })



}






// cleraing products and next number...
export const TheClearing = (dispatch) => {



    dispatch({
        type: ActionTypes.ADD_CALING_SATA,
        payload: []
    })
    // dispatch({
    //     type: ActionTypes.ADD_NUMBERNEXTPAGE_SUCCESS,
    //     payload: Number(1)
    // })

}