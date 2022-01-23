import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const RoundedButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity
      style={{ alignItems: 'center', justifyContent: 'center' }}
      onPress={onPress}
    >
      <Text style={{ fontSize: 28, color: 'white', fontWeight: 'bold', textTransform: 'uppercase' }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;