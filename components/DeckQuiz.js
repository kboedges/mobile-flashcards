import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { midGray, lightestGray } from "../utils/colors";

export default class DeckQuiz extends React.Component {
  render() {
    const { navigation } = this.props;
    const deck = navigation.getParam("deck", "NO DECK");

    return (
      <View style={styles.container}>
        <View>{deck.questions.map(question => <Text key={question.question}>{question.question}</Text>)}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around"
  }
});
