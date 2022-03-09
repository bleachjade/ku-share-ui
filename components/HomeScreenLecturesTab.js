import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import { NavigationActions } from 'react-navigation'
import { useNavigation } from "@react-navigation/native";

import Colors from "../constants/Colors";
import HomeScreenLecturesItem from "./HomeScreenLecturesItem";

import MyHeaderIcon from "./MyHeaderIcon";

const HomeScreenLecturesTab = (props) => {
  const navigation = useNavigation();
  const { tabTitle } = props
  
  const changeScreenHandler = () => {
    const screenRoute = tabTitle.split(' ').join('') + "Screen";
    navigation.navigate("LinkToLectureRegistrationScreen", {screen: screenRoute});
  };
  return (
    <View style={styles.container}>
      <View style={styles.tabTitle}>
        <Text style={styles.descriptionText}>{tabTitle}</Text>
        <View style={styles.tabIcon}>
          <MyHeaderIcon
            iconName="ios-arrow-forward-outline"
            style={{ marginLeft: -10 }}
            onPress={changeScreenHandler}
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
    marginTop: 0,
    padding: 12,
    height: 220,
    flexDirection: "column",
    alignItems: "center",
    // backgroundColor: Colors.primaryColorOpacityDown,
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
