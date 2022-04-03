import React, { useLayoutEffect } from 'react';
import { View, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { useSelector, useDispatch } from "react-redux";


import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const SingleNews = (props) => {
    // console.log(props.route.params);

    let singlePostImage = { uri : props.route.params.image };

  return (
    <View style={styles.container}>
        <View style={styles.thumbnailContainer}>
            <Image source={singlePostImage} resizeMode='cover' style={styles.singlePostImage} />
        </View>
        <ScrollView style={styles.infoContainer}>
            <Text style={styles.categoryText}>{ props.route.params.category }</Text>
            <Text style={styles.headerText}>{ props.route.params.title }</Text>
            <Text style={styles.contentText}>{ props.route.params.content }</Text>
        </ScrollView>
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
    width: "100%",
    height: 310,
    marginTop: 0,
    marginBottom: 20,
  },
  infoContainer: {
    // flex: 1,
    // flexDirection: "column",
    // justifyContent: "space-evenly",
    fontFamily: Fonts.primaryFont,
    marginVertical: 6,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 20,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
    backgroundColor: Colors.primaryColor,
    color: '#fff',
    padding: 10,
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  contentText: {
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    marginTop: 20,
  }
});

export default SingleNews;