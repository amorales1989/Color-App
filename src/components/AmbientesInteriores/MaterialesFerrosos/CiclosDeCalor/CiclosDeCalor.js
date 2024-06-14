import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Footer from '../../../../home/Footer';

export default function CiclosDeCalor({ navigation }) {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title1}>Ciclos de calor</Text>
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.subtitle}>
          Caderas, Tuberías de agua caliente, Tuberías de vapor, etc.
        </Text>
        <Text style={styles.title2}>Grado de Exposición</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Hasta200')}
        >
          <Text style={styles.buttonText}>Hasta 200° C</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Hasta400')}
        >
          <Text style={styles.buttonText}>Hasta 400° C</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Hasta550')}
        >
          <Text style={styles.buttonText}>Hasta 550° C</Text>
        </TouchableOpacity>
      </View>
        <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 100,
  },
  centerContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  title1: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  title2: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 100,
   // marginBottom: -100,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30,
    color: '#000000',
    fontWeight: 'bold',
    width: '70%',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
},
  button: {
    backgroundColor: '#3B5A7B',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
