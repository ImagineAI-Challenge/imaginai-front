import AsyncStorage from '@react-native-async-storage/async-storage';
import { enviarMensagemAPI } from './ApiService.js';

export const getStoredMessages = async () => {
    try {
        const storedMessages = await AsyncStorage.getItem('chatMessages');
        return storedMessages !== null ? JSON.parse(storedMessages) : [];
    } catch (error) {
        console.error('Erro ao recuperar as mensagens: ', error);
        return [];
    }
};

export const sendMessage = async (message, messages, setMessages, setMessage) => {
    if (message.trim() !== '') {
        const newMessage = { text: message, fromUser: true };
        const updatedMessages = [...messages, newMessage];
        setMessages(updatedMessages);
        setMessage('');

        try {
            const apiMessage = await enviarMensagemAPI(message);
            const responseData = apiMessage.gptResponse;
            const parts = responseData.split('\n');
            const response = parts[2].trim();
            const updatedMessagesWithAPIResponse = [...updatedMessages, { text: response, fromUser: false }];
            setMessages(updatedMessagesWithAPIResponse);
            await AsyncStorage.setItem('chatMessages', JSON.stringify(updatedMessagesWithAPIResponse));
        } catch (error) {
            console.error('Erro ao enviar ou salvar as mensagens: ', error);
        }
    }
};