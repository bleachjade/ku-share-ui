import React from "react";
import { useState, createRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Button,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useDispatch } from "react-redux";

import Loader from "../../components/Loader";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";


const LoginScreen = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const passwordInputRef = createRef();

  const backgroundImage = require('../../assets/login_bg.png');

  const dispatch = useDispatch();

  const formModeSwitch = () => {
    setIsSignUp((prevState) => !prevState);
  };

  const formChangeHandler = () => {
    setFormIsValid(true);
    if (userEmail === "") {
      Alert.alert("Please enter Email!", "Email cannot be blank!", [
        { text: "Okay" },
      ]);
      setFormIsValid(false);
    }
    if (userPassword === "") {
      Alert.alert("Please enter Password!", "Password cannot be blank!", [
        { text: "Okay" },
      ]);
      setFormIsValid(false);
    }
  };
  const handleFormSubmit = () => {
    if (formValid) {
      console.log("form is valid");
      if (!isSignUp) {
        console.log("login");
        console.log({ userEmail, userPassword });
        dispatch(authActions.login(userEmail, userPassword));
      } else {
        console.log("sign up");
        console.log({ userEmail, userPassword });
        dispatch(authActions.signup(userEmail, userPassword));
      }
    } else {
      console.log("form is not valid!");
      Alert.alert("Forms is not valid!", "Please make sure the form(s) are valid and is not empty!", [
        { text: "Okay" },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ImageBackground source={backgroundImage} resizeMode='cover' style={styles.background}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
          <Button
            title="< Back"
            style={styles.backButton}
            onPress={() => navigation.goBack()}
        />
        <Image
          source={require("../../assets/drawer-logo2x.png")}
          style={{ width: "100%", height: 60, resizeMode: "contain", margin: 10 }}
        />
        
        <View>
          <Loader loading={false} />

          <View style={styles.inputBoxesContainer}>
            
            <View>
              <TextInput
                style={styles.textInputEmail}
                onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                placeholder="E-mail" //dummy@abc.com
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current && passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
              <TextInput
                style={styles.textInputEmail}
                onChangeText={(UserPassword) => setUserPassword(UserPassword)}
                placeholder="Password" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="done"
              />
              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={handleFormSubmit}
              >
                <Text style={styles.buttonTextStyle}>
                  {isSignUp ? "Sign Up" : "Login"}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={formModeSwitch}
              >
                <Text style={styles.buttonTextStyle}>
                  Switch to {isSignUp ? "Login" : "Sign Up"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
background: {
    flex: 1,
    justifyContent: 'center',
    },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.baseBackground,
    width: "100%",
  },
  textInputEmail: {
    borderRadius: 15,
    backgroundColor: "white",
    width: 305,
    height: 46,
    marginVertical: 14,
    padding: 10,
  },
  inputBoxesContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    width: "80%",
    height: 250,
    marginVertical: 30,
    padding: 30,
    backgroundColor: Colors.boxes,
    borderRadius: 15,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  buttonStyle: {
    backgroundColor: Colors.accentColor,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: "white",
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: 'bold'
  },
  backButton: {
      position: "absolute"
  }
});

export default LoginScreen;
