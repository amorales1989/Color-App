import Constants from 'expo-constants';

const getEvents = async () => {
    try {
        const response = await fetch(`${Constants.manifest.extra.REACT_APP_URL}events`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        if (!response.ok) {
            throw new Error('Error al obtener los datos');
        }
        const data = await response.json();  
        return data;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
};

export default getEvents;
