import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from '../styles/style';

const TabBar = ({ selectedTab, setSelectedTab }) => {
  return (
    <View style={styles.tabContainer}>
      {['email', 'phone', 'username'].map((tab) => (
        <TouchableOpacity key={tab} onPress={() => setSelectedTab(tab)} style={styles.tab}>
          <Text style={selectedTab === tab ? styles.activeTabText : styles.tabText}>{tab.charAt(0).toUpperCase() + tab.slice(1)}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TabBar;
