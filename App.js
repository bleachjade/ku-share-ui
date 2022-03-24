import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { useFonts } from 'expo-font';


import InstructionPage from "./src/screens/InstructionPage";
import Home from "./src/screens/Home";
import MainNavigator from "./navigator/MainNavigator";

import authReducer from "./store/reducers/auth";
import lectureReducer from "./store/reducers/lecture"

const Stack = createStackNavigator();

const rootReducer = combineReducers({
  registration: lectureReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  const [loaded] = useFonts({
    Prompt: require('./assets/fonts/Prompt.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator></MainNavigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
