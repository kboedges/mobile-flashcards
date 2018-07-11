import { AsyncStorage } from "react-native";
import { SET_DECK } from "../actionTypes";

export const FLASHCARDS_STORAGE_KEY = "deck";

export function getDeck() {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY, (err, result) => {
    if (err) {
      console.log("Error", err);
    }
    setDecks(result);
  });
}

export function setDeck(deck) {
  return {
    type: SET_DECK,
    deck
  };
}
