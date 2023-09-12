import React, { useState, useEffect } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { CreationStyles } from '../Styles/CreationStyles.ts';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { getStoredMessages,sendMessage } from '../Components/ChatManager.js';

const CreationScreen = ({ navigation }) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const loadStoredMessages = async () => {
            const storedMessages = await getStoredMessages();
            setMessages(storedMessages);
        };

        loadStoredMessages();
    }, []);

    const handleSendMessage = async () => {
        sendMessage(message, messages, setMessages, setMessage);
    };


    return (
        <View style={CreationStyles.containerMaster}>
            <View style={CreationStyles.header}>
                <TouchableOpacity
                    onPress={() =>
                        navigation.goBack()
                    }>
                    <FontAwesome
                        style={CreationStyles.arrowIcon}
                        name='arrow-left'
                        color='white'>
                    </FontAwesome>
                </TouchableOpacity>
            </View>
            <ScrollView style={CreationStyles.body}>
                <Image
                    style={CreationStyles.logoTranslucid}
                    source={require('../Assets/logo_translucid.png')}>
                </Image>
                <View>
                    {messages.map((item, index) => (
                        <View
                            key={index}
                            style={item.fromUser ? CreationStyles.userMessageContainer : CreationStyles.botMessageContainer}
                        >
                            <Text
                                style={item.fromUser ? CreationStyles.userMessage : CreationStyles.botMessage}
                            >
                                {item.text}
                            </Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
            <View style={CreationStyles.footer}>
                <View style={CreationStyles.messageBar}>
                    <TextInput
                        style={CreationStyles.input}
                        onChangeText={(text) =>
                            setMessage(text)
                        }
                        value={message} placeholder='Mande uma mensagem'
                        placeholderTextColor="#BFC4D9"
                        keyboardType='default'
                        onSubmitEditing={handleSendMessage}>
                    </TextInput>
                    <TouchableWithoutFeedback onPress={handleSendMessage}>
                        <MaterialCommunityIcons
                            style={CreationStyles.sendIcon}
                            name='send'
                            color='#BFC4D9'>
                        </MaterialCommunityIcons>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </View>
    );
};

export { CreationScreen };