import * as ActionTypes from './Types'
import axios from 'axios'
import { Action_logout } from './Auth_Action'







// cart Info 
// GET /URL : /api/cartinfo/info/user/
export const CartInfoActionResturan = () => async (dispatch, getState) => {
    try {
        const { userLogin: { token } } = getState()
        dispatch({ type: ActionTypes.ADD_CARTINFO_RESTURANG_LOADING })

        const { data } = await axios.get(`/api/cartinfo/info/user/`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatch({ type: ActionTypes.ADD_CARTINFO_RESTURANG_SUCCESS, payload: data })
    } catch (error) {
        const message = error.response &&
            error.response.data.message ?
            error.response.data.message :
            error.message
        if (message === 'token failed') {

            return dispatch(Action_logout())
        }
        dispatch({
            type: ActionTypes.ADD_CARTINFO_RESTURANG_FAIL,
            payload: message
        })



    }
}



// export const AppenProductId = (productid) => ({

//     type: ActionTypes.ADD_CARTINFO_ID_SAVE,
//     payload: { productid }
// })


// get cart info
// GET / URL :/api/cartinfo/view/id
export const GetCartInfoIdAction = (ChangeParams) => async (dispatch) => {
    try {

        dispatch({ type: ActionTypes.ADD_CARTINFO_ID_LOADIN })


        const { data } = await axios.get(`/api/cartinfo/view/${ChangeParams}`)
        // dispatch(AppenProductId(data?._id))
        dispatch({ type: ActionTypes.ADD_CARTINFO_ID_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: ActionTypes.ADD_CARTINFO_ID_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}


// GET ALL Cart info to restaranges... 
// Url : /api/cartinfo/views/ option twe params [1] : city [2] : restaranges
export const GetCartInfoHomeRestranges = (user) => async (dispatch) => {


    try {

        dispatch({ type: ActionTypes.ADD_CART_INFO_LOADING_RESTAURANT })
        const { data } = await axios.get(`/api/cartinfo/views/${user?.city}/${user?.productType}/`,)
        dispatch({ type: ActionTypes.ADD_CART_INFO_SUCCESS_RESTAURANT, payload: data })


    } catch (error) {
        dispatch({
            type: ActionTypes.ADD_CART_INFO_FAIL_RESTAURANT,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}

// GET ALL Cart info to butiker... 
// Url : /api/cartinfo/views/ option twe params [1] : city [2] : butiker
export const FatchButik = (user) => async (dispatch) => {
    try {

        dispatch({ type: ActionTypes.ADD_CART_INFO_LOADING_BUTIK })
        const { data } = await axios.get(`/api/cartinfo/views/${user?.city}/${user?.productType}/`,)
        dispatch({ type: ActionTypes.ADD_CART_INFO_SUCCESS_BUTIK, payload: data })

    } catch (error) {
        dispatch({
            type: ActionTypes.ADD_CART_INFO_FAIL_BUTIK,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }


}




// comment.....
// POST  // URL :    /api/cartingo/comment/user/id
export const CartInfoIdRatingAction = (user) => async (dispatch, getState) => {
    try {

        const { userLogin: { token } } = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const { data } = await axios.post(`/api/cartingo/comment/user/${user?._id}/`, user, config)
        console.log('data', data)

        dispatch(GetCartInfoIdAction(user._id))
    } catch (error) {

        const message = error.response &&
            error.response.data.message ?
            error.response.data.message :
            error.message
        if (message === 'token failed') {

            return dispatch(Action_logout())
        }
        dispatch({
            type: ActionTypes.ADD_CARTINFO_ID_FAIL,
            payload: message
        })



    }
}




// get new restrange limit 8
// we have twe params.... [1] : city [2] : producttypes
// GET // URL : // /api/cartinfo/limit/:city/:productType/
export const NewRestrangesAction = (user) => async (dispatch) => {
    try {
        dispatch({ type: ActionTypes.ADD_NEW_RESTRANGE_LOADING })

        const { data } = await axios.get(`/api/cartinfo/limit/${user?.city}/${user?.productType}/`)
        dispatch({ type: ActionTypes.ADD_NEW_RESTRANGE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: ActionTypes.ADD_NEW_RESTRANGE_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}







// category all restranges 
// GET Url : /api/foodtypes/view/food/types/
export const FoodTypesAction = () => async (dispatch) => {
    try {
        dispatch({ type: ActionTypes.ADD_CATAGORY_ALL_LOADING })

        const { data } = await axios.get(`/api/foodtypes/view/food/category/list/`)
        dispatch({ type: ActionTypes.ADD_CATAGORY_ALL_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: ActionTypes.ADD_CATAGORY_ALL_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}




// fir delivery 
// GET // URL : 
export const FirDeliveryAction = () => async (dispatch) => {
    try {
        dispatch({ type: ActionTypes.ADD_NEW_FIRDELIVERY_LOADING })

        const { data } = await axios.get(`/api/cartinfo/freedelvery/`)
        dispatch({ type: ActionTypes.ADD_NEW_FIRDELIVERY_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: ActionTypes.ADD_NEW_FIRDELIVERY_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}




// Updated cart info 
// PUL : // URL : //api/cartinfo/updated/id
export const UpdatedCartInfoAction = (user) => async (dispatch) => {

    try {

        dispatch({ type: ActionTypes.ADD_UPDATED_CARTINFO_LOADING })
        const { data } = await axios.put(`/api/cartinfo/updated/${user?._id}`, user)
        dispatch({ type: ActionTypes.ADD_UPDATED_CARTINFO_SUCCESS, payload: data })
        dispatch(CartInfoActionResturan(user._id))
    } catch (error) {
        dispatch({
            type: ActionTypes.ADD_UPDATED_CARTINFO_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}

// create cart info 
// POST // URL : /api/cartinfo/create/
export const CreateCartAction = (user) => async (dispatch, getState) => {
    try {
        dispatch({ type: ActionTypes.ADD_UPDATED_CARTINFO_LOADING })
        const { userLogin: { token } } = getState()


        await axios.post(`/api/cartinfo/create/`, user, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return dispatch(CartInfoActionResturan())

    } catch (error) {
        const message = error.response &&
            error.response.data.message ?
            error.response.data.message :
            error.message
        if (message === 'token failed') {

            return dispatch(Action_logout())
        }
        dispatch({
            type: ActionTypes.ADD_UPDATED_CARTINFO_FAIL,
            payload: message
        })
    }
}




// create Image uploading
// POST // URL : /api/uploading/
export const UpdatedImageAction = (user, updateInfo, Form) => async (dispatch) => {

    try {
        const { data } = await axios.post(`/api/uploading/`,
            user,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            })
        const userData = {
            _id: updateInfo._id,
            user: updateInfo.user,
            addressinfo: updateInfo.addressinfo,
            description: updateInfo.description,
            finishfood: updateInfo.finishfood,
            freeDelvery: updateInfo.freeDelvery,
            image: data,
            opentime: updateInfo.opentime,
            productType: updateInfo.productType,
            username: updateInfo.username,
            restrangeDriver: updateInfo.restrangeDriver,
        }

        console.log(userData)

        Form ? dispatch(CreateCartAction(userData)) : dispatch(UpdatedCartInfoAction(userData))

    } catch (error) {
        dispatch({
            type: ActionTypes.ADD_UPDATED_CARTINFO_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}






























// loaction Path 
export const LoactionPath = (data) => async (dispatch) => {

    // console.log(data)
}
