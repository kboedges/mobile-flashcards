import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

// Actions
import { clearScore } from "../reducers/score/actions";

class Score extends React.Component {
  navigateToDeck = () => {
    this.props.navigation.push("Tabs");
    this.props.clearScore();
  };

  render() {
    const { score } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Your score:</Text>
        <Text style={[styles.title, { color: "green" }]}>{score.score}</Text>

        <TouchableOpacity style={styles.button} onPress={this.navigateToDeck}>
          <Text style={styles.buttonText}>All Decks</Text>
        </TouchableOpacity>
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
  buttonText: {
    fontSize: 30,
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
