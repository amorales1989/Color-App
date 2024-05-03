import Constants from 'expo-constants';
const addNewEvent = async (body) => {
    try {
        const response = await fetch(`${Constants.manifest.extra.REACT_APP_URL}event`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                eventTitle: body.eventTitle,
                eventDate: body.eventDate,
                eventTime: body.eventTime,   
            }),
        });

        if (!response.ok) {
            const errorData = await response.text();
            throw new Error(errorData.error);
        }
        
        const data = await response.text();
        return data;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
};
export default addNewEvent;
