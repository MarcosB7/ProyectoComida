import React from "react";
import { Icon } from "react-native-elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, TabActions } from "@react-navigation/native";

import HomeScreenStack from "./HomeScreenStack";
import MyAccount from "./AccountStack";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="homescreen"
        tabBarOptions={{
          inactiveTintColor: "#646464",
          activeTintColor: "#00a680"
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color)
        })}
      >
        <Tab.Screen
          name="homescreen"
          component={HomeScreenStack}
          options={{ title: "Home Screen" }}
        />
        <Tab.Screen
          name="account"
          component={MyAccount}
          options={{ title: "Mi Perfil" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function screenOptions(route, color) {
  let iconName;
  switch (route.name) {
    case "homescreen":
      iconName = "home-outline";
      break;
    case "account":
      iconName = "account-circle";
      break;
  }

  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
}
