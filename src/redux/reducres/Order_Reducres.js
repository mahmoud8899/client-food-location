import * as ActionTypes from '../Action/Types'



// restrang orders notfiations
// ADD_ORDER_NOTIFICATIONS_LOADING
// ADD_ORDER_NOTIFICATIONS_SUCCESS
// ADD_ORDER_NOTIFICATIONS_FAIL
export const ResturantOrdersNotfications = (state = {
    loading: false,
    orderNotfications: [],
    error: null
}, action) => {

    switch (action.type) {
        case ActionTypes.ADD_ORDER_NOTIFICATIONS_LOADING: return { loading: true }
        case ActionTypes.ADD_ORDER_NOTIFICATIONS_SUCCESS:
            return {
                ...state,
                orderNotfications: action.payload,
                loading: false
            }

        case ActionTypes.ADD_ORDER_NOTIFICATIONS_FAIL:
            return {
                error: action.payload,
                loading: false
            }


        default: return state
    }
}

// user Order ............................................................................................>
export const pagnationMyOrderReducres = (state = {
    UserOrders: [],
    nextNumber: Number(1),
    error : null
}, action) => {

    switch (action.type) {
        case ActionTypes.ADD_ORDERS_USER_SUCCESS:



            return {
                ...state,
                UserOrders: action.payload
            }


        case ActionTypes.ADD_ORDERS_USER_NUMBER:
            // console.log('ddd',action.payload)
            return {
                ...state,
                nextNumber: action.payload
            }


            case ActionTypes.ADD_ORDERS_USER_FAIL : 
            return {
                ...state,
                error : action.payload,
               
            }


        default: return state
    }
}




// create order and se one order
export const OrderReducres = (state = {

    createOrder: {},
    orderID: {},
    loading : false,
    error: null
}, action) => {
    switch (action.type) {

        case ActionTypes.ADD_ORDER_LOADING: return { loading: true }
        case ActionTypes.ADD_ORDER_SUCCESS: return {
            ...state,
            loading: false,
            createOrder: action.payload,

        }
        case ActionTypes.ADD_ORDER_ID_SUCCESS: return {
            ...state,
            loading: false,
            orderID: action.payload

        }



        case ActionTypes.ADD_ORDER_FAIL: return {
            error: action.payload,
            loading: false,

        }
        default: return state
    }
}















// admin Only Show and delete.
// all Order
export const ShowOrderReducres = (state = {
    loading: false,
    error: null,
    ShowOrders: [],
    ordersAllNumber: Number(1),

}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SHOWS_ORDERS_RESTURANS_NUMBER:
            return {
                ...state,
                ordersAllNumber: action.payload
            }

        case ActionTypes.ADD_SHOWS_ORDERS_RESTURANS_SUCCESS:

           

         return {
             ...state,
             ShowOrders: [...state.ShowOrders, ...action.payload],
         }









        case ActionTypes.ADD_SHOWS_ORDERS_RESTURANS_FAIL: return {
            ...state,
            error: action.payload,


        }
        default: return state
    }
}

















