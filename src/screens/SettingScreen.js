import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CircularProgressBar from '../componenst/CircularProgress';
import CalendarView from '../componenst/calender';
import styles from '../styles/style';
import { useDashboard } from '../context/DashboardContext';

const Settings = () => {
  const { componentVisibility, setComponentVisibility } = useDashboard();

  const toggleVisibility = (component) => {
    setComponentVisibility(prev => ({
      ...prev,
      [component]: !prev[component]
    }));
  };

  const ToggleButton = ({ component, isVisible }) => (
    <TouchableOpacity 
      onPress={() => toggleVisibility(component)}
      style={[
        styles.toggleButton, 
        { backgroundColor: isVisible ? '#4CAF50' : '#f44336' }
      ]}
    >
      <Text style={styles.toggleButtonText}>
        {isVisible ? 'Hide from Dashboard' : 'Show in Dashboard'}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          {/* Total Plants Section */}
          <View style={styles.settingSection}>
            <View style={styles.totalPlantsContainer}>
              <View style={styles.totalPlantsHeader}>
                <Text style={styles.totalPlantsTitle}>Total Plants</Text>
                <Icon name="chevron-right" size={24} style={styles.arrowIcon} />
              </View>
              <View style={styles.line} />
              <View style={styles.plantStatusContainer}>
                <Icon name="cell-tower" size={24} color="cyan" />
                <Text style={styles.plantStatusText}>Incomplete Plants</Text>
              </View>
              {/* ... other status items ... */}
            </View>
            <ToggleButton 
              component="totalPlants" 
              isVisible={componentVisibility.totalPlants} 
            />
          </View>

          {/* Circular Progress Section */}
          <View style={styles.settingSection}>
            <View style={styles.totalPlantsContainer}>
              <CircularProgressBar monthlyProduction={400} totalCapacity={500} />
            </View>
            <ToggleButton 
              component="circularProgress" 
              isVisible={componentVisibility.circularProgress} 
            />
          </View>

          {/* Calendar Section */}
          <View style={styles.settingSection}>
            <View style={styles.totalPlantsContainer}>
              <CalendarView />
            </View>
            <ToggleButton 
              component="calendar" 
              isVisible={componentVisibility.calendar} 
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;