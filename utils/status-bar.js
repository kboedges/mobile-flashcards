import React from "react";
import { View, StatusBar } from "react-native";
import { Constants } from "expo";

export function MobileStatusBar() {
  return (
    <View style={{ backgroundColor: "black", height: Constants.statusBarHeight }}>
      <StatusBar translucent barStyle="light-content" />
    </View>
  );
}
