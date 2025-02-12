import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/style';
const Button = ({ onPress, text }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
