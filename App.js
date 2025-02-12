import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/loginScreen';
import Register from './src/screens/Register';
import BusinessSelectionScreen from './src/screens/BusinessSelectionScreen';
import BottomTabNavigator from './src/componenst/BottomTabNavigator';
import AddPlantPage from './src/screens/addPlant';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login" 
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Reg" component={Register} />
        <Stack.Screen name="BusinessSelection" component={BusinessSelectionScreen} />
        <Stack.Screen name="MainApp" component={BottomTabNavigator} />
        <Stack.Screen name="AddPlant" component={AddPlantPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;