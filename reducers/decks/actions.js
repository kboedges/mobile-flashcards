import { AsyncStorage } from "react-native";
import { SET_DECKS } from "../actionTypes";

export const FLASHCARDS_STORAGE_KEY = "decks";

export function getDecks() {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY, (err, results) => {
    // console.log("Working", results);
    // console.log("Error", err);
    setDecks(results);
  });
}

export function setDecks(decks) {
  return {
    type: SET_DECKS,
    decks
  };
}
