import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import HomeScreenLecturesTab from '../../components/HomeScreenLecturesTab';

import Colors from '../../constants/Colors';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <HomeScreenLecturesTab tabTitle={"New Lectures"}/>
      <HomeScreenLecturesTab tabTitle={"Trending"}/>
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
    color: 'white'
  }
});

export default Home;