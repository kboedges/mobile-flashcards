import React from "react";
import { midGray } from "../utils/colors";
import { StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";

export default class NewQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answer: ""
    };
  }

  onPress = () => {
    // this.props.addDeck(newDeckTitle).then(this.props.navigation.navigate("DeckList"));
    // this.setState({ text: "" });
    console.log("submitted");
  };

  render() {
    console.log(this.props.deck);

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <TextInput
          style={styles.textInput}
          onChangeText={question => this.setState({ question })}
          value={this.state.question}
          placeholder="Card question"
          placeholderTextColor={midGray}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={answer => this.setState({ answer })}
          value={this.state.answer}
          placeholder="Card answer"
          placeholderTextColor={midGray}
        />
        <TouchableOpacity style={styles.button} onPress={() => this.onPress(this.state.text)}>
          <Text style={[styles.buttonText, { color: "white" }]}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
  textInput: {
    height: 40,
    fontSize: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: midGray,
    alignSelf: "stretch",
    paddingLeft: 10,
    paddingRight: 10
  },
  title: {
    fontSize: 40,
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
    marginBottom: 20
  },
  buttonText: {
    fontSize: 30
  }
});
