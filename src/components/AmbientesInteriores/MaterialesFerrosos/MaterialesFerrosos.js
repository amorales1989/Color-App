import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Footer from '../../../home/Footer';

export default function MaterialesFerrosos({ navigation }) {
  return (
    <><View style={styles.titleContainer}>
      <Text style={styles.title}>Materiales ferrosos/Acero</Text>
    </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('EquiposProductivos')}
        >
          <Text style={styles.buttonText}>Equipos Productivos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('EquiposNoProductivos')}
        >
          <Text style={styles.buttonText}>Equipos NO Productivos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TanquesContenedoresMF')}
        >
          <Text style={styles.buttonText}>Tanques Contenedores</Text>
          <Text style={styles.buttonText2}>(Parte exterior)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CiclosDeCalor')}
        >
          <Text style={styles.buttonText}>Ciclos de Calor</Text>
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
    alignItems: 'center',
    marginTop: 100,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#3B5A7B',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
    width: '80%',
    alignItems: 'center',

    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,

    // Sombra para Android
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  buttonText2: {
    color: '#FFFFFF',
    fontSize: 12,
  },
});
