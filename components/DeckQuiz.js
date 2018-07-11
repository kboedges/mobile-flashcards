import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { midGray, lightestGray } from "../utils/colors";

export default class DeckQuiz extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Maybe create a new stack here??</Text>
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
  }
});
