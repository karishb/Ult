import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import splash from '../assets/splash.png';
import styles from '../styles/style';

const SplashScreen = () => {
    const navigation = useNavigation();
  
    useEffect(() => {
      setTimeout(() => {
        navigation.navigate('Login'); 
      }, 1000);
    }, [navigation]);
  
    return (
      <View style={styles.container}>
        <Image source={splash} style={styles.logo} />
      </View>
    );
  };

  export default SplashScreen;