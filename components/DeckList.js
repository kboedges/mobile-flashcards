import React from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { darkestFoam, lightestFoam, midFoam } from "../utils/colors";

// Actions
import { getDecks } from "../reducers/decks/actions";

class DeckList extends React.Component {
  componentDidMount() {
    getDecks();
  }

  keyExtractor = item => item.title;

  render() {
    console.log(this.props.decks);

    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.decks}
          keyExtractor={this.keyExtractor}
          renderItem={({ item }) => (
            <TouchableOpacity key={item.key} style={styles.deckButton}>
              <Text style={styles.deckTitle}>{item.title}</Text>
              <Text style={styles.deckCardNum}>
                {item.questions.length} {item.questions.length === 1 ? "Card" : "Cards"}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center"
  },
  deckButton: {
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 40,
    borderColor: darkestFoam,
    borderBottomWidth: 1
  },
  deckTitle: {
    fontSize: 20,
    paddingBottom: 10,
    color: midFoam
  },
  deckCardNum: {
    color: darkestFoam
  }
});

const mapStateToProps = ({ decks }) => ({
  decks
});

const mapDispatchToProps = dispatch => ({
  getDecks: () => dispatch(getDecks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckList);
