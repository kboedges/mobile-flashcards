import React from "react";
import { View, StatusBar } from "react-native";
import { createBottomTabNavigator, createStackNavigator } from "react-navigation";
import { Constants } from "expo";
import Ionicons from "react-native-vector-icons/Ionicons";
import { lightestGray, midGray } from "./utils/colors";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

// Components
import DeckList from "./components/DeckList";
import Deck from "./components/Deck";
import NewDeck from "./components/NewDeck";
import DeckQuiz from "./components/DeckQuiz";

const store = createStore(reducer, applyMiddleware(thunk));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <MobileStatusBar />
          <Stack />
        </View>
      </Provider>
    );
  }
}

function MobileStatusBar() {
  return (
    <View style={{ backgroundColor: "black", height: Constants.statusBarHeight }}>
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
      activeTintColor: "white",
      inactiveTintColor: "white",
      tabStyle: {
        backgroundColor: midGray
      },
      labelStyle: {
        fontSize: 14
      },
      style: {
        height: 55
      }
    }
  }
);

const Stack = createStackNavigator({
  Tabs: {
    screen: Tabs,
    navigationOptions: () => ({
      header: null,
      headerBackTitle: "My Decks"
    })
  },
  Deck: {
    screen: Deck,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "black"
      },
      headerTintColor: "white",
      headerBackTitle: `${navigation.getParam("deck", "Deck").title} Deck`,
      headerTruncatedBackTitle: "Back to Deck"
    })
  },
  DeckQuiz: {
    screen: DeckQuiz,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: "black"
      },
      headerTintColor: "white"
    })
  }
});
