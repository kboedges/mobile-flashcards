import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { midGray } from "../utils/colors";
import { connect } from "react-redux";

// Actions
import { addDeck, getDecks } from "../reducers/decks/actions";

class NewDeck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      disabledButton: true
    };
  }

  onPress = newDeckTitle => {
    this.props.addDeck(newDeckTitle).then(() => {
      this.props.decks.list.map(deck => {
        console.log(deck.title === newDeckTitle);
        if (deck.title === newDeckTitle) {
          this.props.navigation.navigate("Deck", { deck });
        }
      });
      this.setState({ text: "" });
    });
  };

  onInputChange = text => {
    this.setState({ text });
    if (text.length > 0) {
      this.setState({ disabledButton: false });
    } else {
      this.setState({ disabledButton: true });
    }
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Text style={styles.title}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={this.onInputChange}
          value={this.state.text}
          placeholder="Deck title"
          placeholderTextColor={midGray}
        />
        <TouchableOpacity
          style={styles.button}
          disabled={this.state.disabledButton}
          onPress={() => this.onPress(this.state.text)}
        >
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

const mapStateToProps = ({ decks }) => ({
  decks
});

const mapDispatchToProps = dispatch => ({
  addDeck: newDeckTitle => dispatch(addDeck(newDeckTitle)),
  getDecks: () => dispatch(getDecks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewDeck);
