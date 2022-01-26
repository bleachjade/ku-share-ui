import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import Home from "../src/screens/Home";
import InstructionPage from "../src/screens/InstructionPage";
import SplashScreen from "../src/screens/SplashScreen";

import Colors from "../constants/Colors";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

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
  headerTintColor: "white",
};

const DrawerMenu = () => {
  return (
    <Drawer.Navigator>
      <Stack.Screen name="Home" component={Home} />
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
      }}
    >
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        // options={{ headerShown: false }}
        screenOptions={defaultScreenOptions}
      />
      <Stack.Screen name="InstructionPage" component={InstructionPage} />
      <Stack.Screen name="DrawerMenu" component={DrawerMenu} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
