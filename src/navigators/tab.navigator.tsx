import React from 'react';
import {
  createBottomTabNavigator,
  NavigationBottomTabRouterConfig,
  NavigationScreenProps,
} from "react-navigation";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { View, StyleSheet } from "react-native";
import { FlatList } from 'react-native-gesture-handler';
import { TabBar } from './custom.tab.bar';
import LinearGradient from 'react-native-linear-gradient';
import Text from '../shared-components/text/components/text.component';

const DummyComponent = () => (
  <View style={[StyleSheet.absoluteFillObject, {top: 0, bottom: -50, right: 0, left: 0}]}>
    <Text>
      Hello !<Icon name="map" color="white" size={24} />
    </Text>
    <FlatList
      style={{ flex: 1, backgroundColor: "transparent" }}
      data={[
        "Banana",
        "Apple",
        "Pear",
        "Strawberry",
        "BlueBerry",
        "Orange",
        "Pineapple",
      ]}
      renderItem={({ item }) => (
        <View
          style={{
            backgroundColor: "gray",
            margin: 10,
            elevation: 5,
            height: 150,
            width: "90%",
          }}
        >
          <Text>{item}</Text>
        </View>
      )}
    />
  </View>
);

Object.assign(DummyComponent, {
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            return <Icon name="map" color="#311B92" size={24} style={{zIndex: 101}} />;
        },
        title: "Dummy",
        tabBarOptions: {
          tabBarLabel: "Label",
          backgroundColor: 'transparent'
        }
    }),
});


export const BottomNavigation = createBottomTabNavigator(
         {
           Home: {
             screen: DummyComponent,
           },
           Pref: {
             screen: DummyComponent,
           },
           Map: {
             screen: DummyComponent,
           },
         },
         {
           tabBarComponent: TabBar,
           activeColor: "#311B92",
           barStyle: {
             shadowColor: "transparent",
             elevation: 0,
             shadowRadius: 0,
             shadowOffset: {
               height: 0,
             },
             backgroundColor: "transparent",
           },
           style: {
             backgroundColor: "transparent",
           },
         },
       );

interface IProps {
    navigation: NavigationScreenProps;
}
