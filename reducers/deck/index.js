import { SET_DECK } from "../actionTypes";

const initialState = {
  title: "NO DECK",
  questions: [
    {
      question: "NO QUESTIONS",
      answer: "NO QUESTIONS"
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DECK:
      return action.deck;
    default:
      return state;
  }
};
