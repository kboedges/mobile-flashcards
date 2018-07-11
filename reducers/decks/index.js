// import { SET_DECKS } from "../actionTypes";
import { SET_DECKS } from "./actions";

const initialState = [];

// const initialState = [
//   {
//     title: "React",
//     questions: [
//       {
//         question: "What is React?",
//         answer: "A library for managing user interfaces"
//       },
//       {
//         question: "Where do you make Ajax requests in React?",
//         answer: "The componentDidMount lifecycle event"
//       }
//     ]
//   },
//   {
//     title: "JavaScript",
//     questions: [
//       {
//         question: "What is a closure?",
//         answer: "The combination of a function and the lexical environment within which that function was declared."
//       }
//     ]
//   }
// ];

console.log("hie");

export default (state = initialState, action) => {
  console.log("hello", action.decks);
  switch (action.type) {
    case SET_DECKS:
      return action.decks;
    default:
      return state;
  }
};
