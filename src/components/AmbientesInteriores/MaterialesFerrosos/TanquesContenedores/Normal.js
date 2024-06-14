import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { esquemas } from '../../../BibliotecaEsquemas';
import Footer from '../../../../home/Footer';

export default function NormalTC({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState([]);

    const openModal = (esquemaId) => {
        const esquema = esquemas[esquemaId];
        if (esquema) {
            let esquemaArray = [];
            esquema.forEach(producto => {
                esquemaArray.push(producto);
            });
            setModalContent(esquemaArray);
            setModalVisible(true);
        }
    };

    const buttons = [2, 3, 8, 9, 17, 25, 37, 38, 42, 47];

    return (
        <><View style={styles.titleContainer}>
            <Text style={styles.title}>Normal</Text>
            <Text style={styles.title2}>Esquemas Amix Recomendados</Text>
        </View>
            <View style={styles.container}>
                {buttons.length < 10 ? (
                    <View style={styles.buttonContainer}>
                        {buttons.map((text, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.button}
                                onPress={() => openModal(text)}
                            >
                                <Text style={styles.buttonText}>{text}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                ) : (
                    <ScrollView contentContainerStyle={styles.buttonContainer}>
                        {buttons.map((text, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.button}
                                onPress={() => openModal(text)}
                            >
                                <Text style={styles.buttonText}>{text}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                )}

                <Modal
                    transparent={true}
                    visible={modalVisible}
                    animationType="slide"
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalBackground}>
                        <View style={styles.modalContainer}>
                            {modalContent.map((content, index) => (
                                <View key={index}>
                                    {typeof content === 'object' ? (
                                        Object.entries(content).map(([key, value], subIndex) => (
                                            <Text key={subIndex} style={styles.modalText}>
                                                <Text style={styles.modalTextBold}>{key}: </Text>
                                                {value}
                                            </Text>
                                        ))
                                    ) : (
                                        <Text style={styles.modalSeparator}></Text>
                                    )}
                                </View>
                            ))}
                            <TouchableOpacity
                                style={styles.closeButton}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.closeButtonText}>Cerrar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <Footer />
            </View></>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
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
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 70,
        marginTop: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingVertical: 20,
    },
    button: {
        backgroundColor: '#3B5A7B', // Color de fondo del botón
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 8, // Redondeo de las esquinas
        margin: 5, // Espacio entre botones
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
        fontSize: 25,
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
    },
    modalContainer: {
        width: '90%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'start',
    },
    modalText: {
        fontSize: 18,
        marginBottom: 5,
    },
    modalTextBold: {
        fontWeight: 'bold',
    },
    closeButton: {
        backgroundColor: '#3B5A7B', // Color de fondo del botón
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginTop: 20,
        width: 100,
        alignItems: 'center',
        alignSelf: 'center',
    },
    closeButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});
