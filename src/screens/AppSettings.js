import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/style';

const AppSettings = ({ navigation }) => {
  const settingsOptions = [
    {
      title: 'Account Security',
      icon: 'security',
      rightText: '',
    },
    {
      title: 'Language',
      icon: 'language',
      rightText: 'English',
    },
    {
      title: 'Preference',
      icon: 'tune',
      rightText: '',
    },
    {
      title: 'System permission description',
      icon: 'description',
      rightText: '',
    },
    {
      title: 'Third party sharing checklist',
      icon: 'share',
      rightText: '',
    },
    {
      title: 'System Permissions',
      icon: 'admin-panel-settings',
      rightText: '',
    },
    {
      title: 'View and Export My Information',
      icon: 'import-export',
      rightText: '',
    },
    {
      title: 'About ULTSOLARMAN',
      icon: 'info',
      rightText: 'V0.0.0.1',
    },
  ];

  const handleLogout = () => {
    // Add logout logic here
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.settingsContainer}>
      <ScrollView>
        {settingsOptions.map((option, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.settingOption}
            onPress={() => {
              // Add navigation logic for each option
            }}
          >
            <View style={styles.settingLeft}>
              <Icon name={option.icon} size={24} color="#666" />
              <Text style={styles.settingText}>{option.title}</Text>
            </View>
            <View style={styles.settingRight}>
              {option.rightText && (
                <Text style={styles.settingRightText}>{option.rightText}</Text>
              )}
              <Icon name="chevron-right" size={24} color="#CCCCCC" />
            </View>
          </TouchableOpacity>
        ))}

        <TouchableOpacity 
          style={styles.logoutButton} 
          onPress={handleLogout}
        >
          <Icon name="logout" size={24} color="#FF6B6B" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppSettings; 