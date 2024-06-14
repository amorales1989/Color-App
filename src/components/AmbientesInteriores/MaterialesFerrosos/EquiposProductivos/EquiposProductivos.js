import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Footer from '../../../../home/Footer';

export default function EquiposProductivos({ navigation }) {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title1}>Equipos Productivos</Text>
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.subtitle}>
          Bombas, Envasadoras, Tornos, Lavadoras, Maquinaria en general.
        </Text>
        <Text style={styles.title2}>Grado de Exposición</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('OtrasSuperficies')}
        >
          <Text style={styles.buttonText}>Normal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('OtrasSuperficies')}
        >
          <Text style={styles.buttonText}>Moderado</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('OtrasSuperficies')}
        >
          <Text style={styles.buttonText}>Agresivo</Text>
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
