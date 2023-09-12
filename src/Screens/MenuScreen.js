import React, { useState } from 'react';
import { View,Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { MenuStyles } from '../Styles/MenuStyles.ts';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';

const MenuScreen = ({ navigation }) => {

    const [search, setSearch] = useState('');

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
                onPress={() =>
                    navigation.navigate('CreationScreen')
                }>
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
                    value={search} placeholder='Pesquisar'
                    placeholderTextColor="#BFC4D9"
                    keyboardType='default'>
                </TextInput>
            </View>
        </View>
    );
};

export { MenuScreen };
