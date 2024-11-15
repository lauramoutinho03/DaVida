import React, { useState } from "react";

import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';

import { style } from "./style";
import { MaterialIcons } from '@expo/vector-icons'
import { themes } from "../../global/themes";

type CampanhasProps = {
    onSwitchScreen: (screen: string) => void;
    currentScreen: string;
};

export default function Campanhas ({ onSwitchScreen, currentScreen}: CampanhasProps) {
    
    
    return (
        <SafeAreaView style={style.container}>
            <TouchableOpacity style={style.backButton} onPress={() => onSwitchScreen("Home")}>
                <MaterialIcons name="arrow-back" size={24} color={themes.colors.black} />
            </TouchableOpacity>
            
            <Text style={style.title}>Bem-vindo às Campanhas!</Text>
        </SafeAreaView>
    )
}