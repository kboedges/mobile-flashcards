import { AsyncStorage } from "react-native";
export const SET_SCORE = "SET_SCORE";
export const SCORE_STORAGE_KEY = "score";

export function getScore() {
  return dispatch =>
    AsyncStorage.getItem(SCORE_STORAGE_KEY, (err, result) => {
      if (err) {
        console.log("Error", err);
      }
      return result;
    })
      .then(JSON.parse)
      .then(result => dispatch(setScore(result)));
}

export function tallyScore(answerState) {
  return dispatch =>
    AsyncStorage.getItem(SCORE_STORAGE_KEY, (err, result) => {
      if (err) {
        console.log("Error", err);
      }
      return result;
    })
      .then(result => {
        const scoreObj = JSON.parse(result);
        if (answerState === true) {
          scoreObj.score++;
        } else if (answerState === false) {
          scoreObj.score;
        }
        AsyncStorage.setItem(SCORE_STORAGE_KEY, JSON.stringify(scoreObj));
        return scoreObj;
      })
      .then(result => dispatch(setScore(result)));
}

export function clearScore() {
  return dispatch =>
    AsyncStorage.mergeItem(SCORE_STORAGE_KEY, JSON.stringify({ score: 0 }), () => {
      AsyncStorage.getItem(SCORE_STORAGE_KEY, (err, result) => {
        if (err) {
          console.log("Error", err);
        }
        return result;
      })
        .then(JSON.parse)
        .then(result => dispatch(setScore(result)));
    });
}

function setScore(score) {
  return {
    type: SET_SCORE,
    score
  };
}
