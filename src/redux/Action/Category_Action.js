import * as ActionTypes from './Types'
import axios from 'axios'





// get category only restarng
// url : // http://localhost:8000/api/category/all/


// takes all Category .... 
// GET URL : // .................

export const AppenCategoryId = (id) => ({
    type: ActionTypes.ADD_CATEGORY_SAVE_ID,
    payload: { id }
})



// all category ......................................>
// GET // URL : /api/category/restrange/list/:id cart info to restrange....../
export const getCategoryAction = (id) => async (dispatch, getState) => {

    const calculatedPage = getState()?.ListCategory?.categoryProductsNextPagesxp[id]

    if(typeof  calculatedPage === 'undefined'){
        try {
            const { data } = await axios.get(`/api/category/restrange/list/${id}/`)
            dispatch(AppenCategoryId(id))
            dispatch({
                type: ActionTypes.ADD_CATEGORY_SUCCESS,
                payload: { id, data }
            })
        } catch (error) {
            dispatch({
                type: ActionTypes.ADD_CATEGORY_FAIL,
                payload: error.response &&
                    error.response.data.message ?
                    error.response.data.message :
                    error.message
            })
        }
    }
    




}


