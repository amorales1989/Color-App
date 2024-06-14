import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Footer from './Footer';

export default function HomeScreen({ navigation }) {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Bienvenido</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('AmbientesInteriores')}
          >
            <Text style={styles.buttonText}>Ambientes Interiores</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('AmbientesExteriores')}
          >
            <Text style={styles.buttonText}>Ambientes Exteriores</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('OtrasSuperficies')}
          >
            <Text style={styles.buttonText}>Otras Superficies</Text>
          </TouchableOpacity>
        </View>
        <Footer />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20, // Espacio con la parte superior de la pantalla
  },
  titleContainer: {
    alignItems: 'center', // Centrar el título horizontalmente
    marginTop: 100, // Espacio con la parte superior de la pantalla
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: '#3B5A7B', // Color de fondo del botón
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
