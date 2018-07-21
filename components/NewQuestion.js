import React from "react";
import { midGray } from "../utils/colors";
import { connect } from "react-redux";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";

// Actions
import { addQuestion } from "../reducers/decks/actions";

class NewQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answer: ""
    };
  }

  onPress = () => {
    this.props
      .addQuestion(this.props.navigation.getParam("deck", "NO DECK").title, this.state, this.props.decks)
      .then(this.props.navigation.navigate("Deck"));
    this.setState({
      question: "",
      answer: ""
    });
  };

  render() {
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
  groupedContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
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

const mapStateToProps = ({ decks }) => ({
  decks
});

const mapDispatchToProps = dispatch => ({
  addQuestion: (deckTitle, questionInfo, decks) => dispatch(addQuestion(deckTitle, questionInfo, decks))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewQuestion);
