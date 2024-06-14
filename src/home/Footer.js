import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { BackHandler } from 'react-native';

export default function Footer() {
    const navigation = useNavigation();

    const handleHomePress = () => {
        navigation.navigate('Home');
    };

    const handleBackPress = () => {
        navigation.goBack();
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
            <TouchableOpacity style={styles.iconContainer} onPress={handleBackPress}>
                <Icon name="arrow-left" size={30} color="#FFFFFF" />
                <Text style={styles.iconText}>Atrás</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} onPress={handleHomePress}>
                <Icon name="home" size={30} color="#FFFFFF" />
                <Text style={styles.iconText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} onPress={handleClosePress}>
                <Icon name="close" size={30} color="#FFFFFF" />
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
        position: 'absolute',
        bottom: 0,
        width: Dimensions.get('window').width,
    },
    iconContainer: {
        alignItems: 'center',
    },
    iconText: {
        color: '#FFFFFF',
        fontSize: 10,
    },
});
