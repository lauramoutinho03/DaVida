import React from "react";

import { style } from "./styles";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import { themes } from "../../global/themes";

interface InstituicaoProps {
    instituicao: {
      nome: string;
      tipo: string;
      brigada: string;
      local: string;
      horario: string;
      niveisNecessidade: { [tipoSangue: string]: number };
    },
    onSwitchScreen: (screen: string, params?: any) => void;
    //currentScreen: string;
  }

export default function InstituicaoListItem( { instituicao, onSwitchScreen }: InstituicaoProps ) {

    return (
        <View style={style.container}>
            <View style={style.content}>
                <Text style={style.title}> {instituicao.nome} </Text>
                <Text style={style.subtitle}> Maior necessidade: {instituicao.tipo} </Text>
            </View>
            <TouchableOpacity
            onPress={() => onSwitchScreen('DetalhesInstituicao', { instituicao })}
            style={style.button}>
                <MaterialIcons name="add-circle-outline" size={22} color={themes.colors.black} />
                <Text style={style.buttonText}>Informações</Text>
            </TouchableOpacity>
        </View>
    )
}