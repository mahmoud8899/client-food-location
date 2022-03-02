import * as ActionTypes from '../Action/Types'


// save user takeway or delivery
export const PaymentDriverselection = (state = {
    driver: null, 
    loading : false 
}, action) => {


    switch (action.type) {

        case ActionTypes.DD_CC : return {
            loading : true,
        }
        case ActionTypes.DELIVER_SAVE:
        return {
            ...state,
            driver: action.payload,
            loading : false
            
        }
        default: return state
    }
}


