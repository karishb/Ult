import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import BackgroundImage from '../componenst/BackgroundImage';
import TabBar from '../componenst/TabBar';
import BusinessSelection from '../screens/BusinessSelectionScreen';
import LinkComponent from '../componenst/Links';
import Button from '../componenst/Button'
import styles from '../styles/style';


const LoginScreen = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('email');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <BackgroundImage />
      <TabBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <View>
        <Text style={styles.text}>{selectedTab === 'email' ? 'E-mail' : selectedTab}</Text>
        <TextInput
          style={styles.input}
          placeholder={selectedTab === 'email' ? 'E-Mail' : selectedTab}
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.text}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <View style={styles.linkContainer}>
          <LinkComponent text="Forgot Password?" />
          <LinkComponent text="Local Mode" />
        </View>
        <Button text="Log In" onPress={() => { navigation.navigate('BusinessSelection') }} />
        <TouchableOpacity onPress={() => navigation.navigate('Reg')}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;