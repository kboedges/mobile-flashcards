import React from "react";
import { View, StatusBar } from "react-native";
import { createBottomTabNavigator, createStackNavigator } from "react-navigation";
import { Constants } from "expo";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { Provider } from "react-redux";
import { AsyncStorage } from "react-native";
import { clearLocalNotification, setLocalNotification } from "./utils/helpers";

// Components
import DeckList from "./components/DeckList";
import Deck from "./components/Deck";
import NewDeck from "./components/NewDeck";
import NewQuestion from "./components/NewQuestion";
import Score from "./components/Score";
import Question from "./components/Question";

const store = createStore(reducer, compose(applyMiddleware(thunk)));

// Clearing decks and notifications for testing

// AsyncStorage.removeItem("decks");
// clearLocalNotification().then(setLocalNotification);
AsyncStorage.removeItem("score");

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
    AsyncStorage.getItem("decks")
      .then(JSON.parse)
      .then(data => {
        if (data === null) {
          AsyncStorage.setItem(
            "decks",
            JSON.stringify({
              list: [
                {
                  title: "My first deck",
                  questions: [
                    {
                      question: "What's the best way to study?",
                      answer: "Mobile flashcards of course!"
                    },
                    {
                      question: "What color is the sky (usually...)",
                      answer: "Blue"
                    }
                  ]
                }
              ]
            })
          );
        }
      });
    AsyncStorage.getItem("score")
      .then(JSON.parse)
      .then(data => {
        if (data === null) {
          AsyncStorage.setItem(
            "score",
            JSON.stringify({
              score: 0
            })
          );
        }
      });
  }

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
        backgroundColor: "black"
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
  NewQuestion: {
    screen: NewQuestion,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: "black"
      },
      headerTintColor: "white",
      headerBackTitle: `Deck`,
      headerTruncatedBackTitle: "Back to Deck"
    })
  },
  Score: {
    screen: Score,
    navigationOptions: () => ({
      header: null
    })
  },
  Question: {
    screen: Question,
    navigationOptions: () => ({
      header: null
    })
  }
});
