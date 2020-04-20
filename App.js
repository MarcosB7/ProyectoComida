import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import DetalleScreen from "./src/screens/DetalleScreen";

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

export default createAppContainer(navigator);
