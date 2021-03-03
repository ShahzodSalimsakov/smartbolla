import * as types from '../types';


export const changeMainBackground = (back) => dispatch => {
  dispatch({
    type: types.CHANGE_BACKGROUND,
    payload: back
  })
}