import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Make sure to install @expo/vector-icons if you're using Expo
import * as ImagePicker from 'expo-image-picker';
import styles from '../styles/style'; // Import the updated styles
import { ScrollView } from 'react-native';
import AppBar from '../componenst/AppBar';

const Me = ({ navigation, route }) => {
  const [profileImage, setProfileImage] = useState(null);

  const handleChangeImage = async () => {
    // Request permission
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    // Pick the image
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage({ uri: result.assets[0].uri });
    }
  };

  const handleRemoveImage = () => {
    setProfileImage(null);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.profileSection}>
              <View style={styles.profileImageContainer}>
                {profileImage ? (
                  <Image source={profileImage} style={styles.profileImage} />
                ) : (
                  <Ionicons name="person-circle-outline" size={100} color="black" />
                )}
              </View>
              <Text style={styles.headerTitle}>userAdmin</Text>
              <Text style={styles.headerSubtitle}>Super admin</Text>
              <View style={styles.imageButtonsContainer}>
                <TouchableOpacity 
                  style={styles.imageButton} 
                  onPress={handleChangeImage}
                >
                  <Ionicons name="camera-outline" size={20} color="white" />
                  <Text style={styles.buttonText}>Change</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.imageButton, styles.deleteButton]} 
                  onPress={handleRemoveImage}
                >
                  <Ionicons name="trash-outline" size={20} color="white" />
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Menu Options */}
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="home-outline" size={24} color="black" />
            <Text style={styles.menuText}>Go to website</Text>
            <Ionicons name="chevron-forward-outline" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="call-outline" size={24} color="black" />
            <Text style={styles.menuText}>Customer Service</Text>
            <Ionicons name="chevron-forward-outline" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="book-outline" size={24} color="black" />
            <Text style={styles.menuText}>Operation Manual</Text>
            <Ionicons name="chevron-forward-outline" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="settings-outline" size={24} color="black" />
            <Text style={styles.menuText}>Settings</Text>
            <Ionicons name="chevron-forward-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};



export default Me;
