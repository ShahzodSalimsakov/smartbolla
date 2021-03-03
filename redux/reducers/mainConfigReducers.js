import {CHANGE_BACKGROUND, INCREMENT_COUNTER} from '../actions/mainConfigActions';

const counterReducer = (state = {backgroundColor: 'linear-gradient(270deg, #0C0E12 0.14%, #242C40 100%)'}, action) => {
  switch (action.type) {
    case CHANGE_BACKGROUND:
      return {...state, backgroundColor: action};
    case DECREMENT_COUNTER:
      return {...state, value: state.value - 1};
    default:
      return {...state};
  }
};

export default counterReducer;