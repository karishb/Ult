import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Dashboard from '../screens/dashboard';
import Monitor from '../screens/Monitor';
import Alert from '../screens/Alert';
import Applications from '../screens/Applications';
import Me from '../screens/Me';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Dashboard':
              iconName = 'dashboard';
              break;
            case 'Monitor':
              iconName = 'monitor';
              break;
            case 'Alert':
              iconName = 'notifications';
              break;
            case 'Applications':
              iconName = 'apps';
              break;
            case 'Me':
              iconName = 'person';
              break;
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: { 
          backgroundColor: '#FFF',
          paddingBottom: 10,
          height: 60,
        }, 
        headerShown: false 
      })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
      <Tab.Screen name="Monitor" component={Monitor} options={{ headerShown: false }} />
      <Tab.Screen name="Alert" component={Alert} options={{ headerShown: false }} />
      <Tab.Screen name="Applications" component={Applications} options={{ headerShown: false }} />
      <Tab.Screen name="Me" component={Me} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;