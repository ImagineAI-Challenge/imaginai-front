import React, { useState, useCallback } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { MenuStyles } from '../Styles/MenuStyles.ts';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
import { chatIdMap, generateChatId } from '../Components/ChatManager.js';

const MenuScreen = ({ navigation }) => {

    const [search, setSearch] = useState('');
    const [chatIdArray, setChatIdArray] = useState(Array.from(chatIdMap.keys()));
    const filteredChatIdArray = chatIdArray.filter((chatId) => chatId.includes(search));

    useFocusEffect(
        useCallback(() => {
            setChatIdArray(Array.from(chatIdMap.keys()));
        }, [])
    );
    
    const handleNovaHistoriaButton = () => {
        const emptyHistoryMessages = [];
        let chatId;

        do {
            chatId = generateChatId();
        } while (chatIdMap.has(chatId));

        chatIdMap.set(chatId);
        console.log(chatId, chatIdMap);
        
        navigation.navigate('CreationScreen', { chatId, historyMessages: emptyHistoryMessages });
    };

    const handleHistoriasButton = (chatId) => {
        navigation.navigate('CreationScreen', { chatId });
        console.log(chatId);
    };

    const handleTrashIconPress = (chatId) => {
        Alert.alert(
          'Confirmação',
          'Tem certeza que deseja excluir esta história?',
          [
            {
              text: 'Cancelar',
              style: 'cancel',
            },
            {
              text: 'Confirmar',
              onPress: () => {
                chatIdMap.delete(chatId);
                setChatIdArray(Array.from(chatIdMap.keys()));
              },
            },
          ],
          { cancelable: false }
        );
      };

    return (
        <View style={MenuStyles.containerMaster}>
            <Image
                style={MenuStyles.background}
                source={require('../Assets/rpg_background.png')}
                blurRadius={5}
            />
            <Image
                style={MenuStyles.logo}
                source={require('../Assets/logo.png')}
            />
            <TouchableOpacity
                style={MenuStyles.newStoryButton}
                onPress={handleNovaHistoriaButton}>
                <Text style={MenuStyles.newStoryText}>NOVA HISTÓRIA</Text>
            </TouchableOpacity>
            <View style={MenuStyles.searchBar}>
                <Fontisto
                    style={MenuStyles.searchIcon}
                    name='search'
                    color='#BFC4D9'>
                </Fontisto>
                <TextInput
                    style={MenuStyles.input}
                    onChangeText={(text) =>
                        setSearch(text)
                    }
                    value={search}
                    placeholder='Pesquisar'
                    placeholderTextColor="#BFC4D9"
                    keyboardType='default'>
                </TextInput>
            </View>
            <ScrollView>
                <>
                    {filteredChatIdArray.map((chatId) => (
                        <View style={MenuStyles.storiesContainer}>
                            <TouchableOpacity
                                key={chatId}
                                style={MenuStyles.storiesButton}
                                onPress={() => handleHistoriasButton(chatId)}>
                                <Text style={MenuStyles.storiesText}>{chatId}</Text>

                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleTrashIconPress(chatId)}>
                                <Fontisto 
                                    style={MenuStyles.trashIcon}
                                    name='trash'
                                    color='#E13737'>
                                </Fontisto>
                            </TouchableOpacity>
                        </View>
                        
                    ))}
                </>
            </ScrollView>
        </View>
    );
};

export { MenuScreen };
