import * as React from "react";
import { Component } from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-elements";

class CardHome extends Component {
  render() {
    return (
      <Card
        onPress={this.props.onPressPost}
        title={this.props.data.titulo}
        image={{uri: this.props.data.foto}}>
        <Text style={{marginBottom: 10}}> {this.props.data.dueno} </Text>
      </Card>
    );
  }
}

export default CardHome;
