import React from "react";

import { View, Text } from 'react-native';

import { style } from "./style";
import { MaterialIcons, Octicons } from '@expo/vector-icons'
import { themes } from "../../global/themes";
import { Input } from "../../components/input";
import { Button } from "../../components/Button";
import MenuInferior from "../../components/MenuInferior";

type ProfileProps = {
    onSwitchScreen: (screen: string) => void;
    currentScreen: string;
};


export default function Profile ({ onSwitchScreen, currentScreen }: ProfileProps) {
    
    return (
        <View style={style.container}>
            <Text style={style.title}>Bem-vindo ao Perfil!</Text>

            {/* Botão de logout */}
            <Button 
                text="Logout" 
                onPress={() => onSwitchScreen('Login')} 
                style={style.logoutButton} 
            />

            <MenuInferior onSwitchScreen={onSwitchScreen} currentScreen={currentScreen} />
        </View>
    )
    
}