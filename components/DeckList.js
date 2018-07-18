import React from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { midGray } from "../utils/colors";

// Actions
import { getDecks } from "../reducers/decks/actions";

class DeckList extends React.Component {
  componentDidMount() {
    this.props.getDecks();
  }

  onPress = item => {
    this.props.navigation.navigate("Deck", { deck: item });
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.decks.list}
          keyExtractor={item => item.title}
          renderItem={({ item }) => (
            <TouchableOpacity key={item.key} style={styles.deckButton} onPress={() => this.onPress(item)}>
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
    borderColor: "black",
    borderBottomWidth: 1
  },
  deckTitle: {
    fontSize: 30,
    paddingBottom: 10,
    color: "black"
  },
  deckCardNum: {
    color: midGray,
    fontSize: 20
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
