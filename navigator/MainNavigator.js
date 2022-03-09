import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { Ionicons, MaterialIcons, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Image, View } from "react-native";

import Home from "../src/screens/Home";
import InstructionPage from "../src/screens/InstructionPage";
import SplashScreen from "../src/screens/SplashScreen";
import AuthenticationScreen from "../src/screens/AuthenticationScreen";
import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";

import * as authActions from "../store/actions/auth"


import Logo from "../components/LogoSvg";

import Colors from "../constants/Colors";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const LogoutButton = (props) => {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(authActions.logout());
    props.navigation.replace("AuthenticationScreen");
  }, [props.navigation]);

  return <View></View>;
};

// const InstructionMenu = () => {
//     return (
//         <Stack.Screen name="InstructionPage" component={InstructionPage} />
//         <Stack.Screen name="Home" component={Home} />

//     );
// }

const defaultScreenOptions = {
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
  headerTintColor: "red",
};

const DrawerMenu = () => {
  return (
    <Drawer.Navigator
      style={styles.drawerMenu}
      screenOptions={{
        drawerActiveBackgroundColor: '#04DB8BB3',
        drawerInactiveBackgroundColor: 'rgba(4, 219, 139, 0.1)',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#04DB8B',
      }}
    >
      <Stack.Screen name="Logo"
        component={Home}
        options={{
          title: "",
          headerShown: true,
          drawerIcon: () => (
            <Logo style={styles.logo} />
          ),
        }} />
      <Stack.Screen name="Explore"
        component={Home}
        options={{
          title: "Explore",
          headerShown: true,
          drawerIcon: () => (
            <MaterialIcons
              name="explore"
              size={24}
            />
          ),
        }} />
      <Stack.Screen name="Publish"
      component={Home}
      options={{
        title: "Publish",
        headerShown: true,
        drawerIcon: () => (
          <Entypo
            name="circle-with-plus"
            size={24}
          />
        ),
      }} />
      <Stack.Screen name="Your Saved"
      component={Home}
      options={{
        title: "Your Saved",
        headerShown: true,
        drawerIcon: () => (
          <MaterialCommunityIcons
            name="playlist-star"
            size={24}
          />
        ),
      }} />
      <Stack.Screen
        name="Logout"
        component={LogoutButton}
        options={{
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="playlist-star"
              size={24}
            />
          )
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
        swipeEnabled: false
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
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 100,
  },
  drawerMenu: {
    flex: 0
  },
});

export default MainNavigator;
