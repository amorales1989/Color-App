import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Puedes elegir la biblioteca de íconos que prefieras
import { useNavigation } from '@react-navigation/native';
import { BackHandler } from 'react-native';

export default function Footer() {
    const navigation = useNavigation();

    const handleHomePress = () => {
        navigation.navigate('Home'); // Navegar a la pantalla de inicio
    };

    const handleClosePress = () => {
        Alert.alert(
            "Salir",
            "¿Estás seguro de que deseas cerrar la aplicación?",
            [
                { text: "Cancelar", style: "cancel" },
                { text: "Salir", onPress: () => BackHandler.exitApp() }
            ]
        );
    };

    return (
        <View style={styles.footer}>
            <TouchableOpacity style={styles.iconContainer} onPress={handleHomePress}>
                <Icon name="home" size={30} color="#FFFFFF" />
                <Text style={styles.iconText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} onPress={handleClosePress}>
                <Icon name="exit" size={30} color="#FFFFFF" />
                <Text style={styles.iconText}>Salir</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#333333',
        paddingVertical: 10,
        position: 'absolute', // Establecer la posición absoluta
        bottom: 0, // Alinear el footer al fondo
        width: Dimensions.get('window').width, // Ancho igual al ancho de la pantalla
    },
    iconContainer: {
        alignItems: 'center',
    },
    iconText: {
        color: '#FFFFFF',
        fontSize: 10,
    },
});
