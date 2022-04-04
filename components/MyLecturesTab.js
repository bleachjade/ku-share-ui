import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as lectureRegistrationAction from "../store/actions/lecture";

import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import Colors from "../constants/Colors";
import HomeScreenLecturesItem from "./HomeScreenLecturesItem";

import MyHeaderIcon from "./MyHeaderIcon";

const MyLecturesTab = (props) => {
  const navigation = useNavigation();
  const { tabTitle } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const previouslyRegisteredLectured = useSelector(
    //import registered lectures
    (state) => state.registration.prevLectures
  );

  const authUserId = useSelector((state) => state.auth.userId);

  let filteredItem = [];

  for (let num = 0; num <= previouslyRegisteredLectured.length-1; num++) {
      if(previouslyRegisteredLectured[num].userId == undefined){
        continue;
      }
      else if(previouslyRegisteredLectured[num].userId != authUserId){
        continue;
      }
      filteredItem.push(previouslyRegisteredLectured[num]);
  }


  const loadRegis = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(lectureRegistrationAction.fetchLectures());
    } catch (err) {
      setError(err.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    setIsLoading(true);
    loadRegis().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadRegis]);

  const changeScreenHandler = () => {
    // const screenRoute = tabTitle.split(" ").join("") + "Screen";
    const screenRoute = "AllLecturesScreen";
    console.log(screenRoute);
    navigation.navigate(screenRoute);
  };
  return (
    <View style={styles.container}>
      <View style={styles.tabTitleContainer}>
        <Text style={styles.descriptionText}>{tabTitle}</Text>
        {/* <View style={styles.tabIcon}>
          <MyHeaderIcon
            iconName="ios-arrow-forward-outline"
            style={{ marginLeft: -10 }}
            onPress={changeScreenHandler}
            color="black"
          />
        </View> */}
      </View>
      <ScrollView
        contentContainerStyle={styles.lectureContainers}
        horizontal={true}
      >
        {filteredItem.map((itemData, index) => {
          return (
            <View
              style={{
                flexDirection: "column",
              }}
              key={index}
            >
              <HomeScreenLecturesItem
                lectureThumbnail={itemData.thumbnail.url}
                lectureTitle={itemData.title}
                onSelect={() => {
                  navigation.navigate("SinglePost", {
                    itemId: itemData.id,
                  });
                }}
              />
            </View>
          );
        })}
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
    // width: 387,
    // flexDirection: "row",
    // alignItems: "flex-start",
  },
  descriptionText: {
    fontFamily: "Prompt",
    fontSize: 15,
    fontWeight: "normal",
    color: "black",
  },
  tabTitleContainer: {
    flex: 1,
    marginBottom: 10,
    width: Dimensions.get("window").width - 35,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default MyLecturesTab;
