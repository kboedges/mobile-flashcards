import { AsyncStorage } from "react-native";

// https://facebook.github.io/react-native/docs/asyncstorage.html

export const FLASHCARDS_STORAGE_KEY = "flashcards";

export function getDecks() {
  // return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
  //   [key]: entry
  // }))
}

export function getDeck(id) {
  // return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
  //   .then((results) => {
  //     const data = JSON.parse(results)
  //     data[key] = undefined
  //     delete data[key]
  //     AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(data))
  //   })
}

export function saveDeckTitle(title) {}

export function addCardToDeck({ title, card }) {}
