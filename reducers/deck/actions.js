import { AsyncStorage } from "react-native";
import { SET_DECK } from "../actionTypes";

export const FLASHCARDS_STORAGE_KEY = "decks";

export function getDeck(deckTitle) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY, (err, result) => {
    if (err) {
      console.log("Error", err);
    }
    setDeck(results.filter(result => result.title === deckTitle));
  });
}

export function setDeck(deck) {
  return {
    type: SET_DECK,
    deck
  };
}
