import React, { useState, useEffect } from 'react';
import { 
  SafeAreaView, 
  View, 
  Text, 
  TouchableOpacity, 
  ScrollView,
  Image,
  Modal,
  Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/style';

const MonitorPage = ({ navigation, route }) => {
  const [plants, setPlants] = useState([]);
  const [expandedPlantId, setExpandedPlantId] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);

  const statusOptions = ['All', 'Incomplete', 'Offline', 'Partially Offline', 'Alert'];

  // Debug function - remove in production
  const logPlants = () => {
    console.log('Current plants:', plants);
  };

  // Load plants from storage
  const loadPlants = async () => {
    try {
      const storedPlants = await AsyncStorage.getItem('plants');
      if (storedPlants) {
        const parsedPlants = JSON.parse(storedPlants);
        console.log('Loaded plants:', parsedPlants);
        setPlants(parsedPlants);
      }
    } catch (error) {
      console.error('Error loading plants:', error);
    }
  };

  // Initial load
  useEffect(() => {
    loadPlants();
  }, []);

  useEffect(() => {
    const handleNewPlant = async () => {
      if (route.params?.newPlant) {
        console.log('New plant received:', route.params.newPlant);
        
        const storedPlants = await AsyncStorage.getItem('plants');
        const currentPlants = storedPlants ? JSON.parse(storedPlants) : [];
        
        let updatedPlants;
        if (route.params.isEdit) {
          updatedPlants = currentPlants.map(plant => 
            plant.id === route.params.newPlant.id ? route.params.newPlant : plant
          );
        } else {
          updatedPlants = [...currentPlants, route.params.newPlant];
        }
        
        await AsyncStorage.setItem('plants', JSON.stringify(updatedPlants));
        console.log('Plants saved successfully. Updated plants:', updatedPlants);
        setPlants(updatedPlants);
        
        navigation.setParams({ newPlant: null, isEdit: null });
      }
    };

    handleNewPlant();
  }, [route.params?.newPlant]);

  const handleEdit = (plant) => {
    navigation.navigate('AddPlant', { 
      editMode: true,
      plantData: plant 
    });
  };

  const handleDelete = async (plantId) => {
    try {
      // Get current plants from storage
      const storedPlants = await AsyncStorage.getItem('plants');
      const currentPlants = storedPlants ? JSON.parse(storedPlants) : [];
      
      // Filter out the deleted plant
      const updatedPlants = currentPlants.filter(plant => plant.id !== plantId);
      
      // Save to AsyncStorage and update state
      await AsyncStorage.setItem('plants', JSON.stringify(updatedPlants));
      setPlants(updatedPlants);
      
      // Close expanded view if the deleted plant was expanded
      if (expandedPlantId === plantId) {
        setExpandedPlantId(null);
      }
    } catch (error) {
      console.error('Error deleting plant:', error);
    }
  };

  const toggleExpand = (id) => {
    setExpandedPlantId(expandedPlantId === id ? null : id);
  };

  const renderStatusModal = () => (
    <Modal
      visible={showStatusModal}
      transparent={true}
      animationType="fade"
      onRequestClose={() => setShowStatusModal(false)}
    >
      <TouchableOpacity 
        style={styles.modalOverlay}
        onPress={() => setShowStatusModal(false)}
      >
        <View style={styles.modalContent}>
          {statusOptions.map((status) => (
            <TouchableOpacity
              key={status}
              style={styles.modalItem}
              onPress={() => {
                setSelectedStatus(status);
                setShowStatusModal(false);
              }}
            >
              <Text style={[
                styles.modalItemText,
                selectedStatus === status && styles.selectedModalItem
              ]}>
                {status}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </TouchableOpacity>
    </Modal>
  );

  return (
    <SafeAreaView style={styles.MonitorSafeArea}>
      <View style={styles.appBar}>
        <Text style={styles.title}>Monitor</Text>
        <TouchableOpacity 
          onPress={() => navigation.navigate('AddPlant')} 
          style={styles.iconRight}
        >
          <Icon name="add" size={28} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.tabBar}>
        <TouchableOpacity 
          style={styles.tabItem} 
          onPress={() => setShowStatusModal(true)}
        >
          <Text style={styles.sortTabText}>{selectedStatus}</Text>
          <Icon style={styles.iconTab} name="arrow-drop-down" size={24} color="#666" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.tabItem}
          onPress={() => setShowFilterModal(true)}
        >
          <Text style={styles.sortTabText}>Filter</Text>
          <Icon style={styles.iconTab} name="filter-list" size={24} color="#666" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.sortTabText}>Params</Text>
          <Icon style={styles.iconTab} name="arrow-drop-down" size={24} color="#666" />
        </TouchableOpacity>
      </View>

      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.sortTabItem}>
          <Text style={styles.sortTabText}>Name</Text>
          <Icon name="arrow-drop-down" size={16} color="#666" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.sortTabItem}>
          <Text style={styles.sortTabText}>Power</Text>
          <Icon name="arrow-drop-down" size={16} color="#666" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.sortTabItem}>
          <Text style={styles.sortTabText}>Daily</Text>
          <Icon name="arrow-drop-down" size={16} color="#666" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.sortTabItem}>
          <Text style={styles.sortTabText}>Capacity</Text>
          <Icon name="arrow-drop-down" size={16} color="#666" />
        </TouchableOpacity>
      </View>

      {renderStatusModal()}

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {plants.length === 0 ? (
          <View style={styles.emptyState}>
            <Icon name="eco" size={48} color="#ccc" />
            <Text style={styles.emptyStateText}>No plants added yet</Text>
            <Text style={styles.emptyStateSubText}>Tap the + button to add a plant</Text>
          </View>
        ) : (
          plants.map((plant) => (
            <TouchableOpacity 
              key={plant.id} 
              style={styles.plantCard}
              onPress={() => toggleExpand(plant.id)}
            >
              {plant.image && (
                <Image 
                  source={plant.image} 
                  style={styles.plantCardImage} 
                />
              )}
              <View style={styles.plantCardContent}>
                <View style={styles.plantCardHeader}>
                  <Text style={styles.plantName}>{plant.name || 'Unnamed Plant'}</Text>
                  <Icon 
                    name={expandedPlantId === plant.id ? "expand-less" : "expand-more"} 
                    size={24} 
                    color="#666"
                  />
                </View>
                <Text style={styles.plantLocation}>{plant.location || 'No location set'}</Text>
                {expandedPlantId === plant.id && (
                  <View style={styles.expandedContent}>
                    <Text style={styles.plantDetail}>Region: {plant.region || 'Not specified'}</Text>
                    <Text style={styles.plantDetail}>Address: {plant.address || 'Not specified'}</Text>
                    <Text style={styles.plantDetail}>Capacity: {plant.capacity || '0'} kWp</Text>
                    <Text style={styles.plantDetail}>System Type: {plant.systemType}</Text>
                    <Text style={styles.plantDetail}>Plant Type: {plant.plantType}</Text>
                    <View style={styles.buttonContainer}>
                      <TouchableOpacity 
                        style={styles.editButton}
                        onPress={() => handleEdit(plant)}
                      >
                        <Icon name="edit" size={20} color="#fff" />
                        <Text style={styles.editButtonText}>Edit Plant</Text>
                      </TouchableOpacity>
                      <TouchableOpacity 
                        style={styles.editButton}
                        onPress={() => {
                          Alert.alert(
                            'Delete Plant',
                            'Are you sure you want to delete this plant?',
                            [
                              {
                                text: 'Cancel',
                                style: 'cancel',
                              },
                              {
                                text: 'Delete',
                                onPress: () => handleDelete(plant.id),
                                style: 'destructive',
                              },
                            ],
                            { cancelable: true }
                          );
                        }}
                      >
                        <Icon name="delete" size={20} color="#fff" />
                        <Text style={styles.editButtonText}>Delete Plant</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MonitorPage;