import React from "react";
import { View, StyleSheet } from "react-native";
import { Header, Input, ListItem } from "react-native-elements";

const list = [
  {
    name: 'Carlitos Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Hola'
  },
  {
    name: 'Juanita Gonzalez',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Hola, como estas?'
  },
  {
    name: 'Martin Perez',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Gracias'
  }
]

const ChatScreen = ({ navigation }) => {
  return (
    <View>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Chat', style: { color: '#fff' } }}
        rightComponent={{ icon: 'person-add', color: '#fff' }}
      />
      <View>
        {
          list.map((l, i) => (
            <ListItem
              key={i}
              leftAvatar={{ source: { uri: l.avatar_url } }}
              title={l.name}
              subtitle={l.subtitle}
              bottomDivider
            />
          ))
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ChatScreen;
