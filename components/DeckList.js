import React from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

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
        <Text />
        <FlatList
          data={this.props.decks}
          keyExtractor={this.keyExtractor}
          renderItem={({ item }) => (
            <TouchableOpacity key={item.key} style={{ alignItems: "center", paddingTop: 14, paddingBottom: 14 }}>
              <Text>{item.title}</Text>
              <Text>
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
