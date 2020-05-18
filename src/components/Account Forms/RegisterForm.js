import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { validateEmail } from "../../Utils/Validations";
import { size, isEmpty } from "lodash";
import * as firebase from "firebase";
import { useNavigation } from "@react-navigation/native";
import Loading from "../Loading";

export default function RegisterForm(props) {
  const { toastRef } = props; //destructuring del Toast que viene por props
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [formData, setFormData] = useState(defaultFormValue);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  //funcion para registrar los datos en el objeto formData
  //tambien estan las validaciones
  const onSubmit = () => {
    if (
      isEmpty(formData.email) ||
      isEmpty(formData.password) ||
      isEmpty(formData.repeatPassword)
    ) {
      toastRef.current.show("Todos los campos son obligatorios!");
    } else if (!validateEmail(formData.email)) {
      toastRef.current.show("Email no es valido!");
    } else if (formData.password !== formData.repeatPassword) {
      toastRef.current.show("Las contrasenas tienen que ser iguales!");
    } else if (size(formData.password) < 6) {
      toastRef.current.show(
        "La contrasena tiene que tener almenos 6 caracteres!"
      );
    } else {
      setLoading(true);
      firebase
        .auth()
        .createUserWithEmailAndPassword(formData.email, formData.password)
        .then(() => {
          setLoading(false);
          navigation.navigate("account");
        })
        .catch(() => {
          setLoading(false);
          toastRef.current.show("El email ya esta en uso! Prueba con otro.");
        });
    }
  };

  //funcion para rellenar los datos del formulario
  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text }); //actualizo el objeto
    //los 3 puntos, el spread operator, hacen una copia del objeto que se esta trabajando
  };

  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Correco Electronico"
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
        secureTextEntry={showPassword ? false : true}
        onChange={e => onChange(e, "password")}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.iconRight}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />
      <Input
        placeholder="Confirm Password"
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={showRepeatPassword ? false : true}
        onChange={e => onChange(e, "repeatPassword")}
        rightIcon={
          <Icon
            type="material-community"
            name={showRepeatPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.iconRight}
            onPress={() => setShowRepeatPassword(!showRepeatPassword)}
          />
        }
      />
      <Button
        title="Registrar"
        containerStyle={styles.containerBtnRegister}
        buttonStyle={styles.btnRegister}
        onPress={onSubmit}
      />
      <Loading isVisible={loading} text="Crear Cuenta" />
    </View>
  );
}

//funcion para crear el objeto que se rellena con los input
function defaultFormValue() {
  return {
    email: "",
    password: "",
    repeatPassword: ""
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
    marginTop: 20
  },
  containerBtnRegister: {
    marginTop: 20,
    width: "95%"
  },
  btnRegister: {
    backgroundColor: "#00a680"
  },
  iconRight: {
    color: "#c1c1c1"
  }
});
