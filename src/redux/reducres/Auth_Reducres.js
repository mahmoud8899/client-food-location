import * as ActionTypes from '../Action/Types'




// user Login and sing up..............
export const LoginReducres = (state = {
    token: null,
    userInfo: {},
    forgetPassword: {},
    error: null,
    checkeduser: null,
    updatedaccount: null,

}, action) => {

    switch (action.type) {
        case ActionTypes.ADD_USER_LOADING: return { loading: true }
        case ActionTypes.SET_USER: return {
            ...state,
            userInfo: action.payload.user,
            loading: false
        }
        case ActionTypes.SET_TOKEN: return {
            ...state,
            token: action.payload.token,
            loading: false
        }

        case ActionTypes.ADD_FORGET_PASSWORD_SUCCESS: return {
            ...state,
            forgetPassword: action.payload,
            loading: false
        }

        case ActionTypes.ADD_CHANGEPASSWORD_FORGET_SUCCESS: return {
            ...state,
            changepassword: action.payload,
            loading: false
        }


        case ActionTypes.ADD_ACOUNT_USER_SUCCESS: return {
            ...state,
            updatedaccount: action.payload,
            loading: false
        }



        case ActionTypes.ADD_USER_CHECKIN: return {
            ...state,
            checkeduser: action.payload,
            loading: false
        }

        case ActionTypes.ADD_USER_FAIL: return {
            ...state,
            error: action.payload,
            loading: false
        }
        case ActionTypes.ADD_USER_RESET: return {}


        default: return state
    }
}






// add acount uSER 





export const AddNumberReducres = (state = {
    successfully: null,
    loading: false,
    error: null
}, action) => {
    switch (action.type) {
        case ActionTypes.ADDTELEFONUMBER_LOADING: return { loading: true }
        case ActionTypes.ADDTELEFONUMBER: return {
            ...state,
            successfully: action.payload,
            loading: false
        }


        case ActionTypes.ADDTELEFONUMBER_FAIL: return {
            error: action.payload,
            loading: false
        }


        default: return state
    }
}












