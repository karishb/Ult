import React,{useState} from 'react';
import { View, Text, SafeAreaView,Image,TouchableOpacity } from 'react-native';
import AppBar from '../componenst/AppBar';
import noAlert from '../assets/no-alert.jpg';
import styles from '../styles/style';


const Alert = ({ navigation, Alert }) => {
  const [selectedTab,setSelectedTab] = useState("All");

  return (
    <SafeAreaView style={styles.alertSafeArea}>
      <View style={styles.alertAppBar}>
        <Text style={styles.alertTitle}>Alert</Text>
      </View>
     
    <View style={styles.alertTabContainer}>
      <TouchableOpacity style={[styles.tab, selectedTab === 'All' && styles.activeTab]} onPress={() => setSelectedTab('All')}>
        <Text style={selectedTab === 'All' ? styles.activeTabText : styles.tabText}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tab, selectedTab === 'Open' && styles.activeTab]} onPress={() => setSelectedTab('Open')}>
        <Text style={selectedTab === 'Open' ? styles.activeTabText : styles.tabText}>Open</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tab, selectedTab === 'Closed' && styles.activeTab]} onPress={() => setSelectedTab('Closed')}>
        <Text style={selectedTab === 'Closed' ? styles.activeTabText : styles.tabText}>Closed</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.noAlertContainer}>
      <Image source={noAlert} style={styles.noAlertImage} /> 
      <Text style={styles.noAlertText}>No Alerts</Text>
    </View>
  </SafeAreaView>
  );
};

export default Alert;