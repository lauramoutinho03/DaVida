import React, { useState } from "react";

import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

import { style } from "./style";
import { MaterialIcons } from '@expo/vector-icons'
import { themes } from "../../global/themes";

type NotificacoesProps = {
    onSwitchScreen: (screen: string) => void;
    currentScreen: string;
};

export default function Notificacoes ({ onSwitchScreen, currentScreen}: NotificacoesProps) {
    
    
    return (
        <SafeAreaView style={style.container}>
            <TouchableOpacity style={style.backButton} onPress={() => onSwitchScreen("Home")}>
                <MaterialIcons name="arrow-back" size={24} color={themes.colors.black} />
            </TouchableOpacity>
            
            <Text style={style.title}>Bem-vindo às Notificações!</Text>
        </SafeAreaView>
    )
}