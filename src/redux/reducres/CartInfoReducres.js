import * as ActionTypes from '../Action/Types'








// Updated cart info
// put
export const UpdatedCartiNFOReducres = (state = {
    loading: false,
    updated: null,
    error: null,
}, action) => {
    switch (action.type) {

        case ActionTypes.ADD_UPDATED_CARTINFO_LOADING: return { loading: true }

        case ActionTypes.ADD_UPDATED_CARTINFO_SUCCESS: return {
            ...state,
            loading: false,
            updated: action.payload
        }
        case ActionTypes.ADD_UPDATED_CARTINFO_FAIL: return {
            ...state,
            error: action.payload,
            loading: false
        }



        default: return state
    }
}







// get info user 
// GET
export const CartInfoActionResturanReducres = (state = {
    loading: false,
    info: [],
    error: null,
}, action) => {

    switch (action.type) {

        case ActionTypes.ADD_CARTINFO_RESTURANG_LOADING: return { loading: true }

        case ActionTypes.ADD_CARTINFO_RESTURANG_SUCCESS: return {
            ...state,
            loading: false,
            info: action.payload
        }
        case ActionTypes.ADD_CARTINFO_RESTURANG_FAIL: return {
            ...state,
            error: action.payload,
            loading: false
        }



        default: return state
    }
}





// get  all restrange och city
export const CartInfoReducres = (state = {
    loading: false,
    home: null,
    error: null,
}, action) => {

    switch (action.type) {

        case ActionTypes.ADD_CART_INFO_LOADING_RESTAURANT: return { loading: true }

        case ActionTypes.ADD_CART_INFO_SUCCESS_RESTAURANT: return {
            ...state,
            loading: false,
            home: action.payload
        }
        case ActionTypes.ADD_CART_INFO_FAIL_RESTAURANT: return {
            ...state,
            error: action.payload,
            loading: false
        }



        default: return state
    }
}




// get  restrange or butike info.......
// 
export const CartInfoIdReducres = (state = {
    loading: false,
    cartinfo: null,
    error: null,

}, action) => {
    switch (action.type) {

        case ActionTypes.ADD_CARTINFO_ID_LOADIN: return { loading: true }
        case ActionTypes.ADD_CARTINFO_ID_SUCCESS: return {
            ...state,
            loading: false,
            cartinfo: action.payload
        }
       
        case ActionTypes.ADD_CARTINFO_ID_FAIL: return {
            ...state,
            loading: false,
            error: action.payload
        }

        default: return state
    }
}



// cartinfoNumber : {}
// case ActionTypes.ADD_CARTINFO_ID_LOADIN : return {
//     ...state,
//     cartinfoNumber: {
//         ...state.cartinfoNumber,
//         [action.payload.productid]:action.payload.productid
//     }
// }

// get  all  butike info.......
export const ButikerReducres = (state = {
    loading: false,
    error: null,
    butik: null
}, action) => {
    switch (action.type) {

        case ActionTypes.ADD_CART_INFO_LOADING_BUTIK: return { loading: true }
        case ActionTypes.ADD_CART_INFO_SUCCESS_BUTIK: return {
            ...state,
            loading: false,
            butik: action.payload
        }
        case ActionTypes.ADD_CART_INFO_FAIL_BUTIK: return {
            ...state,
            loading: false,
            error: action.payload
        }

        default: return state
    }
}







// get  new restrange max 8
export const newRestrangeReducres = (state = {
    loading: false,
    error: null,
    nyrestranges: null,
}, action) => {
    switch (action.type) {

        case ActionTypes.ADD_NEW_RESTRANGE_LOADING: return { loading: true }
        case ActionTypes.ADD_NEW_RESTRANGE_SUCCESS: return {
            ...state,
            loading: false,
            nyrestranges: action.payload
        }

        case ActionTypes.ADD_NEW_RESTRANGE_FAIL: return {
            ...state,
            loading: false,
            error: action.payload
        }

        default: return state
    }
}


// get fir delivery
export const FirDeliverReducres = (state = {
    loading: false,
    error: null,
    firdelivery: null,
}, action) => {
    switch (action.type) {

        case ActionTypes.ADD_NEW_FIRDELIVERY_LOADING: return { loading: true }
        case ActionTypes.ADD_NEW_FIRDELIVERY_SUCCESS: return {
            ...state,

            firdelivery: action.payload,
            loading : false,
        }

        case ActionTypes.ADD_NEW_FIRDELIVERY_FAIL: return {
            ...state,
            loading: false,
            error: action.payload
        }

        default: return state
    }
}







// get all category 
export const ALLcatgoryReducres = (
    state = {
    loading: false,
    error: null,
    category: null
}, action) => {
    switch (action.type) {

        case ActionTypes.ADD_CATAGORY_ALL_LOADING: return { loading: true }
        case ActionTypes.ADD_CATAGORY_ALL_SUCCESS: return {
            ...state,
            loading: false,
            category: action.payload
        }
        case ActionTypes.ADD_CATAGORY_ALL_FAIL: return {
            ...state,
            loading: false,
            error: action.payload
        }

        default: return state
    }
}
