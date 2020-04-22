import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import DetalleScreen from "./src/screens/DetalleScreen";

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import ChatScreen from "./src/screens/ChatScreen";
import OtrosScreen from "./src/screens/OtrosScreen";
import { View } from "react-native";

const navigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Detalle: DetalleScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Titulo",
    },
  }
);

export default createAppContainer(
  createMaterialBottomTabNavigator(
    {
      Home: {
        screen: navigator,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => {
            <View>
              <Icon style={[{ color: tintColor }]} size={25} name={'ios-home'} />
            </View>;
          },
        },
        showIcon: true
      },
      Otros: {
        screen: OtrosScreen,
      },
      Chat: {
        screen: ChatScreen,
      },
    },
    {
      initialRouteName: "Home",
      activeColor: "black",
      inactiveColor: "black",
      barStyle: { backgroundColor: '#fff' }
    }
  )
);
