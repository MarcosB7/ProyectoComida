import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/HomeScreen";

const Stack = createStackNavigator();

export default function HomeScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="homescreen"
        component={HomeScreen}
        options={{ title: "Home Screen" }}
      />
    </Stack.Navigator>
  );
}
