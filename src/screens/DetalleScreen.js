import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView
} from "react-native";
import { Tile, Button } from "react-native-elements";
import Map from "../components/Map";


const DetalleScreen = ({ navigation }) => {
  const prod = navigation.getParam("prod");

  return (
    <View style={{ flex: 1,  }}>
      <ScrollView style={styles.scrollView}>
        <Tile
          imageSrc={{ uri: prod.foto }}
          title={prod.titulo}
          contentContainerStyle={{ height: 70 }}>
          <View style={styles.tile}>
            <Text>{prod.dueno}</Text>
            <Text>{prod.distancia}</Text>
          </View>
        </Tile>
        <View style={styles.margin}>
          <View style={styles.mapa}>
            <Map />
          </View>

          <View style={styles.viewBtn}>
            <TouchableOpacity style={styles.touchable}>
              <Text style={styles.textoBtn}>Solicitar Producto</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  margin: {
    marginHorizontal: 20
  },
  scrollView: {
  	height: 100
  },
  tile: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textoBtn: {
    color: "white",
    fontSize: 16
  },
  viewBtn: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  },
  touchable: {
    width: "100%",
    height: 40,
    backgroundColor: "#38630e",
    alignItems: "center",
    justifyContent: "center",
    // marginBottom:20,
    marginTop: 30,
    borderRadius: 10,
    bottom: 0,
    // top: 0,

  },
});

export default DetalleScreen;
