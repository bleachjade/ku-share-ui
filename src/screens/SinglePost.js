import React, { useLayoutEffect } from 'react';
import { View, Image, ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from "react-redux";

import SinglePdfView from './SinglePdfView';

import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const SinglePost = (props) => {
  const allLectures = useSelector(
    (state) => state.registration.prevLectures
  );
  const authUserProfile = useSelector((state) => state.auth.userProfile);



  let selectedId = props.route.params.itemId;
  let copiedItem = allLectures.map((item) => item);
  let filteredItem = copiedItem.find((item) => item.id == selectedId);
    
  let singlePostImage = { uri : filteredItem.thumbnail.url };

  let authorImage = require("../../assets/icon.png");

  return (
    <View style={styles.container}>
        <View style={styles.thumbnailContainer}>
            <TouchableOpacity onPress={() => {
              props.navigation.navigate("SinglePdfView", {
                receivedUrl: filteredItem.filePath,
              });
            }}>
              <Image source={singlePostImage} resizeMode='cover' style={styles.singlePostImage} />
            </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
            
            <Text style={styles.headerText}>Lecture’s Name: { filteredItem.title }</Text>
            <Text style={styles.secondaryText}>Description: { filteredItem.description }</Text>
            <Text style={styles.secondaryText}>Subject: { filteredItem.subject }</Text>

            <View style={styles.authorBoxContainer}>
                <View style={styles.authorBoxWrapper}>
                    <Image source={authorImage} resizeMode='cover' style={styles.authorImage}></Image>
                    <Text style={styles.authorName}> Email: { authUserProfile.email }</Text>  
                </View>  
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: Colors.primaryColorOpacityDown,
    fontFamily: Fonts.primaryFont
  },
  thumbnailContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  singlePostImage: {
    width: 198,
    height: 256,
    marginTop: 40,
    marginBottom: 20,
  },
  infoContainer: {
    // flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    fontFamily: Fonts.primaryFont,
    marginVertical: 6,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
  },
  secondaryText: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    marginTop: 20,
  },
  authorBoxContainer: {
    marginVertical: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  authorBoxWrapper: {
    width: 400,
    maxHeight: 60,
    backgroundColor: Colors.primaryColor,
    color: '#fff',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 100,
    shadowOffset: {
        width: 3,
        height: 3
    },
    shadowColor: '#fff',
    shadowOpacity: 0.5
  },
  authorImage: {
    width: 45,
    height: 45,
    borderRadius: 100,
    marginRight: 15
  },
  authorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  }
});

export default SinglePost;