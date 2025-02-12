import React, { useState } from 'react';
import { 
  SafeAreaView, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView,
  Image,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as ImagePicker from 'expo-image-picker';
import styles from '../styles/style';

const AddPlantPage = ({ navigation, route }) => {
  const editMode = route.params?.editMode;
  const existingPlant = route.params?.plantData;

  // Basic Info
  const [name, setName] = useState(editMode ? existingPlant.name : '');
  const [location, setLocation] = useState(editMode ? existingPlant.location : '');
  const [region, setRegion] = useState(editMode ? existingPlant.region : '');
  const [address, setAddress] = useState(editMode ? existingPlant.address : '');
  const [capacity, setCapacity] = useState(editMode ? existingPlant.capacity : '');
  const [systemType, setSystemType] = useState(editMode ? existingPlant.systemType : 'PV+Grid');
  const [plantType, setPlantType] = useState(editMode ? existingPlant.plantType : 'Residential');
  const [plantImage, setPlantImage] = useState(editMode ? existingPlant.image : null);

  // Technical Details
  const [azimuth, setAzimuth] = useState(editMode ? existingPlant.azimuth : '');
  const [tiltAngle, setTiltAngle] = useState(editMode ? existingPlant.tiltAngle : '');

  // Financial Info
  const [currency, setCurrency] = useState(editMode ? existingPlant.currency : 'INR');
  const [unitPrice, setUnitPrice] = useState(editMode ? existingPlant.unitPrice : '');
  const [totalCost, setTotalCost] = useState(editMode ? existingPlant.totalCost : '');

  // Contact Info
  const [contactPerson, setContactPerson] = useState(editMode ? existingPlant.contactPerson : '');
  const [contactNumber, setContactNumber] = useState(editMode ? existingPlant.contactNumber : '');
  const [businessName, setBusinessName] = useState(editMode ? existingPlant.businessName : '');

  const plantTypes = ['Residential', 'Commercial', 'Industrial', 'Ground Mounted'];
  const systemTypes = ['PV+Grid', 'PV+Grid+Consumption', 'PV+Grid+Consumption+Battery'];

  const handleImagePick = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission needed', 'Please grant camera roll permissions to add an image.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPlantImage({ uri: result.assets[0].uri });
    }
  };

  const handleSave = () => {
    if (!name.trim()) {
      Alert.alert('Error', 'Please enter a plant name');
      return;
    }

    if (!location.trim()) {
      Alert.alert('Error', 'Please enter a location');
      return;
    }

    const plantData = {
      id: editMode ? existingPlant.id : Date.now().toString(),
      name: name.trim(),
      location: location.trim(),
      region: region.trim(),
      address: address.trim(),
      capacity: capacity.trim(),
      systemType,
      plantType,
      azimuth: azimuth.trim(),
      tiltAngle: tiltAngle.trim(),
      currency,
      unitPrice: unitPrice.trim(),
      totalCost: totalCost.trim(),
      contactPerson: contactPerson.trim(),
      contactNumber: contactNumber.trim(),
      businessName: businessName.trim(),
      image: plantImage,
      status: 'Online', // Default status
      power: '0', // Default power
      daily: '0', // Default daily production
    };

    navigation.navigate('MainApp', {
      screen: 'Monitor',
      params: {
        newPlant: plantData,
        isEdit: editMode
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create a Plant</Text>
        
      </View>

      <ScrollView style={styles.scrollViewContent}>
        <TouchableOpacity 
          style={styles.imageUploadContainer} 
          onPress={handleImagePick}
        >
          {plantImage ? (
            <Image source={plantImage} style={styles.plantImage} resizeMode="cover" />
          ) : (
            <View style={styles.imagePlaceholder}>
              <Icon name="add-a-photo" size={40} color="#666" />
              <Text style={styles.imagePlaceholderText}>Add Plant Image</Text>
            </View>
          )}
        </TouchableOpacity>

        <Text style={styles.text}>Plant Name*</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter plant name"
        />

        <Text style={styles.text}>Location*</Text>
        <TextInput
          style={styles.input}
          value={location}
          onChangeText={setLocation}
          placeholder="Enter location"
        />

        <Text style={styles.text}>Region</Text>
        <TextInput
          style={styles.input}
          value={region}
          onChangeText={setRegion}
          placeholder="Enter region"
        />

        <Text style={styles.text}>Address</Text>
        <TextInput
          style={styles.input}
          value={address}
          onChangeText={setAddress}
          placeholder="Enter address"
        />

        <Text style={styles.text}>Capacity (kWp)</Text>
        <TextInput
          style={styles.input}
          value={capacity}
          onChangeText={setCapacity}
          placeholder="Enter capacity"
          keyboardType="numeric"
        />

        <Text style={styles.addPlantSectionTitle}>System Type</Text>
        <View style={styles.radioGroup}>
          {systemTypes.map((type) => (
            <TouchableOpacity
              key={type}
              style={[styles.radioButton, systemType === type && styles.radioButtonSelected]}
              onPress={() => setSystemType(type)}
            >
              <View style={[styles.radio, systemType === type && styles.radioSelected]} />
              <Text style={styles.radioText}>{type}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.addPlantSectionTitle}>Plant Type</Text>
        <View style={styles.radioGroup}>
          {plantTypes.map((type) => (
            <TouchableOpacity
              key={type}
              style={[styles.radioButton, plantType === type && styles.radioButton]}
              onPress={() => setPlantType(type)}
            >
              <View style={[styles.radio, plantType === type && styles.radioSelected]} />
              <Text style={styles.radioText}>{type}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.text2}>Azimuth(°)</Text>
        <TextInput
          style={styles.input}
          value={azimuth}
          onChangeText={setAzimuth}
          placeholder="Optional, 0~360°"
          keyboardType="numeric"
        />

        <Text style={styles.text}>Tilt Angle(°)</Text>
        <TextInput
          style={styles.input}
          value={tiltAngle}
          onChangeText={setTiltAngle}
          placeholder="Optional, 0~90°"
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.moreButton}>
          <Text style={styles.moreButtonText}>More</Text>
          <Icon name="expand-more" size={24} color="#666" />
        </TouchableOpacity>

        <Text style={styles.text}>Currency</Text>
        <TouchableOpacity style={styles.currencySelector}>
          <Text style={styles.currencyText}>INR</Text>
          <Icon name="chevron-right" size={24} color="#666" />
        </TouchableOpacity>

        <Text style={styles.text}>Unit Price(INR/kWh)</Text>
        <TextInput
          style={styles.input}
          value={unitPrice}
          onChangeText={setUnitPrice}
          placeholder="Optional"
          keyboardType="numeric"
        />

        <Text style={styles.text}>Total Cost(CNY)</Text>
        <TextInput
          style={styles.input}
          value={totalCost}
          onChangeText={setTotalCost}
          placeholder="Optional"
          keyboardType="numeric"
        />

        <Text style={styles.text}>Contact Person</Text>
        <TextInput
          style={styles.input}
          value={contactPerson}
          onChangeText={setContactPerson}
          placeholder="Optional"
        />

        <Text style={styles.text}>Contact Number</Text>
        <TextInput
          style={styles.input}
          value={contactNumber}
          onChangeText={setContactNumber}
          placeholder="Optional, used to make calls in the APP"
          keyboardType="phone-pad"
        />

        <Text style={styles.text}>Business Name</Text>
        <TextInput
          style={styles.input}
          value={businessName}
          onChangeText={setBusinessName}
          placeholder="Optional"
        />
          <TouchableOpacity onPress={handleSave} style={styles.button}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    
    </SafeAreaView>
  );
};

export default AddPlantPage;