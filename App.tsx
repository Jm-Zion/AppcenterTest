/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, {Fragment} from 'react';
import {BottomNavigation} from './src/navigators/tab.navigator';
import { View } from 'react-native';
import { createAppContainer, createStackNavigator} from 'react-navigation'
import codePush from "react-native-code-push";

const AppContainer = createAppContainer(BottomNavigation);

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <AppContainer style={{ backgroundColor: "#4527A0" }} />
    </View>
  );
};


export default codePush(codePushOptions)(App);