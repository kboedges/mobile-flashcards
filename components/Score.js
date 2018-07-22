import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { clearLocalNotification, setLocalNotification } from "../utils/helpers";
import { lightestGray } from "../utils/colors";

// Actions
import { clearScore } from "../reducers/score/actions";

class Score extends React.Component {
  componentDidMount() {
    clearLocalNotification().then(setLocalNotification);
  }

  navigateToDeck = () => {
    this.props.navigation.navigate("Deck", { deck: this.props.navigation.getParam("deck", "NO DECK") });
    this.props.clearScore();
  };

  restartQuiz = () => {
    this.props.navigation.navigate("Question", { deck: this.props.navigation.getParam("deck", "NO DECK"), index: 0 });
    this.props.clearScore();
  };

  render() {
    const { score } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.groupedContainer}>
          <Text style={styles.title}>Your score:</Text>
          <Text style={[styles.title, { color: "green" }]}>{score.score}</Text>
        </View>
        <View style={styles.groupedContainer}>
          <TouchableOpacity style={styles.button} onPress={this.restartQuiz}>
            <Text style={styles.buttonText}>Restart Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonOutline} onPress={this.navigateToDeck}>
            <Text style={[styles.buttonText, { color: "black" }]}>Back to Deck</Text>
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
  buttonOutline: {
    borderRadius: 5,
    backgroundColor: lightestGray,
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10,
    width: 200
  },
  buttonText: {
    fontSize: 22,
    textAlign: "center",
    color: "white"
  }
});

const mapStateToProps = ({ score }) => ({
  score
});

const mapDispatchToProps = dispatch => ({
  clearScore: () => dispatch(clearScore())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Score);
