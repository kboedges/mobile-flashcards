import { AsyncStorage } from "react-native";
// import { SET_DECKS } from "../actionTypes";
export const SET_DECKS = "SET_DECKS";

export const FLASHCARDS_STORAGE_KEY = "decks";

export function getDecks() {
  return dispatch =>
    AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY, (err, results) => {
      if (err) {
        console.log("Error", err);
      }
      return results;
    })
      .then(JSON.parse)
      .then(results => dispatch(setDecks(results)));
}

export function addDeck(newDeckTitle) {
  return dispatch =>
    AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY, (err, results) => {
      if (err) {
        console.log("Error", err);
      }
      return results;
    })
      .then(results => {
        const decks = JSON.parse(results);
        decks.list.push({ title: newDeckTitle, questions: [] });
        AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(decks));
        return decks;
      })
      .then(decks => dispatch(setDecks(decks)));
}

export function addQuestion(deckTitle, questionInfo) {
  return dispatch =>
    AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(questionInfo), (err, results) => {
      if (err) {
        console.log("Error", err);
      }
      return results;
    })
      .then(JSON.parse)
      .then(results => dispatch(setDecks(results)));
}

function setDecks(decks) {
  return {
    type: SET_DECKS,
    decks
  };
}
