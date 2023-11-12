import AsyncStorage from '@react-native-async-storage/async-storage';
import { enviarMensagemAPI } from './ApiService.js';

export const chatIdMap = new Map();
    
export const generateChatId = () => {
    const chatIdLength = 8;
    let chatId = '';
    
    for (let i = 0; i < chatIdLength; i++) {
        chatId += Math.floor(Math.random() * 10);
    }

    return chatId;
};

export const removeLastChatId = () => {
    const chatIdsArray = Array.from(chatIdMap.keys());

    if (chatIdsArray.length > 0) {
        const lastKey = chatIdsArray[chatIdsArray.length - 1];
        chatIdMap.delete(lastKey);
        console.log(`Último chatId removido: ${lastKey}`, chatIdMap);
    } else {
        console.log('O Map está vazio.');
    }
    
};

export const getStoredMessages = async (chatId) => {
    try {
        const key = `chatMessages_${chatId}`;
        const storedMessages = await AsyncStorage.getItem(key);
        return storedMessages !== null ? JSON.parse(storedMessages) : [];
    } catch (error) {
        console.error('Erro ao recuperar as mensagens: ', error);
        return [];
    }
};

export const sendMessage = async (chatId, message, historyMessages, setHistoryMessages, setMessage) => {
    if (message.trim() !== '') {
        const newMessage = { text: message, fromUser: true };
        const updatedMessages = [...historyMessages, newMessage];
        setHistoryMessages(updatedMessages);
        setMessage('');
        console.log("sendMessage function: ", chatId)
        try {
            const apiMessage = await enviarMensagemAPI(message);
            const responseData = apiMessage.gptResponse;
            const parts = responseData.split('\n');
            const response = parts[2].trim();
            const updatedMessagesWithAPIResponse = [...updatedMessages, { text: response, fromUser: false }];

            const key = `chatMessages_${chatId}`;

            setHistoryMessages(updatedMessagesWithAPIResponse);
            await AsyncStorage.setItem(key, JSON.stringify(updatedMessagesWithAPIResponse));
        } catch (error) {
            console.error('Erro ao enviar ou salvar as mensagens: ', error);
        }
    }
};