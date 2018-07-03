import { AsyncStorage } from "react-native";
import { SET_DECKS } from "../actionTypes";

export const FLASHCARDS_STORAGE_KEY = "flashcards";

export function getDecks() {
  return AsyncStorage.getAllKeys()
    .then(res => res.json())
    .catch(error => console.error("Error:", error))
    .then(decks => dispatch(setDecks(decks)));
}

export function setDecks(decks) {
  return {
    type: SET_DECKS,
    decks
  };
}
