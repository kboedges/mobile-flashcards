// import React from "react";
// import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
// import { midGray, lightestGray } from "../utils/colors";
// import { createStackNavigator } from "react-navigation";

// // Components
// import Score from "./Score";
// import Question from "./Question";
// import Answer from "./Answer";

// export default class DeckQuiz extends React.Component {
//   render() {
//     const { navigation } = this.props;
//     const currentDeck = navigation.getParam("currentDeck", "NO DECK");
//     // console.log("look", currentDeck);

//     return (
//       <View style={styles.container}>
//         {currentDeck.questions[0] !== undefined ? (
//           currentDeck.questions.map(question => navigation.getParam("deck", "NO DECK"))
//         ) : (
//           // <View>
//           //   <Question />
//           //   <TouchableOpacity style={[styles.button, { backgroundColor: "green" }]}>
//           //     <Text style={[styles.buttonText, { color: "white" }]}>Submit</Text>
//           //   </TouchableOpacity>
//           //   <TouchableOpacity style={[styles.button, { backgroundColor: "red" }]}>
//           //     <Text style={[styles.buttonText, { color: "white" }]}>Submit</Text>
//           //   </TouchableOpacity>
//           // </View>
//           //   ))
//           <Text>Oops...No questions</Text>
//         )}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "space-around",
//     paddingLeft: 10,
//     paddingRight: 10
//   },
//   deckTitle: {
//     fontSize: 45,
//     paddingBottom: 10,
//     color: "black"
//   },
//   deckCardNum: {
//     color: midGray,
//     fontSize: 30,
//     paddingBottom: 10
//   },
//   button: {
//     borderRadius: 5,
//     backgroundColor: "black",
//     paddingRight: 30,
//     paddingLeft: 30,
//     paddingTop: 10,
//     paddingBottom: 10,
//     marginBottom: 20
//   },
//   buttonOutline: {
//     borderRadius: 5,
//     backgroundColor: lightestGray,
//     paddingRight: 30,
//     paddingLeft: 30,
//     paddingTop: 10,
//     paddingBottom: 10,
//     marginBottom: 10
//   },
//   buttonText: {
//     fontSize: 30
//   }
// });
