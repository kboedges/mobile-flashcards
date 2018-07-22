import { AsyncStorage } from "react-native";
import { clearLocalNotification, setLocalNotification } from "./helpers";
import { FLASHCARDS_STORAGE_KEY } from "../reducers/decks/actions";
import { SCORE_STORAGE_KEY } from "../reducers/score/actions";

export function initialLoadDecks() {
  AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        AsyncStorage.setItem(
          FLASHCARDS_STORAGE_KEY,
          JSON.stringify({
            list: [
              {
                title: "My first deck",
                questions: [
                  {
                    question: "What's the best way to study?",
                    answer: "Mobile flashcards of course!"
                  },
                  {
                    question: "What color is the sky (usually...)",
                    answer: "Blue"
                  }
                ]
              }
            ]
          })
        );
      }
    });
}

export function initialLoadScore() {
  AsyncStorage.getItem(SCORE_STORAGE_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        AsyncStorage.setItem(SCORE_STORAGE_KEY, JSON.stringify({ score: 0 }));
      } else {
        AsyncStorage.mergeItem(SCORE_STORAGE_KEY, JSON.stringify({ score: 0 }));
      }
    });
}

// Clearing decks and notifications for testing

export function clearAllTesting() {
  AsyncStorage.removeItem(FLASHCARDS_STORAGE_KEY);
  clearLocalNotification().then(setLocalNotification);
}
