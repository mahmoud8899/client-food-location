import * as ActionTypes from '../Action/Types'




// user Login and sing up..............
export const LoginReducres = (state = {
    token: null,
    userInfo: {},
    forgetPassword : {},
    error : null,
    checkeduser : null,
    successfully: null
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

        case ActionTypes.ADD_FORGET_PASSWORD_SUCCESS : return {
            ...state,
            forgetPassword : action.payload
        }

        case ActionTypes.ADD_CHANGEPASSWORD_FORGET_SUCCESS : return {
            ...state,
            changepassword : action.payload
        }

        case ActionTypes.ADDTELEFONUMBER  : return{
            ...state,
            successfully : action.payload
        }
        case ActionTypes.ADD_USER_CHECKIN : return {
            ...state,
            checkeduser : action.payload
        }

        case ActionTypes.ADD_USER_FAIL: return {error: action.payload, loading: false }
        case ActionTypes.ADD_USER_RESET: return {}


        default: return state
    }
}



















// ================================= list users only admin se this....===================
// // admin only....
// const StateAdmin = {
//     listUser: {},
//     nextNumber: {},
//     loading: false,
//     error: null,
// }



// // list user ... 
// export const ListUserReducres = (state = StateAdmin, action) => {
//     switch (action.type) {

//         case ActionTypes.ADD_ADMIN_LIST_LOADING: return {
//             loading: true
//         }
//         case ActionTypes.ADD_ADMIN_LIST_APPEND:
//             const idProduct = action.payload.idProduct
//             return {

//                 ...state,
//                 listUser: {
//                     ...state.listUser,
//                     [idProduct]: (state.listUser[idProduct] || []).concat(action.payload.data)
//                 }
//             }

//         case ActionTypes.ADD_ADMIN_LIST_NUMBER:
//             return {
//                 ...state,
//                 nextNumber: {
//                     ...state.nextNumber,
//                     [action.payload.idProduct]: action.payload.nextpage,
//                 }
//             }

//         case ActionTypes.ADD_ADMIN_REMOVE_ISADMIN_SUCCESS: return {
//             ...state,
//             loading: false,
//             success: action.payload
//         }

//         case ActionTypes.ADD_ADMIN_LIST_FAIL: return {
//             error: action.payload
//         }
//         default: return state
//     }
// }

