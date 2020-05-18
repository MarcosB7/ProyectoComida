import React from "react";
import Navigation from "./src/components/Navigation/Navigation";
import { Button, Icon } from "react-native-elements";
import { firebaseApp } from "./src/Utils/FireBase";

export default function App() {
  return <Navigation />;
}

/*import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import DetalleScreen from "./src/screens/DetalleScreen";

// import Ionicons from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import ChatScreen from "./src/screens/ChatScreen";
import OtrosScreen from "./src/screens/OtrosScreen";
//import NuevaPublicacion from "./src/screens/NuevaPublicacionScreen";
import { View } from "react-native";

const navigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false
      }
    },
    Detalle: DetalleScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Titulo"
    }
  }
);

navigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible
  };
};

export default createAppContainer(
  createMaterialBottomTabNavigator(
    {
      Home: {
        screen: navigator,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="ios-home" color={tintColor} size={25} />
          )
        },
        showIcon: true
      },
      // Otros: {
      //   screen: OtrosScreen,
      // },
      Nueva: {
        screen: NuevaPublicacion,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="ios-add" color={tintColor} size={30} />
          )
        }
      },
      Chat: {
        screen: ChatScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="ios-people" color={tintColor} size={25} />
          )
        }
      }
    },
    {
      initialRouteName: "Home",
      activeColor: "black",
      inactiveColor: "black",
      barStyle: { backgroundColor: "#fff" }
    }
  )
);
*/
