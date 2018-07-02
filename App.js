import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import { Constants } from "expo";

// Components
import DeckList from "./components/DeckList";
import NewDeck from "./components/NewDeck";

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MobileStatusBar />
        <Tabs />
      </View>
    );
  }
}

function MobileStatusBar() {
  return (
    <View style={{ backgroundColor: "green", height: Constants.statusBarHeight }}>
      <StatusBar translucent barStyle="light-content" />
    </View>
  );
}

const Tabs = createBottomTabNavigator({
  DeckList: {
    screen: DeckList
  },
  NewDeck: {
    screen: NewDeck
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
