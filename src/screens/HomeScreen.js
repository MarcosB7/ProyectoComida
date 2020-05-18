import React from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";
import { Header } from "react-native-elements";
import ProductosHome from "../components/ProductosHome";

export default function HomeScreen() {
  return (
    <View>
      <Text>Estamos en Home</Text>
    </View>
  );
}

/*
Comento porque da error, hay que adaptar
const HomeScreen = ({ navigation }) => {

  return (
    <View>
      
      <Header
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{ text: "Publicaciones", style: { color: "#fff" } }}
        // rightComponent={{ icon: "home", color: "#fff" }}
      />
      <ProductosHome />
      {/* Agregar Bottom Tab Navigator }
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
*/
