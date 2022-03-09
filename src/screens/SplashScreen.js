import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, StyleSheet, Image, Text } from "react-native";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

import * as authActions from "../../store/actions/auth"

const SplashScreen = ({navigation}) => {
  const [animating, setAnimating] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    // setTimeout(() => {
    //   setAnimating(false);
    //   //Check if user_id is set or not
    //   //If not then send for Authentication
    //   //else send to Home Screen
    //   navigation.replace('AuthenticationScreen');
    // }, 3000);
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem("userData");
      if (!userData) {
        console.log("cannot find user data");
        navigation.replace("InstructionPage");
        return;
      }

      const transformedData = JSON.parse(userData);
      const {
        token,
        userId,
        expiryDate,
        displayName,
        briefInfo,
        phoneNumber,
        facebook,
        twitter,
        homeAddress,
        age,
        profileImage,
      } = transformedData;
      const expirationDate = new Date(expiryDate);

      const userProfile = {
        briefInfo: briefInfo,
        phoneNumber: phoneNumber,
        facebook: facebook,
        twitter: twitter,
        homeAddress: homeAddress,
        age: age,
        profileImage: profileImage,
      };

      if (expirationDate <= new Date() || !token || !userId) {
        console.log("token expired");
        navigation.replace("InstructionPage");
        return;
      }

      navigation.replace("DrawerMenu");
      dispatch(
        authActions.authenticate(userId, token, displayName, userProfile)
      );
    };
    tryLogin();
  }, [dispatch]);

  // useEffect(() => {
  //   const timer = setTimeout(() => {navigation.replace("InstructionPage")}, 2000);
  //   return () => {clearTimeout(timer)};
  // }, [])
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Logo1.png")}
        style={{ width: "70%", resizeMode: "contain", margin: 30 }}
      />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#04DB8B",
  },
  activityIndicator: {
    alignItems: "center",
    height: 80,
  },
  loadingText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  loadingTextContainer: {
    width: "80%",
  },
});

export default SplashScreen;
