import React from "react";

import { style } from "./styles";
import { View, Text, TouchableOpacity } from "react-native";

export default function InstituicaoListItem() {

    return (
        <View style={style.container}>
            <View style={style.content}>
                <Text style={style.title}> Primeira Instituição </Text>
                <Text style={style.subtitle}> Maior necessidade: Tipo </Text>
            </View>
            <TouchableOpacity style={style.button}>
                <Text style={style.buttonText}>+ Informações</Text>
            </TouchableOpacity>
        </View>
    )
}