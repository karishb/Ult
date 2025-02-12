import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import styles from '../styles/style';

const CalendarView = () => {
  const [selectedTab, setSelectedTab] = useState('Monthly');
  const energyProductionData = {
    '2025-02-10': { energy: 10 },
    '2025-02-12': { energy: 12 },
    '2025-02-15': { energy: 15 },
    '2025-02-19': { energy: 8 },
  };

  // Generate markedDates object with energy production data
  const markedDates = Object.keys(energyProductionData).reduce((acc, date) => {
    acc[date] = {
      selected: true,
      marked: true,
      selectedColor: 'red',
      customStyles: {
        container: {
          backgroundColor: 'lightgray',
        },
        text: {
          color: 'black',
        }
      }
    };
    return acc;
  }, {});

  return (
    <View style={styles.calendarContainer}>
      <View style={styles.tabBarContainer}>
        <TouchableOpacity style={[styles.tab, selectedTab === 'Monthly' && styles.activeTab]} onPress={() => setSelectedTab('Monthly')}>
          <Text style={selectedTab === 'Monthly' ? styles.activeTabText : styles.tabText}>Monthly</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, selectedTab === 'Yearly' && styles.activeTab]} onPress={() => setSelectedTab('Yearly')}>
          <Text style={selectedTab === 'Yearly' ? styles.activeTabText : styles.tabText}>Yearly</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
      <View>
        {selectedTab === 'Monthly' ? (
          <Calendar
            onDayPress={(day) => console.log('selected day', day)}
            markedDates={markedDates}
            dayComponent={({ date, state }) => {
              const energy = energyProductionData[date.dateString]?.energy || 0;
              return (
                <View style={{ alignItems: 'center' }}>
                  <Text style={{ textAlign: 'center', color: state === 'disabled' ? 'gray' : 'black' }}>
                    {date.day}
                  </Text>
                  <Text style={{ fontSize: 10, color: 'green' }}>
                    {energy} kWh
                  </Text>
                </View>
              );
            }}
          />
        ) : (
          <Text style={styles.calendarText}>Yearly Calendar</Text>
        )}
      </View>
    </View>
  );
};

export default CalendarView;
