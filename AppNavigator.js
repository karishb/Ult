import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LoginScreen from './src/screens/loginScreen';
import Register from './src/screens/Register';
import BusinessSelectionScreen from './src/screens/BusinessSelectionScreen';
import Dashboard from './src/screens/dashboard';
import SplashScreen from './src/screens/splash';
import AddPlantPage from './src/screens/addPlant';
import MonitorPage from './src/screens/Monitor';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Create the bottom tab navigator
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen 
        name="Dashboard" 
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="dashboard" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Monitor" 
        component={MonitorPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="monitor" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Main app stack
function AppNavigator() {
  return (
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
        <Stack.Screen name="MainApp" component={MainTabs} />
        <Stack.Screen name="AddPlant" component={AddPlantPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;