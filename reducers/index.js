import { combineReducers } from "redux";

// All reducers
import decks from "./decks";
import deck from "./deck";

export default combineReducers({
  decks,
  deck
});
