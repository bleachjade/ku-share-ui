import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import {
  Ionicons,
  MaterialIcons,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome
} from "@expo/vector-icons";
import { StyleSheet, Image, View } from "react-native";
import { Icon } from 'react-native-elements';

import Home from "../src/screens/Home";
import InstructionPage from "../src/screens/InstructionPage";
import SplashScreen from "../src/screens/SplashScreen";
import AuthenticationScreen from "../src/screens/AuthenticationScreen";
import NewLecturesScreen from "../src/screens/NewLecturesScreen";
import AllLecturesScreen from "../src/screens/AllLecturesScreen";
import SearchPage from "../src/screens/SearchPage";
import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";

import * as authActions from "../store/actions/auth";
import Profile from "../src/screens/Profile";
import UploadPage from "../src/screens/UploadPage";

import Logo from "../components/LogoSvg";
import MyHeaderIcon from "../components/MyHeaderIcon";

import Colors from "../constants/Colors";
import SinglePost from "../src/screens/SinglePost";
import SingleNews from "../src/screens/SingleNews";
import SinglePdfView from "../src/screens/SinglePdfView";

import { useNavigation } from "@react-navigation/native";
import CustomSidebarMenu from "../components/CustomSideBarMenu";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const LectureRegistrationStack = createStackNavigator();

const LogoutButton = (props) => {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(authActions.logout());
    props.navigation.replace("AuthenticationScreen");
  }, [props.navigation]);

  return <View></View>;
};

const defaultScreenOptions = {
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
  headerTintColor: "white",
};

// const LectureRegistrationScreens = (props) => {
//   return (
//     <LectureRegistrationStack.Navigator
//       initialRouteName="NewLecturesScreen"
//       screenOptions={{ ...defaultScreenOptions }}
//     >
//       <Stack.Screen name="NewLecturesScreen" component={NewLecturesScreen} options={{headerShown: false}}/>
//       <Stack.Screen name="AllLecturesScreen" component={AllLecturesScreen} options={{headerShown: false}}/>
//     </LectureRegistrationStack.Navigator>
//   );
// };

const DrawerMenu = () => {
  const navigation = useNavigation();

  return (
    <Drawer.Navigator
      drawerStyle={styles.drawerMenu}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
      screenOptions={{
        headerRight: props => <Icon 
          name='search'
          type='font-awesome'
          color={Colors.primaryColor}
          containerStyle={styles.searchIconContainer}
          onPress={() => navigation.navigate("SearchPage")}
        />,
        
        headerTintColor: Colors.primaryColor,
        drawerActiveBackgroundColor: "#04DB8BB3",
        drawerInactiveBackgroundColor: "rgba(4, 219, 139, 0.1)",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#04DB8B",
      }}
    >
      {/* <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          headerShown: true,
          drawerIcon: () => <Logo style={styles.logo} />,
        }}
      /> */}
      
      <Stack.Screen
        name="Explore"
        component={Home}
        options={{
          title: "Explore",
          headerShown: true,
          drawerIcon: () => <MaterialIcons name="explore" size={24} />,
        }}
      />
      <Stack.Screen
        name="NewLecturesScreen"
        component={NewLecturesScreen}
        options={{
          title: "New Lectures",
          headerShown: true,
          drawerIcon: () => (
            <MaterialCommunityIcons name="refresh" size={24} />
          ),
        }}
      />
      <Stack.Screen
        name="AllLecturesScreen"
        component={AllLecturesScreen}
        options={{
          title: "All Lectures",
          headerShown: true,
          drawerIcon: () => (
            <MaterialCommunityIcons name="database-search" size={24} />
          ),
        }}
      />
      <Stack.Screen
        name="SearchPage"
        component={SearchPage}
        options={{
          title: "Search Lecture Page",
          headerShown: true,
          drawerIcon: () => (
            <MaterialCommunityIcons name="book-search" size={24} />
          ),
        }}
      />
      {/* <Stack.Screen
        name="SinglePost"
        component={SinglePost}
        options={{
          title: "SinglePost",
          headerShown: true,
          drawerIcon: () => (
            <FontAwesome name="user" size={24} />
          ),
        }}
      /> */}
      <Stack.Screen
        name="Upload Lecture"
        component={UploadPage}
        options={{
          title: "Upload Lecture",
          headerShown: true,
          drawerIcon: () => <Entypo name="circle-with-plus" size={24} />,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          headerShown: true,
          drawerIcon: () => (
            <MaterialIcons name="person" size={24} />
          ),
        }}
      />
            <Stack.Screen
        name="Logout"
        component={LogoutButton}
        options={{
          drawerIcon: () => (
            <MaterialCommunityIcons name="key-variant" size={24} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <Stack.Navigator
      // screenOptions={({ route, navigation }) => ({
      //   headerShown: false,
      //   gestureEnabled: true,
      //   ...TransitionPresets.ModalPresentationIOS,
      // })}
      screenOptions={{
        ...defaultScreenOptions,
        gesturesEnabled: false,
        headerShown: false,
        swipeEnabled: false,
      }}
    >
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        // options={{ headerShown: false }}
        screenOptions={defaultScreenOptions}
      />
      <Stack.Screen name="InstructionPage" component={InstructionPage} />
      <Stack.Screen
        name="AuthenticationScreen"
        component={AuthenticationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="DrawerMenu" component={DrawerMenu} />
      <Stack.Screen name="SinglePdfView" component={SinglePdfView} />
      <Stack.Screen
        name="SinglePost"
        component={SinglePost}
        options={{
          headerShown: true,
          headerBackTitle: 'Back',
          headerTitle: 'PDF Details'
        }}
      />
      <Stack.Screen
        name="SingleNews"
        component={SingleNews}
        options={{
          headerShown: true,
          headerBackTitle: 'Back',
          headerTitle: 'News Details'
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  // logo: {
  //   width: "100%",
  //   height: 100,
  // },
  drawerMenu: {
    flex: 0,
  },
  searchIconContainer: {
    marginRight: 20
  }
});

export default MainNavigator;
