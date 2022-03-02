import * as ActionTypes from './Types'


export const AddDriverySelection = (id) => (dispatch) => {



    dispatch({type: ActionTypes.DD_CC})


    localStorage.setItem(ActionTypes.DELIVER_SAVE_LOACAL, JSON.stringify(id))

    dispatch({type : ActionTypes.DELIVER_SAVE , payload : id})

}

