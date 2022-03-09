import React, { useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SearchBar } from 'react-native-elements';

import HomeScreenLecturesTab from "../../components/HomeScreenLecturesTab";
import HomeScreenNewsTab from "../../components/HomeScreenNewsTab";
import Colors from "../../constants/Colors";
import MyHeaderIcon from "../../components/MyHeaderIcon";


const NewLecturesScreen = (props) => {

  useLayoutEffect(() => {
    props.navigation.setOptions({
      // headerTitle: "Previously Registered List",
      // headerLeft: () => (
      //   <MyHeaderIcon
      //     iconName="ios-menu"
      //     style={{ marginLeft: -10 }}
      //     onPress={() => {
      //       props.navigation.toggleDrawer();
      //     }}
      //   />
      // ),
      headerRight: () => (
        <MyHeaderIcon
          iconName="ios-create"
          style={{ marginRight: -4, marginBottom: 1 }}
          onPress={() => {
            // props.navigation.push("RegistrationAddEdit");
            console.log("add new lecture")
          }}
        />
      ),
    });
  }, [props.navigation]);

  return (
    <View>
      <Text>NewLecturesScreen</Text>
    </View>
  )
}

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

export default NewLecturesScreen