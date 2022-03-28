import React from 'react';
import { View, Image, ImageBackground, StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';
import { useSelector } from "react-redux";

import Fonts from '../../constants/Fonts';
import HomeScreenLecturesTab from "../../components/HomeScreenLecturesTab";
import HomeScreenLecturesItem from "../../components/HomeScreenLecturesItem";

const Profile = () => {
  const authUserProfile = useSelector((state) => state.auth.userProfile);
  const backgroundImage = require('../../assets/profile_bg.png');

  const profileImage = require('../../assets/icon.png');

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} resizeMode='cover' style={styles.background}>
          <Image source={profileImage} resizeMode='cover' style={styles.profileImage}></Image>
          <View style={styles.infoContainer}>
            <Text style={styles.headerText}>Basic Information</Text>
            {/* <Text style={styles.secondaryText}>Diana Yeun</Text> */}
            <Text style={styles.secondaryText}>Email: {authUserProfile.email}</Text>
          </View>
          <ScrollView 
            contentContainerStyle={styles.scrollContainers} 
            horizontal={false} 
            scrollEnabled={true} 
            bounces={false} 
            showsVerticalScrollIndicator={false} 
            >
            <HomeScreenLecturesTab tabTitle={"My Lectures"} />
            <HomeScreenLecturesTab tabTitle={"Favorite Lectures"} />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'transparent'
  },
  background: {
    flex: 1,
    width: "100%",
    height: "75%",
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    marginTop: 40,
    marginBottom: 20,
    borderRadius: 100,
  },
  infoContainer: {
    // flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    maxHeight: 100,
    fontFamily: Fonts.primaryFont,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  secondaryText: {
    fontSize: 22,
    fontWeight: "400",
    textAlign: "center",
    marginTop: 20,
  },
  scrollContainers: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: 20
  },
});

export default Profile;