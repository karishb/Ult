import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ProgressChart } from 'react-native-chart-kit';
import styles from '../styles/style';

const Graph = ({ monthlyProduction, totalCapacity }) => {
  const data = {data: [monthlyProduction / totalCapacity]
  };

  return (
    <View style={styles.graphContainer}>
     <Text style={styles.totalPlantsTitle}>Production Details</Text>
     <Icon name="chevron-right" size={24} style={styles.iconRight} />
     <View style={styles.line} />
      <ProgressChart
        data={data}
        width={Dimensions.get('window').width - 150} 
        height={220}
        strokeWidth={16}
        radius={70}
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          color: ()=> `rgba(0, 128, 128, 0.4)`,
        }}
        hideLegend={false}
      />
      <View style={styles.circularGraphTextContainer}>
        <Text style={styles.circularGraphText}>{`Monthly Production: ${monthlyProduction} kWh`}</Text>
        <Text style={styles.circularGraphText}>{`Total Capacity: ${totalCapacity} kWp`}</Text>
      </View>
    </View>
  );
};
export default Graph;
