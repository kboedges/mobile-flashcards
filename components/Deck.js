import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { darkestFoam, midFoam, lightestFoam } from "../utils/colors";

export default class Deck extends React.Component {
  onPress = () => {
    console.log("hello");
  };

  render() {
    const { navigation } = this.props;
    const deck = navigation.getParam("deck", "NO DECK");

    return (
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.deckTitle}>{deck.title}</Text>
          <Text style={styles.deckCardNum}>
            {deck.questions.length} {deck.questions.length === 1 ? "Card" : "Cards"}
          </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.buttonOutline} onPress={this.onPress}>
            <Text style={[styles.buttonText, { color: darkestFoam }]}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
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
    justifyContent: "space-around"
  },
  deckTitle: {
    fontSize: 40,
    paddingBottom: 10,
    color: darkestFoam
  },
  deckCardNum: {
    color: midFoam,
    fontSize: 25,
    paddingBottom: 10
  },
  button: {
    borderRadius: 5,
    backgroundColor: darkestFoam,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 20
  },
  buttonOutline: {
    borderRadius: 5,
    backgroundColor: lightestFoam,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 10
  },
  buttonText: {
    fontSize: 25
  }
});
