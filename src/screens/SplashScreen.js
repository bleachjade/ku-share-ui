import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, StyleSheet, Image, Text } from "react-native";
import { useDispatch } from "react-redux";

const SplashScreen = ({navigation}) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {navigation.replace("InstructionPage")}, 2000);
    return () => {clearTimeout(timer)};
  }, [])
  
  const dispatch = useDispatch();
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
