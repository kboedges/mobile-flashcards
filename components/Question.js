import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answerShowing: false
    };
  }

  toggleAnswer = () => {
    this.setState(prevState => ({
      answerShowing: !prevState.answerShowing
    }));
  };

  render() {
    const { navigation } = this.props;
    const currentDeck = navigation.getParam("deck", "NO DECK");
    const index = navigation.getParam("index", 0);

    console.log("currentDeck", currentDeck);

    return (
      <View style={styles.container}>
        {this.state.answerShowing === false ? (
          <View style={styles.groupedContainer}>
            <Text style={styles.title}>{currentDeck.questions[index].question}</Text>
            <TouchableOpacity onPress={this.toggleAnswer}>
              <Text style={styles.link}>See Answer</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.groupedContainer}>
            <Text style={styles.title}>{currentDeck.questions[index].answer}</Text>
            <TouchableOpacity onPress={this.toggleAnswer}>
              <Text style={styles.link}>See Question</Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.groupedContainer}>
          <TouchableOpacity style={[styles.button, { backgroundColor: "green" }]}>
            <Text style={[styles.buttonText, { color: "white" }]}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: "red" }]}>
            <Text style={[styles.buttonText, { color: "white" }]}>Submit</Text>
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
  groupedContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 45,
    paddingBottom: 10,
    color: "black",
    textAlign: "center"
  },
  link: {
    color: "red",
    fontWeight: "bold"
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
  buttonText: {
    fontSize: 30
  }
});
