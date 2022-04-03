import React, { useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SearchBar } from 'react-native-elements';
import {
  HeaderSearchBar,
  HeaderClassicSearchBar,
} from "react-native-header-search-bar";

import HomeScreenLecturesTab from "../../components/HomeScreenLecturesTab";
import HomeScreenNewLecturesTab from "../../components/HomeScreenNewLecturesTab";
import HomeScreenNewsTab from "../../components/HomeScreenNewsTab";

import List from "../../components/List";

import Colors from "../../constants/Colors";

const Home = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#222",
        borderBottomWidth: 0,
        shadowColor: "transparent",
      },
      headerTransparent: {

      },
    });
  }, [navigation]);

  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
      </View>
      <ScrollView 
        contentContainerStyle={styles.scrollContainers} 
        horizontal={false} 
        scrollEnabled={true} 
        bounces={false} 
        showsVerticalScrollIndicator={false} 
        >
        <HomeScreenNewsTab />
        <HomeScreenLecturesTab tabTitle={"All Lectures"} />
        <HomeScreenNewLecturesTab tabTitle={"New Lectures"} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.primaryColorOpacityDown
  },
  text: {
    fontSize: 20,
    color: "white",
  },
  searchBarContainer: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 22,
    flex: 1,
    paddingVertical: 20,
  },
  scrollContainers: {
    flexDirection: "column",
    alignItems: "flex-start",
  }
});

export default Home;
