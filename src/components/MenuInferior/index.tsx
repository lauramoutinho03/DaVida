import React from 'react';

import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { themes } from "../../global/themes";
import { MaterialIcons, Octicons } from '@expo/vector-icons'

type MenuProps = {
    onSwitchScreen: (screen: string) => void;
    currentScreen: string;
};

export default function MenuInferior({ onSwitchScreen, currentScreen }: MenuProps) {
    return (
        <View style={styles.menu}>
            <TouchableOpacity onPress={() => onSwitchScreen('Home')} style={styles.menuButton}>
                <MaterialIcons 
                    name="home" 
                    size={30} 
                    color={currentScreen === 'Home' ? themes.colors.black : themes.colors.darkGrey} 
                />
                <Text style={[styles.menuItem, currentScreen === 'Home' && styles.activeItem]}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onSwitchScreen('History')} style={styles.menuButton}>
                <MaterialIcons 
                    name="history" 
                    size={30} 
                    color={currentScreen === 'History' ? themes.colors.black : themes.colors.darkGrey} 
                />
                <Text style={[styles.menuItem, currentScreen === 'History' && styles.activeItem]}>Histórico</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onSwitchScreen('FAQ')} style={styles.menuButton}>
                <MaterialIcons 
                    name="help-outline" 
                    size={30} 
                    color={currentScreen === 'FAQ' ? themes.colors.black : themes.colors.darkGrey} 
                />
                <Text style={[styles.menuItem, currentScreen === 'FAQ' && styles.activeItem]}>FAQ</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onSwitchScreen('Profile')} style={styles.menuButton}>
                <MaterialIcons 
                    name="person" 
                    size={30} 
                    color={currentScreen === 'Profile' ? themes.colors.black : themes.colors.darkGrey} 
                />
                <Text style={[styles.menuItem, currentScreen === 'Profile' && styles.activeItem]}>Perfil</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        backgroundColor: themes.colors.lightGrey,
        paddingVertical: 20,
        position: 'absolute',
        bottom: 0,
    },
    menuButton: {
        alignItems: 'center',
    },
    menuItem: {
        fontSize: 16,
        color: themes.colors.darkGrey,
    },
    activeItem: {
        fontWeight: 'bold',
        color: themes.colors.black,
    },
});
