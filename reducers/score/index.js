import { SET_SCORE } from "./actions";

const initialState = {
  score: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SCORE:
      return action.score;
    default:
      return state;
  }
};
