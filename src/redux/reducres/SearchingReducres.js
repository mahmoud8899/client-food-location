import * as ActionTypes from '../Action/Types'

const MpasSearching = {

    page : 1,
    search : []
}


export const SearchingHomeReducres = (state = MpasSearching,action)=>{

    switch(action.type){


        case ActionTypes.ADD_SEARCHING_PRODUCT_DETAILS_SUCCESS :
            return {
                ...state,
                searchingHome : action.payload
            }


            case ActionTypes.ADD_SEARCHING_PRODUCT_DETAILS_NUMBER :
                // console.log('next page',action.payload)
                return {
                ...state,
                page: action.payload
            }

            case  ActionTypes.ADD_SEARCHING_PRODUCT_DETAILS_FAIL :
                return {
                    error : action.payload
                } 


        default : return state
    }
}