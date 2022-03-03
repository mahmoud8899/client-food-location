import * as ActionTypes from '../Action/Types'








// products to restrange...
export const PaginationProductReducres = (state = {
    categoryProductsNextPagesxp: {},
    loading: false,
    error: null,
    categoryproduct: {},
}, action) => {

    switch (action.type) {



        case ActionTypes.ADD_CATEGORYPRODUCT_APPEND:
            const categoryId = action.payload.categoryId

            return {
                loading: false,
                ...state,
                categoryproduct: {
                    ...state.categoryproduct,
                    [categoryId]: (state.categoryproduct[categoryId] || []).concat(action.payload.data)
                }

            }



        case ActionTypes.ADD_NUMBERNEXTPAGE_SUCCESS:


            //console.log('reducres..',action.type)
            return {

                ...state,
                categoryProductsNextPagesxp: {
                    ...state.categoryProductsNextPagesxp,
                    [action.payload.categoryId]: action.payload.nextpage,
                }
            }


        case ActionTypes.ADD_PAGINATION_PRODUCT_FAIL: return { error: action.payload }





        default: return state
    }
}






// product id 
// show post .
export const ShowPostIDReducres = (state = {
    productId: [],
    review: []
}, action) => {
    switch (action.type) {


        case ActionTypes.ADD_PRODUCT_ID_LOADING: return {
            loading: true
        }
        case ActionTypes.ADD_PRODUCT_ID_SUCCESS: return {
            ...state,

            productId: action.payload,
            loading: false,
        }

        case ActionTypes.ADD_REVIEW_SUCCESS: return {
            ...state,
            review: action.payload,
            loading: false,
        }


        case ActionTypes.ADD_PRODUCT_ID_FAIL: return {
            ...state,
            error: action.payload,
            loading: false,
        }

        default: return state
    }
}





// ADD_PRODUCT_CREATE_IMAGE_SUCCESS
// product Updated and create
export const HandleUpdatedAndCreateProductReducres = (state = {
    error: null,
    loading: false,
    updated: null,
    created: null
}, action) => {
    switch (action.type) {

        case ActionTypes.ADD_PRODUCT_UPDATED_LOADING: return {
            loading: true
        }

        case ActionTypes.ADD_PRODUCT_UPDATED_SUCCESS: return {
            ...state,
            updated: action.payload,
            loading: false,
        }

        case ActionTypes.ADD_PRODUCT_CREATE_SUCCESS: return {
            ...state,
            created: action.payload,
            loading: false,
        }

        case ActionTypes.ADD_PRODUCT_UPDATED_FAIL: return {
            ...state,
            error: action.payload,
            loading: false,
        }

        default: return state
    }
}














// only Admin ....
// export const AdminProductsReducres = (state = {
//     loading: false,
//     RemoveProduct: {},
//     UpdateProduct: {},
//     CreateProduct: {},
//     error: null,
// }, action) => {

//     switch (action.type) {

//         case ActionTypes.ADD_SEARCHING_LOADING: return {
//             loading: true
//         }

//         case ActionTypes.ADD_ADMIN_PRODUCTS_REMOVE_SUCCESS: return {
//             ...state,
//             loading: false,
//             RemoveProduct: action.payload

//         }

//         case ActionTypes.ADD_ADMIN_PRODUCTS_CREATE_SUCCESS: return {
//             ...state,
//             loading: false,
//             CreateProduct: action.payload
//         }

//         case ActionTypes.ADD_ADMIN_PRODUCTS_UPDATE_SUCCESS: return {
//             ...state,
//             loading: false,
//             UpdateProduct: action.payload
//         }

//         case ActionTypes.ADD_SEARCHING_FAIL: return {
//             loading: false,
//             error: action.payload
//         }


//         default: return state
//     }
// }


// export const ProductsReducres = (state = {
//     ProductList: {},
//     nextNumber: {}
// }, action) => {


//     switch (action.type) {

//         case ActionTypes.ADD_SEARCHING_SUCCESS:

//             const idProduct = action.payload.idProduct
//             return {
//                 ...state,
//                 ProductList: {
//                     ...state.ProductList,
//                     [idProduct]: (state.ProductList[idProduct] || []).concat(action.payload.data)
//                 }
//             }


//         case ActionTypes.ADD_SEARCHING_NEXTNUMBER:
//             return {
//                 ...state,
//                 nextNumber: {
//                     ...state.nextNumber,
//                     [action.payload.idProduct]: action.payload.nextpage,
//                 }
//             }


//         default: return state
//     }
// }





















// products
// pagination

