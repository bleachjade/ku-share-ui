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
import HomeScreenLecturesItem from "./HomeScreenLecturesItem";

import MyHeaderIcon from "./MyHeaderIcon";

const HomeScreenLecturesTab = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.tabTitle}>
        <Text style={styles.descriptionText}>{props.tabTitle}</Text>
        <View style={styles.tabIcon}>
          <MyHeaderIcon
            iconName="ios-arrow-forward-outline"
            style={{ marginLeft: -10 }}
            onPress={() => {}}
            color="black"
          />
        </View>
      </View>
        <ScrollView contentContainerStyle={styles.lectureContainers} horizontal={true}>
          <HomeScreenLecturesItem />
          <HomeScreenLecturesItem />
          <HomeScreenLecturesItem />
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    height: 220,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: Colors.primaryColor,
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
  tabTitle: {
    flexDirection: "row",
    width: 387,
    flex: 1,
    justifyContent: "space-between",
  },
  tabIcon: {
    paddingRight: 15,
  },
});

export default HomeScreenLecturesTab;
