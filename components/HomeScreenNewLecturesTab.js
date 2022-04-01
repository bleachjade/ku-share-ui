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

const HomeScreenNewLecturesTab = (props) => {
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
    const screenRoute = 'NewLecturesScreen';
    console.log(screenRoute);
    // navigation.navigate("LinkToLectureRegistrationScreen", {
    //   screen: screenRoute,
    // });
    navigation.navigate(screenRoute);
  };

  function getWeekDates() {
    let now = new Date();
    // now.setHours(now.getHours() + 7);
    let dayOfWeek = now.getDay(); //0-6
    let numDay = now.getDate();

    let start = new Date(now); //copy
    start.setDate(numDay - dayOfWeek);
    start.setHours(0, 0, 0, 0);

    let end = new Date(now); //copy
    end.setDate(numDay + (3 - dayOfWeek));
    end.setHours(0, 0, 0, 0);

    return [start, end];
  }

  function filterDatesByCurrentWeek(dates){
    let [start, end] = getWeekDates();
    return dates.filter(d => +d.createdAt >= +start && +d.createdAt < +end);
 }
  let lecturesArrayWithDates = [];

  lecturesArrayWithDates = previouslyRegisteredLectured.map((item) => {
    const itemDate = new Date(item.createdAt);
    return{...item, createdAt: itemDate};
  });

  lecturesArrayWithDates = filterDatesByCurrentWeek(lecturesArrayWithDates);
  // console.log('Filtered Items Down Below')
  // console.log(filterDatesByCurrentWeek(lecturesArrayWithDates));

  if(lecturesArrayWithDates.length <= 2){
    return (
      <View style={styles.container}>
        <View style={styles.tabTitleContainer}>
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
        <ScrollView
          contentContainerStyle={{width: '100%'}}
          horizontal={true}
        >
          {lecturesArrayWithDates.map((itemData, index) => {
            return (
              <View
                style={{
                  padding: 0,
                  alignItems: 'flex-start',
                  flexDirection: "column",
                }}
                key={index}
              >
                <HomeScreenLecturesItem
                  key={itemData}
                  lectureThumbnail={itemData.thumbnail.url}
                  lectureDescription={itemData.description}
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
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.tabTitleContainer}>
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
      <ScrollView
        contentContainerStyle={styles.lectureContainers}
        horizontal={true}
      >
        {lecturesArrayWithDates.map((itemData, index) => {
          return (
            <View
              style={{
                flexDirection: "column",
              }}
              key={index}
            >
              <HomeScreenLecturesItem
                key={itemData}
                lectureThumbnail={itemData.thumbnail.url}
                lectureDescription={itemData.description}
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
    flexDirection: "row",
    alignItems: "flex-start",
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

export default HomeScreenNewLecturesTab;
