import React from "react";
import { AsyncStorage } from "react-native";
import { View, StatusBar } from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "react-navigation";
import { Constants } from "expo";
import Ionicons from "react-native-vector-icons/Ionicons";
import { darkestFoam, lightestFoam, midFoam } from "./utils/colors";
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

// Components
import DeckList from "./components/DeckList";
import NewDeck from "./components/NewDeck";

const store = createStore(reducer, applyMiddleware(thunk));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <MobileStatusBar />
          <Tabs />
        </View>
      </Provider>
    );
  }
}

function MobileStatusBar() {
  return (
    <View style={{ backgroundColor: darkestFoam, height: Constants.statusBarHeight }}>
      <StatusBar translucent barStyle="light-content" />
    </View>
  );
}

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
      activeTintColor: darkestFoam,
      inactiveTintColor: midFoam,
      tabStyle: {
        backgroundColor: lightestFoam
      }
    }
  }
);
