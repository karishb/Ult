import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from '../styles/style';
import { SafeAreaView } from 'react-native';

const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShowPicker(true);
  };

  const formatDate = (date) => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return (
    <SafeAreaView style={styles.signupSafeArea}>
    <View style={styles.container}>
      <Text style={styles.signup_title}>Sign Up</Text>
      
    

      <Text style={styles.signup_text}>E-Mail</Text>
      <TextInput
        style={styles.signup_input}
        placeholder="E-Mail"
        value={email}
        onChangeText={setEmail}
      />
      <Text style={styles.signup_text}>Choose a Username</Text>
      <TextInput
        style={styles.signup_input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
        <Text style={styles.signup_text}>Enter Date of Birth</Text>
      <TouchableOpacity 
        onPress={showDatepicker}
        style={styles.datePickerButton}
      >
        <Text style={styles.datePickerButtonText}>
          {formatDate(date)}
        </Text>
      </TouchableOpacity>
      {showPicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
          maximumDate={new Date()} 
        />
      )}
      <Text style={styles.signup_text}>Password</Text>
      <TextInput
        style={styles.signup_input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Text style={styles.signup_text}>Confirm Password</Text>
      <TextInput
        style={styles.signup_input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.signup_button} 
          onPress={() => navigation.navigate('MainApp')}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity 
        style={styles.linkText} 
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.linkText}>Already a member? Log in</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};


export default Register;


