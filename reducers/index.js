import { combineReducers } from "redux";

// All reducers
import decks from "./decks";
import score from "./score";

export default combineReducers({
  decks,
  score
});
