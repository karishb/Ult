import React from 'react';
import { SafeAreaView, View, Text,TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import styles from '../styles/style';

const AppBar = ({ navigation, title }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={styles.iconLeft}>
          <Icon name="settings" size={24} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity 
          onPress={() => navigation.getParent().navigate('AddPlant')} 
          style={styles.iconRight}
        >
          <Icon name="add" size={24} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} style={styles.searchIcon} />
        <TextInput style={styles.searchBox} placeholder="Search..." />
      </View>
    </SafeAreaView>
  );
};

export default AppBar;