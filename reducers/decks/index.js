import { SET_DECKS } from "./actions";

const initialState = {
  list: [
    {
      title: "Initial",
      questions: [
        {
          question: "Initial",
          answer: "Initial"
        }
      ]
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DECKS:
      return action.decks;
    default:
      return state;
  }
};
