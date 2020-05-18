import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { isEmpty } from "lodash";
import { validateEmail } from "../../Utils/Validations";
import { useNavigation } from "@react-navigation/native";
import * as firebase from "firebase";
import Loading from "../Loading";

export default function LoginForm(props) {
  const { toastRef } = props;
  const navigation = useNavigation();
  const [ShowPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(defaultFormValue());
  const [loading, setLoading] = useState(false);

  //Esto toma los datos ingresados enl os input y los lleva al form data para enviarlos al firebase
  //Funcion
  const onChange = (e, type) => {
    setFormData({
      ...formData,
      [type]: e.nativeEvent.text
    });
  };

  //Esta es la que se activa cuando envio el formulario con el boton de Iniciar Sesion
  //Funcion
  const onSubmit = () => {
    if (isEmpty(formData.email) || isEmpty(formData.password)) {
      toastRef.current.show("Todos los campos son obligatorios!");
    } else if (!validateEmail(formData.email)) {
      toastRef.current.show("El email no es valido!");
    } else {
      setLoading(true);
      firebase
        .auth()
        .signInWithEmailAndPassword(formData.email, formData.password)
        .then(() => {
          setLoading(true);
          navigation.navigate("account");
        })
        .catch(() => {
          setLoading(true);
          toastRef.current.show("Email o Password invalidos! Verifique!");
        });
    }
  };

  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Correo Electronico"
        containerStyle={styles.inputForm}
        onChange={e => onChange(e, "email")}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.iconRight}
          />
        }
      />
      <Input
        placeholder="Password"
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={ShowPassword ? false : true}
        onChange={e => onChange(e, "password")}
        rightIcon={
          <Icon
            type="material-community"
            name={ShowPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.iconRight}
            onPress={() => setShowPassword(!ShowPassword)}
          />
        }
      />
      <Button
        title="Iniciar Sesion"
        containerStyle={styles.btnContainerLogin}
        buttonStyle={styles.btnLogin}
        onPress={onSubmit}
      />
      <Loading isVisible={loading} text="Iniciando Sesion" />
    </View>
  );
}

//funcion para construir el objeto con los valores a cargar del formulario, prolijidad
function defaultFormValue() {
  return {
    email: "",
    password: ""
  };
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
  },
  inputForm: {
    width: "100%",
    margin: 20
  },
  btnContainerLogin: {
    marginTop: 20,
    width: "95%"
  },
  btnLogin: {
    backgroundColor: "#00a680"
  },
  iconRight: {
    color: "#c1c1c1"
  }
});
