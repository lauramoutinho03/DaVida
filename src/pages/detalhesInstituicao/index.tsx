import React, { useState } from "react";

import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

import { style } from "./style";
import { MaterialIcons } from '@expo/vector-icons'
import { themes } from "../../global/themes";

type DetalhesInstituicaoProps = {
    onSwitchScreen: (screen: string) => void;
    currentScreen: string;
    route?: { params?: { instituicao?: { nome: string; 
        tipo: string; 
        brigada: string; 
        local: string;
        horario: string;
        niveisNecessidade: { [tipoSangue: string]: number };
    } } };
};

const coracoes = (nivel: number) => {
    const total = 5;
    return (
        <View style={style.nivelContainer}>
            {Array.from({ length: total }).map((_, index) => (
                <MaterialIcons
                    key={index}
                    name="favorite"
                    size={24}
                    color={index < nivel ? themes.colors.darkRed : themes.colors.lightGrey}
                />
            ))}
        </View>
    );
};

export default function DetalhesInstituicao({ onSwitchScreen, route }: DetalhesInstituicaoProps) {
    const instituicao = route?.params?.instituicao;

    return (
        <View style={style.container}>
            <TouchableOpacity style={style.backButton} onPress={() => onSwitchScreen("Home")}>
                <MaterialIcons name="arrow-back" size={24} color={themes.colors.black} />
            </TouchableOpacity>
            
            <Text style={style.title}>Detalhes da Instituição</Text>
            
            {instituicao ? (
                <View style={style.infoContainer}>
                    <Text style={[style.subtitle, style.bold]}>Nome:</Text>
                    <Text style={style.subtitle}>{instituicao.nome}</Text>

                    <Text style={[style.subtitle, style.bold]}>Brigada:</Text>
                    <Text style={style.subtitle}>{instituicao.brigada}</Text>

                    <Text style={[style.subtitle, style.bold]}>Local:</Text>
                    <Text style={style.subtitle}>{instituicao.local}</Text>

                    <Text style={[style.subtitle, style.bold]}>Horário:</Text>
                    <Text style={style.subtitle}>{instituicao.horario}</Text>


                    <Text style={style.sectionTitle}>Níveis de necessidades de cada tipo sanguíneo:</Text>

                    <View style={style.niveisContainer}>
                        {Object.entries(instituicao.niveisNecessidade).map(([tipo, nivel]) => (
                            <View key={tipo} style={style.nivelRow}>
                                <Text style={style.tipoText}>{tipo}</Text>
                                {coracoes(nivel)}
                            </View>
                        ))}
                    </View>
                        

                    
                    <View style={style.legendaContainer}>
                        <MaterialIcons name="info-outline" size={24} color={themes.colors.black} />
                        <Text style={style.legendaText}>(Quantos mais corações preenchidos menor é a necessidade)</Text>
                    </View>

                </View>
            ) : (
                <Text>Nenhuma instituição selecionada.</Text>
            )}
        </View>
    );
}