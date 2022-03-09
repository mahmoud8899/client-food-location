import * as ActionTypes from './Types'
import axios from 'axios'
import { ChangeCode } from '../../Assistant/ValidationPayment'
import { Action_logout } from './Auth_Action'


// Remove product from user
// // delete /product/product/:id/
export const RemoveProductAction = (user) => async (dispatch) => {

    try {

        const { data } = await axios.delete(`/api/product/product/${user}`,)
        dispatch({ type: ActionTypes.ADD_PRODUCT_REMOVE_SUCCESS, payload: data.message })

    } catch (error) {
        dispatch({
            type: ActionTypes.ADD_PRODUCT_UPDATED_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}


// comment review 
// POST  url  very / /product/product/comment/:id/
export const ReviewCommentUserAction = (user) => async (dispatch, getState) => {


    // console.log(user._id)
    try {


        const { userLogin: { token } } = getState()
        // console.log(token)
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const { data } = await axios.post(`/api/product/product/comment/${user._id}`, user, config)

        dispatch({ type: ActionTypes.ADD_REVIEW_SUCCESS, payload: data.message })
        dispatch(product_IDAction(user._id))
    } catch (error) {
        dispatch({
            type: ActionTypes.ADD_PRODUCT_ID_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}

// product id 
// GET // URL :  product/product/id
export const product_IDAction = (id) => async (dispatch) => {

    try {

        dispatch({ type: ActionTypes.ADD_PRODUCT_ID_LOADING })

        const { data } = await axios.get(`/api/product/product/details/${id}`)
        dispatch({ type: ActionTypes.ADD_PRODUCT_ID_SUCCESS, payload: data })
        // OtherParams && dispatch(AppendChangeData(data))
    } catch (error) {
        dispatch({
            type: ActionTypes.ADD_PRODUCT_ID_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}

// Start Product Pagination  //.................................................................>
// append.... 
export const AppendProductAndCategory = (data) => ({
    type: ActionTypes.ADD_CATEGORYPRODUCT_APPEND,
    payload: data
})
// count next pages...
export const AppendNumberCategoryProduct = (nextpage) => ({
    type: ActionTypes.ADD_NUMBERNEXTPAGE_SUCCESS,
    payload: nextpage
})

// get products... 
export const productpaginationAction = (user) => async (dispatch, getState) => {
    const calculatedPage = getState().PaginationProducts?.categoryProductsNextPagesxp
    const nextRequestPage = calculatedPage === undefined ? 1 : calculatedPage
    if (nextRequestPage) {
        try {
            const { data } = await axios.get(`/api/product/cartinfo/${user}?pageNumber=${nextRequestPage}`)
            dispatch(AppendProductAndCategory(data.product))
            if (data?.pages <= 1) return dispatch(AppendNumberCategoryProduct(null))
            const nextpage = data?.result?.next?.page > data?.pages ? null : data?.result?.next?.page
            dispatch(AppendNumberCategoryProduct(nextpage))
            return
        } catch (error) {
            dispatch({
                type: ActionTypes.ADD_PAGINATION_PRODUCT_FAIL,
                payload: error.response &&
                    error.response.data.error ?
                    error.response.data.error :
                    error.message
            })
        }

    }

}
// End Product Pagination  //.................................................................>




// Create Product/
// POST // URL : /api/product/create/
export const CreateNewProductAction = (user) => async (dispatch, getState) => {
    try {
        const { userLogin: { token } } = getState()
        dispatch({ type: ActionTypes.ADD_PRODUCT_UPDATED_LOADING })
        const { data } = await axios.post(`/api/product/create/`,
            user, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatch({ type: ActionTypes.ADD_PRODUCT_CREATE_SUCCESS, payload: data })
    } catch (error) {

        const message = error.response &&
        error.response.data.message ?
        error.response.data.message :
        error.message

    if (message === 'token failed') {

        dispatch(Action_logout())

    }
    dispatch({
        type: ActionTypes.ADD_PRODUCT_UPDATED_FAIL,
        payload: message

    })
        
    }
}



// updated product
// put  url : //  /api/product/product/updated/6210f00d5d48931ab7b5637c
export const ProductUpdatedAction = (user) => async (dispatch) => {

    try {

        dispatch({ type: ActionTypes.ADD_PRODUCT_UPDATED_LOADING })
        const { data } = await axios.put(`/api/product/product/updated/${user._id}`, user)
        dispatch({ type: ActionTypes.ADD_PRODUCT_UPDATED_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: ActionTypes.ADD_PRODUCT_UPDATED_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}

// Uploading Image/
// POST // URL : /api/uploading/
export const UploadingNewImageProduct = (user, UpdateProducts, CreateProduct) => async (dispatch) => {
    try {

        dispatch({ type: ActionTypes.ADD_PRODUCT_UPDATED_LOADING })

        const { data } = await axios.post(`/api/uploading/`, user)
        const newDataUploading = {
            cartinfo: UpdateProducts?.cartinfo,
            category: ChangeCode(UpdateProducts?.category),
            description: ChangeCode(UpdateProducts?.description),
            name: ChangeCode(UpdateProducts?.name),
            popular: UpdateProducts?.popular,
            prices: UpdateProducts?.prices,
            _id: UpdateProducts?._id,
            image: data
        }
        CreateProduct ?
            dispatch(CreateNewProductAction(newDataUploading))
            : dispatch(ProductUpdatedAction(newDataUploading))

    } catch (error) {
        dispatch({
            type: ActionTypes.ADD_PRODUCT_UPDATED_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}












// change product details
// export const AppendChangeData = (ProductDetails) => ({
//     type: ActionTypes.ADD_CATEGORYPRODUCT_APPEND,
//     payload: { ProductDetails }
// })
// //
// paylod: OtherParams




//   Start Searching  ///////////////////////////.......................................................................>
// Searching  all products
// get  // URL : // /api/product/product?pageNumber=1&keyword=name ... >

// export const AppendSearchingData = (data) => ({
//     type: ActionTypes.ADD_PRODUCT_SEARCHING,
//     payload: { data }
// })

// export const APPendNumberSearching = (nextpage) => ({
//     type: ActionTypes.ADD_PRODUCT_SEARCHING_NUMBER,
//     payload: nextpage
// })




// export const SearchingProductAction = (user, ref) => async (dispatch, getState) => {


//     const nextNumber = ref ? 1 : getState().Search.NumberPage

//     if (nextNumber) {
//         try {

//             const { data } = await axios.get(`/api/product/product?pageNumber=${nextNumber}$&keyword=${user}`)

//             dispatch(AppendSearchingData(data.product))



//             const nextpage = data.result?.next?.page > data?.pages ? null : data.result?.next?.page

//             dispatch(APPendNumberSearching(nextpage))




//         } catch (error) {

//             dispatch({
//                 type: ActionTypes.ADD_PRODUCT_SEARCHING_FAIL,
//                 payload: error.response &&
//                     error.response.data.message ?
//                     error.response.data.message :
//                     error.message
//             })
//         }


//     }






// }



//   END Searching  ///////////////////////////.......................................................................>











// PUT  // /product/product/edit/:id/
//  const user = {
//     name,
//     prics,
//     countInStock,
//     description,
//     category,
//  }
// export const UpdateProductAction = (user) => async (dispatch, getState) => {


//     // console.log(user._id)
//     try {
//         const { userLogin: { token } } = getState()
//         const config = {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         }


//         const { data } = await axios.put(`/api/product/product/edit/${user._id}`, user, config)
//         dispatch({ type: ActionTypes.ADD_ADMIN_PRODUCTS_UPDATE_SUCCESS, payload: data })

//     } catch (error) {
//         dispatch({
//             type: ActionTypes.ADD_SEARCHING_FAIL,
//             payload: error.response &&
//                 error.response.data.message ?
//                 error.response.data.message :
//                 error.message
//         })
//     }
// }


// Create Product....
// POST // Url : // api/product/create/
// const user = {
//     user:
//     name,
//     image: Follow,
//     prics,
//     countInStock,
//     description,
//     category,
// }
// export const CreateProductAction = (user) => async (dispatch, getState) => {

//     try {
//         const { userLogin: { token } } = getState()

//         console.log(token)
//         const config = {
//             headers: {
//                 Authorization: `Bearer ${token}`,

//             }
//         }


//         const { data } = await axios.post(`/api/product/create/`, user, config)
//         dispatch({ type: ActionTypes.ADD_ADMIN_PRODUCTS_CREATE_SUCCESS, payload: data })

//     } catch (error) {
//         dispatch({
//             type: ActionTypes.ADD_SEARCHING_FAIL,
//             payload: error.response &&
//                 error.response.data.message ?
//                 error.response.data.message :
//                 error.message
//         })
//     }
// }










// // start discount
// // POST URL : /discount/checkin/
// export const CheckInDiscountCodAction = (user) => async (dispatch, getState) => {



//     try {
//         dispatch({ type: ActionTypes.ADD_DISCOUNTCOD_LOADING })
//         const { userLogin: { token } } = getState()
//         const config = {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         }

//         const { data } = await axios.post(`/api/discount/checkin/`,user, config)

//         dispatch({ type: ActionTypes.ADD_DISCOUNTCOD_SUCCESS, payload: data })
//     } catch (error) {

//         const message = error.response &&
//         error.response.data.message ?
//         error.response.data.message :
//         error.message
//     if (message === 'token failed') {

//         return dispatch(Action_logout())
//     }


//         dispatch({
//             type: ActionTypes.ADD_DISCOUNTCOD_FAIL,
//             payload: message
//         })
//     }
// }







// append result to search..
// export const AppendResultToSearch = (idProduct, data) => ({
//     type: ActionTypes.ADD_SEARCHING_SUCCESS,
//     payload: { idProduct, data }
// })


// // apend page number,,,
// export const AppendNextPage = (idProduct, nextpage) => ({
//     type: ActionTypes.ADD_SEARCHING_NEXTNUMBER,
//     payload: { idProduct, nextpage }
// })


// // Searching to All products with pagination .>.>.>.>.
// // get  // URL : // /api/product/product?pageNumber=1&keyword=name ... >
// export const SearchingProductsAction = (idProduct) => async (dispatch, getState) => {

//     // console.log('keyword',keyword)
//     const nextP = getState().ClientPagationProducts.nextNumber[idProduct]
//     // console.log('nextP',nextP)
//     const nextRequestPage = nextP === undefined ? 1 : nextP



//     if (nextRequestPage) {
//         try {

//             const { data } = await axios.get(`/api/product/product?pageNumber=${nextRequestPage}`)
//             //    testing console.log('data ccc',data)
//             dispatch(AppendResultToSearch(idProduct, data.product))



//             if (data?.pages <= 1) return dispatch(AppendNextPage(idProduct, null))
//             const nextpage = data?.result?.next?.page > data?.pages ? null : data?.result?.next?.page


//             // console.log('nextpage', nextpage)
//             dispatch(AppendNextPage(idProduct, nextpage))


//         } catch (error) {

//             dispatch({
//                 type: ActionTypes.ADD_SEARCHING_FAIL,
//                 payload: error.response &&
//                     error.response.data.message ?
//                     error.response.data.message :
//                     error.message
//             })
//         }
//     }



// }
