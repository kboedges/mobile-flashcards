import { AsyncStorage } from "react-native";
// import { SET_DECKS } from "../actionTypes";
export const SET_DECKS = "SET_DECKS";

export const FLASHCARDS_STORAGE_KEY = "decks";

export function getDecks() {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY, (err, results) => {
    if (err) {
      console.log("Error", err);
    }
    setDecks(results);
  });
}

export function addDeck(newDeckTitle) {
  return dispatch =>
    AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY, (err, results) => {
      if (err) {
        console.log("Error", err);
      }
      let decks = JSON.parse(results);
      decks.push({ title: newDeckTitle, questions: [] });
      AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(decks));
      () => setDecks(decks);
    }).then(decks => dispatch(setDecks(decks)));
}

function setDecks(decks) {
  return {
    type: SET_DECKS,
    decks
  };
}
