import React, {
  useLayoutEffect,
  useState,
  useCallback,
  useEffect,
} from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { SearchBar } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import * as lectureRegistrationAction from "../../store/actions/lecture";

import HomeScreenLecturesTab from "../../components/HomeScreenLecturesTab";
import HomeScreenLecturesItem from "../../components/HomeScreenLecturesItem";
import Colors from "../../constants/Colors";
import MyHeaderIcon from "../../components/MyHeaderIcon";

const NewLecturesScreen = (props) => {
  const navigation = useNavigation();
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
    const willFocusSub = props.navigation.addListener("focus", loadRegis); //for fetching lectures when screen become focused
    return () => {
      willFocusSub;
    };
  }, [loadRegis]);

  useEffect(() => {
    setIsLoading(true);
    loadRegis().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadRegis]);

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

  function filterDatesByCurrentWeek(dates) {
    let [start, end] = getWeekDates();
    return dates.filter((d) => +d.createdAt >= +start && +d.createdAt < +end);
  }
  let lecturesArrayWithDates = [];

  lecturesArrayWithDates = previouslyRegisteredLectured.map((item) => {
    const itemDate = new Date(item.createdAt);
    return { ...item, createdAt: itemDate };
  });

  lecturesArrayWithDates = filterDatesByCurrentWeek(lecturesArrayWithDates);

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>An error occurred!</Text>
        <Button
          title="Try again"
          onPress={loadRegis}
          color={Colors.primaryColor}
        />
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  if (!isLoading && previouslyRegisteredLectured === 0) {
    return (
      <View style={styles.centered}>
        {/* <Ionicons name='ios-search-sharp' size={100} style={{marginBottom: 20}}/> */}
        <Text style={{ fontSize: 20, marginBottom: 10 }}>
          No lectures found.
        </Text>
        <Text>Start adding some!</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        onRefresh={loadRegis}
        refreshing={isRefreshing}
        data={lecturesArrayWithDates}
        keyExtractor={(item, index) => item.id}
        renderItem={(itemData) => (
          <View
            style={{
              flexDirection: "column",
              margin: 5,
              marginTop: 20,
            }}
          >
            <HomeScreenLecturesItem
              lectureThumbnail={itemData.item.thumbnail.url}
              lectureDescription={itemData.item.description}
              onSelect={() => {
                props.navigation.navigate("SinglePost", {
                  itemId: itemData.item.id,
                });
              }}
            />
          </View>
        )}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.primaryColorOpacityDown,
  },
  text: {
    fontSize: 20,
    color: "white",
  },
  searchBarContainer: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 22,
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
    padding: 0,
  },
  scrollContainers: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NewLecturesScreen;
