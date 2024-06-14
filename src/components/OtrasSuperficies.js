import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function OtrasSuperficies({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>OtrasSuperficies</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
