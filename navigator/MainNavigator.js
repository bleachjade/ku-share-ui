import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import Home from '../src/screens/Home';
import InstructionPage from '../src/screens/InstructionPage';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// const InstructionMenu = () => {
//     return (
//         <Stack.Screen name="InstructionPage" component={InstructionPage} />
//         <Stack.Screen name="Home" component={Home} />

//     );
// }

const DrawerMenu = () => {
    return (
        <Drawer.Navigator>
            <Stack.Screen name="Home" component={Home} />
        </Drawer.Navigator>
    );
}

const MainNavigator = () => {
  return (
    <Stack.Navigator 
    screenOptions={({ route, navigation }) => ({
      headerShown: false,
      gestureEnabled: true,
      ...TransitionPresets.ModalPresentationIOS,
    })}>
    <Stack.Screen name="InstructionPage" component={InstructionPage} />
    <Stack.Screen name="Home" component={DrawerMenu} />
    </Stack.Navigator>
  );
}

export default MainNavigator;