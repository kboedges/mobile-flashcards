import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "react-navigation";
import { Constants } from "expo";
import Ionicons from "react-native-vector-icons/Ionicons";

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
    <View style={{ backgroundColor: "#006743", height: Constants.statusBarHeight }}>
      <StatusBar translucent barStyle="light-content" />
    </View>
  );
}

const TabBarComponent = props => <BottomTabBar {...props} />;

const Tabs = createBottomTabNavigator(
  {
    DeckList: {
      screen: DeckList,
      navigationOptions: () => ({
        title: "My Decks"
      })
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: () => ({
        title: "New Deck"
      })
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "DeckList") {
          iconName = `ios-albums${focused ? "" : "-outline"}`;
        } else if (routeName === "NewDeck") {
          iconName = `ios-add-circle${focused ? "" : "-outline"}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "#006743",
      inactiveTintColor: "#1AB981",
      tabStyle: {
        backgroundColor: "#C6F7E6"
      }
    }
  }
);

// .color-primary-0 { color: #00A66C }	/* Main Primary color */
// .color-primary-1 { color: #3FC294 } /* Lightest */
// .color-primary-2 { color: #1AB981 }
// .color-primary-3 { color: #008456 }
// .color-primary-4 { color: #006743 } /* Darkest */
// http://www.paletton.com/#uid=1360u0kA8v8l-DBrxAfCBoKHJji

// New white #C6F7E6
