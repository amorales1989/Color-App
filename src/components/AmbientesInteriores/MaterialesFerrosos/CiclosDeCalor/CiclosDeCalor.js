import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Footer from '../../../../home/Footer';

export default function CiclosDeCalor({ navigation }) {
    return (
        <><View style={styles.titleContainer}>
            <Text style={styles.title2}>Ciclos de calor</Text>
        </View>
            <View style={styles.container}>
                <Text style={styles.title}>
                    Calderas, Tuberías de agua caliente, Tuberías de vapor, etc.
                </Text>
                <Text style={styles.subtitle}>Grado de Exposición</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Hasta200')}
                >
                    <Text style={styles.buttonText}>Hasta 200° C</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('OtrasSuperficies')}
                >
                    <Text style={styles.buttonText}>Hasta 400° C</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('OtrasSuperficies')}
                >
                    <Text style={styles.buttonText}>Hasta 550° C</Text>
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
        paddingHorizontal: 20,
    },
    titleContainer: {
        alignItems: 'center',
        marginTop: 100,
      },
      title2: {
        fontSize: 30,
        fontWeight: 'bold',
      },
    title: {
        fontSize: 20, // Tamaño de letra grande
        textAlign: 'center', // Centrar el texto
        width: '70%', // Ancho del texto
        marginBottom: 20, // Espacio debajo del título
        marginTop: 50,
        color: '#000000', // Color negro
        position: 'absolute',
        top: 0,
        paddingTop: 40, // Padding para que no quede completamente pegado al borde superior
    },
    subtitle: {
        fontSize: 18, // Tamaño de letra tipo h3
        textAlign: 'center', // Centrar el texto
        marginBottom: 30, // Espacio debajo del subtítulo
        color: '#000000', // Color negro
        fontWeight: 'bold', // Texto en negrita
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
