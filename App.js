import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/loginScreen';
import Register from './src/screens/Register';
import BusinessSelectionScreen from './src/screens/BusinessSelectionScreen';
import SplashScreen from './src/screens/splash';
import AddPlantPage from './src/screens/addPlant';
import Settings from './src/screens/SettingScreen';
import { DashboardProvider } from './src/context/DashboardContext';
import BottomTabNavigator from './src/componenst/BottomTabNavigator';
import AppSettings from './src/screens/AppSettings';

const Stack = createStackNavigator();

const App = () => {
  return (
    <DashboardProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Splash"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Reg" component={Register} />
          <Stack.Screen name="Business" component={BusinessSelectionScreen} />
          <Stack.Screen name="MainApp" component={BottomTabNavigator} />
          <Stack.Screen name="AddPlant" component={AddPlantPage} />
          <Stack.Screen 
            name="Settings" 
            component={Settings}
            options={{ 
              title: 'Dashboard Settings',
              headerShown: true,
              headerLeft: () => null,
              headerBackVisible: false, 
            }}
          />
          <Stack.Screen 
            name="AppSettings" 
            component={AppSettings}
            options={{ 
              title: 'Settings',
              headerShown: true 
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </DashboardProvider>
  );
};

export default App;