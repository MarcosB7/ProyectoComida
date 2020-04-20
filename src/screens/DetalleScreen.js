import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import { Tile } from "react-native-elements";

const DetalleScreen = ({ navigation }) => {
  const prod = navigation.getParam("prod");

  console.log(prod);

  return (
    <Tile
      imageSrc={{ uri: prod.foto }}
      title={ prod.titulo }
      contentContainerStyle={{ height: 70 }}>
      <View
        style={styles.tile}>
        <Text>{prod.dueno}</Text>
        <Text>{prod.distancia}</Text>
      </View>
    </Tile>
  );
};

const styles = StyleSheet.create({
    tile: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    }
});

export default DetalleScreen;
