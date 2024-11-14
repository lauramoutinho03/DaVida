import React, { useState } from "react";

import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';

import { style } from "./style";
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'
import ModalSelector from 'react-native-modal-selector';
import { themes } from "../../global/themes";
import { Input } from "../../components/input";
import { Button } from "../../components/Button";
import MenuInferior from "../../components/MenuInferior"
import InstituicaoListItem from "../../components/InstituicaoListItem";

type HomeProps = {
    onSwitchScreen: (screen: string) => void;
    currentScreen: string;
};

const districtOptions = [
    { key: '1', label: 'Lisboa' },
    { key: '2', label: 'Porto' },
    { key: '3', label: 'Coimbra' },
    //{ key: '4', label: '' },
    // Adicione mais distritos conforme necessário
];


export default function Home ({ onSwitchScreen, currentScreen}: HomeProps) {

    const [distrito, setDistrito] = useState<string | undefined>();
    const [data, setData] = useState('');
    
    return (
        <View style={style.container}>
            {/* Header com botões de notificações e informações */}
            <View style={style.header}>
                <TouchableOpacity style={style.buttonHeader}>
                    <MaterialIcons name="notifications" size={27} color={themes.colors.black} />
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonHeader}>
                    <FontAwesome5 name="newspaper" size={25} color={themes.colors.black} />
                </TouchableOpacity>
            </View>
            
            {/* Filtros de cidade e data */}
            <View style={style.filterContainer}>

                <ModalSelector
                        data={districtOptions}
                        initValue="Distrito"
                        onChange={(option) => setDistrito(option.label)}
                        style={style.picker}
                >
                        <View style={style.iconInput}>
                            <Text style={style.pickerText}>{distrito || "Distrito"}</Text>
                            <MaterialIcons
                                name='arrow-drop-down'
                                size={25}
                                color={themes.colors.darkGrey}
                            />
                        </View>
                </ModalSelector>

                <View style={style.picker}>
                    <View style={style.iconInput}>
                            <Text style={style.pickerText}>{data || "Data"}</Text>
                            <MaterialIcons
                                name='calendar-today'
                                size={20}
                                color={themes.colors.darkGrey}
                            />
                    </View>
                </View>


            </View>

            {/* Lista de Instituições */}
            <ScrollView style={style.listContainer} persistentScrollbar={true}>
                <InstituicaoListItem />
                <InstituicaoListItem />
                <InstituicaoListItem />
                <InstituicaoListItem />
                <InstituicaoListItem />
                <InstituicaoListItem />
                <InstituicaoListItem />
                <InstituicaoListItem />
                <InstituicaoListItem />
            </ScrollView>
            
            {/* Botão para realizar marcação */}
            <View style={style.boxBottom}>
                <Button text="Realizar marcação" />
            </View>
        
            <MenuInferior onSwitchScreen={onSwitchScreen} currentScreen={currentScreen} />
        </View>
    )
    
}