import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import styles from '../styles/style';

const BusinessSelectionScreen = ({ navigation }) => {
  const logos = ['Logo1', 'Logo2', 'Logo3'];

  const handleBusinessSelect = () => {
    navigation.navigate('MainApp');
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.centerContainer}>
        <Text style={styles.heading}>Select Business</Text>
        <Text>Please select your Business</Text>
        <ScrollView horizontal style={styles.scrollView}>
          {logos.map((logo, index) => (
            <View key={index} style={styles.logoContainer}>
              <Text style={styles.logoText}>{logo}</Text>
            </View>
          ))}
        </ScrollView>
        
        <TouchableOpacity style={styles.businessButton} onPress={() => navigation.navigate('MainApp')}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text >Do you need to merge plant data under one business?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BusinessSelectionScreen;