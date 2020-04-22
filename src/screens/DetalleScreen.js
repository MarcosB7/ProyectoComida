import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Tile, Button } from "react-native-elements";

const DetalleScreen = ({ navigation }) => {
  const prod = navigation.getParam("prod");

  return (
    <View style={{ flex: 1 }}>
      <Tile
        imageSrc={{ uri: prod.foto }}
        title={prod.titulo}
        contentContainerStyle={{ height: 70 }}>
        <View style={styles.tile}>
          <Text>{prod.dueno}</Text>
          <Text>{prod.distancia}</Text>
        </View>
      </Tile>
      <View style={styles.viewBtn}>
        <TouchableOpacity style={styles.touchable}>
          <Text style={styles.textoBtn}>Solicitar Producto</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tile: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textoBtn: {
    color: "white", 
    fontSize: 16
  },
  viewBtn:{
    flex: 1, 
    justifyContent: "flex-end"
  },
  touchable: {
    width: "100%",
    height: 40,
    backgroundColor: "#38630e",
    alignItems: "center",
    justifyContent: "center",
    marginBottom:20,
  },
});

export default DetalleScreen;
