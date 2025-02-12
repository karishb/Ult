import React from 'react';
import { View, Text, SafeAreaView,ScrollView,TouchableOpacity } from 'react-native';
import AppBar from '../componenst/AppBar';
import styles from '../styles/style';

const Applications = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
         
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Applications;