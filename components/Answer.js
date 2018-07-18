import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class Answer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Answer</Text>
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
  }
});
