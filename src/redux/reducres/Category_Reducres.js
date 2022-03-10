import * as ActionTypes from '../Action/Types'




// remove category and Updated , create
export const UpdateRemoveReducres = (state = {
    loading: false,
    error: null,
    updated: null,
    remove: null,
    create: null,
    category: [],
}, action) => {
    switch (action.type) {

        case ActionTypes.ADD_CATEGORY_DELETE_LOADING:
            return {
                loading: true
            }
        case ActionTypes.ADD_CATEGORY_DELETE_SUCCESS:
            return {
                ...state,
                remove: action.payload,
                loading: false,
            }
        case ActionTypes.ADD_CATEGORY_UPDATED_SUCCESS:
            return {
                ...state,
                updated: action.payload,
                loading: false,
            }
        case ActionTypes.ADD_CATEGORY_CREATE_SUCCESS:
            return {
                ...state,
                create: action.payload,
                loading: false,
            }



        case ActionTypes.ADD_CATEGORY_SUCCESS:
            return {
                ...state,
                category: action.payload,
                loading: false,
            };


        case ActionTypes.ADD_CATEGORY_DELETE_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            }



        default: return state
    }
}






// category user 
export const CategoryReducresUser = (state =
    {
        loading: false,
        usercategory: [],
        error: null
    }, action) => {
    switch (action.type) {

        case ActionTypes.ADD_CATEGORY_USER_LOADING:
            return {
                loading: true
            }
        case ActionTypes.ADD_CATEGORY_USER_SUCCESS:
            return {
                ...state,
                usercategory: action.payload,
                loading: false
            }
        case ActionTypes.ADD_CATEGORY_USER_FAIL:
            return {

                error: action.payload,
                loading: false
            }



        default: return state
    }
}