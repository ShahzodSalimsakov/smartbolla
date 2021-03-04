import * as types from '../types'
const initialState = {
  backgroundColor: 'linear-gradient(270deg, #0C0E12 0.14%, #242C40 100%)',

}
export const mainConfigReducer = (state= initialState, action,) => {
  switch (action.type) {
    default: return state;

    case types.CHANGE_BACKGROUND:
      return {
        ...state,
        backgroundColor: action.payload
      }
  }
}