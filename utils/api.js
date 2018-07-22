import { AsyncStorage } from "react-native";
import { clearLocalNotification, setLocalNotification } from "./helpers";

export function initialLoadDecks() {
  AsyncStorage.getItem("decks")
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        AsyncStorage.setItem(
          "decks",
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
  AsyncStorage.getItem("score")
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        AsyncStorage.setItem("score", JSON.stringify({ score: 0 }));
      } else {
        AsyncStorage.mergeItem("score", JSON.stringify({ score: 0 }));
      }
    });
}

// Clearing decks and notifications for testing

export function clearAllTesting() {
  AsyncStorage.removeItem("decks");
  clearLocalNotification().then(setLocalNotification);
}
