import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";

import Colors from "../constants/Colors";
import HomeScreenNewsItem from "./HomeScreenNewsItem";

import MyHeaderIcon from "./MyHeaderIcon";

const HomeScreenNewsTab = (props) => {
  return (
    <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.lectureContainers} horizontal={true}>
          <HomeScreenNewsItem />
          <HomeScreenNewsItem />
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    padding: 12,
    height: 230,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: Colors.primaryBackground,
    marginRight: 0,
    paddingRight: 0,
  },
  lectureContainers: {
    width: 387,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  descriptionText: {
    fontFamily: "Prompt",
    fontSize: 15,
    fontWeight: "normal",
    color: "black",
    marginBottom: 10,
  },
});

export default HomeScreenNewsTab;
