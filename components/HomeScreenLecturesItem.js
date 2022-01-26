import { View, Text, StyleSheet, ImageBackground } from "react-native";
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
        <View style={styles.lectureTitle}>
          <Text style={styles.descriptionText}>Lecture Description</Text>
        </View>
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
  descriptionText: {
    paddingBottom: 50,
    fontFamily: "Prompt",
    fontSize: 11,
    fontWeight: "normal",
    color: "white",
  },
  lectureTitle: {
    backgroundColor: "black",
    height: 20,
  },
});

export default HomeScreenLecturesItem;
