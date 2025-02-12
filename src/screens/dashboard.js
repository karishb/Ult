import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CircularProgressBar from '../componenst/CircularProgress';
import CalendarView from '../componenst/calender'; // Ensure the correct path
import styles from '../styles/style';
import AppBar from '../componenst/AppBar';

const Dashboard = ({ navigation, route }) => {
  const monthlyProduction = 400; 
  const totalCapacity = 500; 

  return (
    <SafeAreaView style={styles.safeArea}>
      <AppBar navigation={navigation} title={route.name} />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.watchlistContainer} onPress={() => { /* Handle navigation to Watchlist page */ }}>
            <View style={styles.watchlistIcon}>
              <Icon name="playlist-add-check" size={24} color="#000" />
              <Text style={styles.watchlistText}>My Watchlist</Text>
            </View>
            <Icon name="chevron-right" size={24} style={styles.arrowIcon} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.totalPlantsContainer} onPress={() => { navigation.navigate('Monitor') }}>
            <View style={styles.totalPlantsHeader}>
              <Text style={styles.totalPlantsTitle}>Total Plants</Text>
              <Icon name="chevron-right" size={24} style={styles.arrowIcon} />
            </View>
            <View>
              <View style={styles.line} />
              <View style={styles.plantStatusContainer}>
                <Icon name="cell-tower" size={24} color="cyan" />
                <Text style={styles.plantStatusText}>Incomplete Plants</Text>
              </View>
              <View style={styles.plantStatusContainer}>
                <Icon name="wifi-off" size={24} color="orange" />
                <Text style={styles.plantStatusText}>Offline</Text>
              </View>
              <View style={styles.plantStatusContainer}>
                <Icon name="online-prediction" size={24} color="purple" />
                <Text style={styles.plantStatusText}>Partially Offline</Text>
              </View>
              <View style={styles.plantStatusContainer}>
                <Icon name="error-outline" size={24} color="red" />
                <Text style={styles.plantStatusText}>Alert</Text>
              </View>
            </View>
          </TouchableOpacity>

          <View style={styles.totalPlantsContainer}>
            <CircularProgressBar monthlyProduction={monthlyProduction} totalCapacity={totalCapacity} />
          </View>

          <View style={styles.totalPlantsContainer}>
            <CalendarView />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
