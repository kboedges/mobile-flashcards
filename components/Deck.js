import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { midGray, lightestGray } from "../utils/colors";

export default class Deck extends React.Component {
  startQuiz = deck => {
    this.props.navigation.navigate("Question", { deck: deck, index: 0 });
  };

  addCard = () => {
    this.props.navigation.navigate("NewQuestion", {
      deck: this.props.navigation.getParam("deck", "NO DECK")
    });
    this.setState({
      disabledButton: true
    });
  };

  render() {
    const { navigation } = this.props;
    const deck = navigation.getParam("deck", "NO DECK");

    return (
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.deckTitle}>{deck.title}</Text>
          <Text style={styles.deckCardNum}>
            {deck.questions.length} {deck.questions.length === 1 ? "card" : "cards"}
          </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.buttonOutline} onPress={this.addCard}>
            <Text style={[styles.buttonText, { color: "black" }]}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.startQuiz(deck)}>
            <Text style={[styles.buttonText, { color: "#fff" }]}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    paddingLeft: 10,
    paddingRight: 10
  },
  deckTitle: {
    fontSize: 45,
    paddingBottom: 10,
    color: "black"
  },
  deckCardNum: {
    color: midGray,
    fontSize: 30,
    paddingBottom: 10
  },
  button: {
    borderRadius: 5,
    backgroundColor: "black",
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 20
  },
  buttonOutline: {
    borderRadius: 5,
    backgroundColor: lightestGray,
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10
  },
  buttonText: {
    fontSize: 30
  }
});
