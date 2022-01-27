import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import React from "react";

import Card from "./Card";

const HomeScreenLecturesItem = () => {
  return (
    <Card>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageStyle}
          source={require("../assets/MockupLecturesIcons/mockup-lecture-icon1.png")}
        ></ImageBackground>
        <LinearGradient 
        colors={['rgba(0,0,0,0) 0%', 'rgba(0,0,0,0.5) 100%']}
        style={styles.lectureTitleBackground}>
          <Text style={styles.lectureTitle} numberOfLines={1} ellipsizeMode='end'>Lecture Description</Text>
        </LinearGradient>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 130,
    width: 110,
    marginHorizontal: 10,
  },
  imageStyle: { flex: 1, resizeMode: "cover" },
  lectureTitle: {
    paddingBottom: 10,
    paddingHorizontal: 4,
    fontFamily: "Prompt",
    fontSize: 11,
    fontWeight: "normal",
    color: "white",
    textShadowColor: 'rgba(0, 0, 0, 0.25)'
  },
  lectureTitleBackground: {
    height: "50%",
    position: "absolute",
    bottom: 0,
    width: '100%',
    justifyContent: "flex-end",
    alignItems: "center"
  },
});

export default HomeScreenLecturesItem;
