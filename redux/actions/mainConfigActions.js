//Action Types
export const CHANGE_BACKGROUND = "CHANGE_BACKGROUND";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";


//Action Creator
export const changeBackground = () => ({
  type: CHANGE_BACKGROUND
});

export const decrementCounter = () => ({
  type: DECREMENT_COUNTER
});