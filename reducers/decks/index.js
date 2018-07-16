// import { SET_DECKS } from "../actionTypes";
import { SET_DECKS } from "./actions";

const initialState = {
  list: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DECKS:
      return action.decks;
    default:
      return state;
  }
};
