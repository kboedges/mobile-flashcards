import React from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

// Actions
import { getDecks } from "../reducers/decks/actions";

class DeckList extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <Text />
        <FlatList //https://facebook.github.io/react-native/docs/flatlist
          data={[{ key: "Coolest Deck" }, { key: "Lame Deck" }]}
          renderItem={({ item }) => (
            <TouchableOpacity style={{ alignItems: "center", paddingTop: 14, paddingBottom: 14 }}>
              <Text>{item.key}</Text>
              <Text>4 cards</Text>
            </TouchableOpacity>
            // https://facebook.github.io/react-native/docs/touchableopacity.html
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
    alignItems: "center",
    justifyContent: "center"
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
