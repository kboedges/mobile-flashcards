import React from "react";
import { View } from "react-native";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { Provider } from "react-redux";
import { setLocalNotification } from "./utils/helpers";
import { initialLoadDecks, initialLoadScore, clearAllTesting } from "./utils/api";
import { Stack } from "./utils/routes";
import { MobileStatusBar } from "./utils/status-bar";

const store = createStore(reducer, compose(applyMiddleware(thunk)));

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
    initialLoadDecks();
    initialLoadScore();
    // clearAllTesting();
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
