import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  HeaderSearchBar,
  HeaderClassicSearchBar,
} from "react-native-header-search-bar";

import HomeScreenLecturesTab from "../../components/HomeScreenLecturesTab";
import HomeScreenNewsTab from "../../components/HomeScreenNewsTab";

import Colors from "../../constants/Colors";

const Home = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#fff",
        borderBottomWidth: 0,
        shadowColor: "transparent",
      },
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <HeaderClassicSearchBar
          searchBoxWidth={"90%"}
          searchBoxBorderRadius={12}
          searchBoxText={"Search Lectures..."}
          onChangeText={(text) => console.log(text)}
        />
      </View>
      <HomeScreenNewsTab />
      <HomeScreenLecturesTab tabTitle={"New Lectures"} />
      <HomeScreenLecturesTab tabTitle={"Trending"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.primaryBackground,
  },
  text: {
    fontSize: 20,
    color: "white",
  },
  searchBar: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 22
  }
});

export default Home;
