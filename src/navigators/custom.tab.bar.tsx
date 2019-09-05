

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const S = StyleSheet.create({
  container: { flexDirection: "row", height: 52, elevation: 2, zIndex: 9999 },
  tabButton: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export const TabBar = props => {
  const {
    renderIcon,
    getLabelText,
    activeTintColor,
    inactiveTintColor,
    onTabPress,
    onTabLongPress,
    getAccessibilityLabel,
    navigation,
  } = props;

  const { routes, index: activeRouteIndex } = navigation.state;

  return (
    <View style={S.container}>
      <LinearGradient
        style={{
          left: 0,
          right: 0,
          bottom: 0,
          height: 70,
          position: "absolute",
        }}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.3 }}
        colors={["rgba(255,255,255,0)", "#fff"]}
      />
      {routes.map((route, routeIndex) => {
        const isRouteActive = routeIndex === activeRouteIndex;
        const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;

        return (
          <TouchableOpacity
            key={routeIndex}
            style={S.tabButton}
            onPress={() => {
              onTabPress({ route });
            }}
            onLongPress={() => {
              onTabLongPress({ route });
            }}
            accessibilityLabel={getAccessibilityLabel({ route })}
          >
            {renderIcon({ route, focused: isRouteActive, tintColor })}

            <Text>{getLabelText({ route })}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

