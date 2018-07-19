import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

// Actions
import { tallyScore } from "../reducers/score/actions";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answerShowing: false,
      correctAnswer: undefined
    };
  }

  toggleAnswer = () => {
    this.setState(prevState => ({
      answerShowing: !prevState.answerShowing
    }));
  };

  addCard = () => {
    this.props.navigation.navigate("NewQuestion", {
      deck: this.props.navigation.getParam("deck", "NO DECK")
    });
  };

  submitScore = answerState => {
    this.props.tallyScore(answerState).then(
      this.props.navigation.push("Question", {
        deck: this.props.navigation.getParam("deck", "NO DECK"),
        index: this.props.navigation.getParam("index", "NO DECK") + 1
      })
    );
  };

  render() {
    const { navigation } = this.props;
    const currentDeck = navigation.getParam("deck", "NO DECK");
    const index = navigation.getParam("index", 0);

    return (
      <View style={styles.container}>
        {currentDeck.questions[index] !== undefined ? (
          <View>
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
                <Text style={[styles.buttonText, { color: "white" }]} onPress={() => this.submitScore(true)}>
                  Correct
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, { backgroundColor: "red" }]}>
                <Text style={[styles.buttonText, { color: "white" }]} onPress={() => this.submitScore(false)}>
                  Incorrect
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.container}>
            <Text style={styles.title}>There are no cards in this deck yet!</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={[styles.buttonText, { color: "white" }]} onPress={this.addCard}>
                Add Card
              </Text>
            </TouchableOpacity>
          </View>
        )}
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
  noSpacingView: {
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    margin: 0
  },
  title: {
    fontSize: 45,
    paddingBottom: 10,
    color: "black",
    textAlign: "center"
  },
  link: {
    color: "red",
    fontWeight: "bold",
    fontSize: 20
  },
  button: {
    borderRadius: 5,
    backgroundColor: "black",
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 20,
    width: 200
  },
  buttonText: {
    fontSize: 30,
    textAlign: "center"
  }
});

const mapDispatchToProps = dispatch => ({
  tallyScore: answerState => dispatch(tallyScore(answerState))
});

export default connect(
  null,
  mapDispatchToProps
)(Question);
