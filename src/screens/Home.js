import React, { useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SearchBar } from 'react-native-elements';
import {
  HeaderSearchBar,
  HeaderClassicSearchBar,
} from "react-native-header-search-bar";

import HomeScreenLecturesTab from "../../components/HomeScreenLecturesTab";
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
      <SearchBar
        placeholder="Search Lecture Here..."
        onChangeText={updateSearch}
        value={search}
        containerStyle={styles.searchBar}
        inputContainerStyle={styles.searchInput}
      />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainers} horizontal={false}>
        <HomeScreenNewsTab />
        <HomeScreenLecturesTab tabTitle={"New Lectures"} />
        <HomeScreenLecturesTab tabTitle={"Trending Lectures"} />
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
    // flex: 1,
    // marginTop: 45,
    paddingTop: 50,
    paddingLeft: 50,
    paddingRight: 10,
    paddingBottom: 10,
  },
  searchBar: {
    backgroundColor: "white",
    borderWidth: 0,
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
    padding: 0,
  },
  searchInput: {
    backgroundColor: "white",
    borderColor: Colors.borderColor,
    borderWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 100,
    height: 40,
    padding: 0
  },
  scrollContainers: {
    flexDirection: "column",
    alignItems: "flex-start",
  }
});

export default Home;
