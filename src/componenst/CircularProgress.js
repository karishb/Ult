import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PieChart } from 'react-native-chart-kit';
import styles from '../styles/style';

const Graph = ({ monthlyProduction, totalCapacity }) => {
  // Calculate the remaining capacity
  const remainingCapacity = totalCapacity - monthlyProduction;
  
  const data = [
    {
      name: 'Production',
      population: monthlyProduction,
      color: '#20B2AA', // Light sea green
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
    {
      name: 'Remaining',
      population: remainingCapacity,
      color: 'lightblue', // Light grey
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
  ];

  return (
    <View style={styles.graphContainer}>
      <View style={styles.graphHeader}>
        <Text style={styles.totalPlantsTitle}>Production Details</Text>
      </View>
      <View style={styles.line} />
      <PieChart
        data={data}
        width={Dimensions.get('window').width - 20} // Full width minus padding
        height={220}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="0"
        absolute
        center={[0, 0]} // Adjust if needed to center the pie
      />
      <View style={styles.circularGraphTextContainer}>
        <Text style={styles.circularGraphText}>{`Monthly Production: ${monthlyProduction} kWh`}</Text>
        <Text style={styles.circularGraphText}>{`Total Capacity: ${totalCapacity} kWp`}</Text>
      </View>
    </View>
  );
};

export default Graph;
