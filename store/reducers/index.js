import {combineReducers} from 'redux'
import {mainConfigReducer} from "./mainConfigReducer";

export default combineReducers({
  mainConfig: mainConfigReducer
})