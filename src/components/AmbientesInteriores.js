import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Footer from '../home/Footer';

export default function AmbientesInteriores({ navigation }) {
  return (
    <><View style={styles.titleContainer}>
      <Text style={styles.title}>Ambientes interiores</Text>
    </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('MaterialesFerrosos')}
        >
          <Text style={styles.buttonText}>Materiales Ferrosos/Acero</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('MaterialesNoFerrosos')}
        >
          <Text style={styles.buttonText}>Materiales no Ferrosos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Hormigon')}
        >
          <Text style={styles.buttonText}>Hormigon</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Mamposteria')}
        >
          <Text style={styles.buttonText}>Mamposteria</Text>
        </TouchableOpacity>
        <Footer />
      </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    alignItems: 'center', // Centrar el título horizontalmente
    marginTop: 100, // Espacio con la parte superior de la pantalla
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#3B5A7B', // Color de fondo del botón
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8, // Redondeo de las esquinas
    marginBottom: 10,
    width: '80%', // Ancho del botón
    alignItems: 'center', // Centrar el texto dentro del botón

    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,

    // Sombra para Android
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF', // Color del texto
    fontSize: 16,
  },
});
