import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyAccount from "../../screens/Account/MyAccount";
import Login from "../../screens/Account/Login";
import Register from "../../screens/Account/Register";

const Stack = createStackNavigator();

//Sistema de rutas relacionado con las seccion mi perfil/cuentas
export default function AccountStacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="account"
        component={MyAccount}
        options={{ title: "Mi Perfil" }}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{ title: "Iniciar Sesion" }}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{ title: "Registro" }}
      />
    </Stack.Navigator>
  );
}
/*
 */
