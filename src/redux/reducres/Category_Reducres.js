import * as ActionTypes from '../Action/Types'




// case ActionTypes.ADD_CATEGORY_LOADING: return { loading: true }
// get  category to restrange. och save id 
export const CategoryAllReducres = (state = {
    category: {},
    error: null,
    categoryProductsNextPagesxp: {}

}, action) => {


    switch (action.type) {

        case ActionTypes.ADD_CATEGORY_SUCCESS:

        const categoryId = action.payload.id
        return {
            loading: false,
            ...state,
            category: {
                ...state.category,
                [categoryId]: (state.category[categoryId] || []).concat(action.payload.data)
            }

        }

        case ActionTypes.ADD_CATEGORY_SAVE_ID:
            return {
                ...state,
                categoryProductsNextPagesxp: {
                    ...state.categoryProductsNextPagesxp,
                    [action.payload.id]: action.payload.id,
                }
            }


        case ActionTypes.ADD_CATEGORY_FAIL: return { error: action.payload }


        default: return state
    }
}