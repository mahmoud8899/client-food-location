import * as ActionTypes from '../Action/Types'




// remove category and Updated , create
export const UpdateRemoveReducres = (state = {
    loading: false,
    error: null,
    updated: null,
    remove: null,
    create: null,
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


        case ActionTypes.ADD_CATEGORY_DELETE_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            }



        default: return state
    }
}

// case ActionTypes.ADD_CATEGORY_LOADING: return { loading: true }
// get  category to restrange. och save id 
export const CategoryAllReducres = (state = {
    category: [],
    error: null,
    // categoryProductsNextPagesxp: {}

}, action) => {


    switch (action.type) {

        case ActionTypes.ADD_CATEGORY_SUCCESS:
            // console.log(action.payload)

            return {
                ...state,
                category: action.payload,
            };




        case ActionTypes.ADD_CATEGORY_FAIL: return {
            error: action.payload,
            loading: false
        }


        default: return state
    }
}


        // const categoryId = action.payload.id
        // return {
        //     loading: false,
        //     ...state,
        //     category: {
        //         ...state.category,
        //         [categoryId]: (state.category[categoryId] || []).concat(action.payload.data)
        //     }

        // }

        // case ActionTypes.ADD_CATEGORY_SAVE_ID:
        //     return {
        //         ...state,
        //         categoryProductsNextPagesxp: {
        //             ...state.categoryProductsNextPagesxp,
        //             [action.payload.id]: action.payload.id,
        //         }
        //     }