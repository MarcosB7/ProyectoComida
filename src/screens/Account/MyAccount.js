import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import * as firebase from "firebase";
import Loading from "../../components/Loading";
import UserGuest from "./UserGuest";
import UserLogged from "./UserLogged";

export default function MyAccount() {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      //esto devuelve los datos comprobandolos contra firebase
      console.log(user);
      !user ? setLogin(false) : setLogin(true);
    });
  }, []); //los parentesis rectos indica que cuando algo sea modificado se tiene que vovler a ejecutar

  if (login === null) return <Loading isVisible={true} text="Cargando" />;

  return login ? <UserLogged /> : <UserGuest />;
}
