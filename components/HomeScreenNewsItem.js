import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from "react-native";
import React from "react";

import Card from "./Card";
import Colors from "../constants/Colors";

const HomeScreenNewsItem = (props) => {
  const title = props.title;
  const content = props.content;
  const image = props.image;
  const category = props.category;
 
  let TouchableCmp = TouchableOpacity;

  return (
    <View style={styles.customCard}>
      <TouchableCmp onPress={props.onSelect}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageStyle}
          source={{ uri: image }}
        ></ImageBackground>
        <View style={styles.newsTitle}>
          <Text style={styles.title} ellipsizeMode='tail' numberOfLines={1}>{title}</Text>
          <Text style={styles.descriptionText2} ellipsizeMode='tail' numberOfLines={1}>{category}</Text>
        </View>
      </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "white",
    height: 195,
    width: 200,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  imageStyle: {
    flex: 1,
    resizeMode: "cover",
    height: "100%",
    borderRadius: 10,
    overflow: "hidden"
  },
  newsTitle: {
    padding: 8,
    backgroundColor: "white",
    flexDirection: "column",
    height: 55,
    borderRadius: 10,
  },
  title: {
    fontFamily: "Prompt",
    fontSize: 12,
    fontWeight: "normal",
    color: "black",
  },
  descriptionText2: {
    paddingBottom: 10,
    fontFamily: "Prompt",
    fontSize: 12,
    fontWeight: "normal",
    color: Colors.primaryColor,
  },
  customCard: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 10,
  },
});

export default HomeScreenNewsItem;
