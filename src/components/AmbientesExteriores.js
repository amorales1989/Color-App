import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AmbientesExteriores({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>AmbientesExteriores</Text>
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
