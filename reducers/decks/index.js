import { SET_DECKS } from "./actions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DECKS:
      return action.decks;
    default:
      return state;
  }
};
