import axios from 'axios'
import * as ActionTypes from './Types'



// append result to search..
export const AppendNextSearching = (nextPage) => ({
    type: ActionTypes.ADD_SEARCHING_PRODUCT_DETAILS_NUMBER,
    payload: nextPage
})


// apend page number,,,
export const AppendProductSearching = (data) => ({
    type: ActionTypes.ADD_SEARCHING_PRODUCT_DETAILS_SUCCESS,
    payload: data
})




// searching products
// GET // URL : /api/product/product/61f72059c3c4460f9145c4e5?keyword
export const SearchingProductsAction = (id, query = '', form) => async (dispatch,getState)=>{

    const nextPage = form ? 1 : getState()?.ProductsSearching?.page

 if(nextPage){
    try{

        const {data} = await axios.get(`/api/product/product/${id}?pageNumber=${nextPage}&keyword=${query}`)

        dispatch(AppendProductSearching(data.product))

        if (data?.pages <= 1) return dispatch(AppendNextSearching(null))
        const nextpage = data?.result?.next?.page > data?.pages ? null : data?.result?.next?.page


        // console.log('nextpage', nextpage)
        dispatch(AppendNextSearching(nextpage))



    }catch(error){
        dispatch({
            type: ActionTypes.ADD_SEARCHING_PRODUCT_DETAILS_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
 }

   
}