import React, { useState } from "react";

import { Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';

import { style } from "./style";
import Logo from '../../assets/logo_novo.png';
import { MaterialIcons, Octicons } from '@expo/vector-icons'
import { themes } from "../../global/themes";
import { Input } from "../../components/input";
import { Button } from "../../components/Button";

import ModalSelector from 'react-native-modal-selector';

type RegisterProps = {
    onSwitchScreen: () => void;
};

export default function Register ({ onSwitchScreen }: RegisterProps) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [genero, setGenero] = useState<string | undefined>();
    
    const [dataNasc, setDataNasc] = useState('');

    const [nif, setNIF] = useState('');
    const [numUtente, setNumUtente] = useState('');
    const [distrito, setDistrito] = useState<string | undefined>();
    const [tipoSangue, setTipoSangue] = useState<string | undefined>();
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const [showPassword, setShowPassword] = useState(true);
    const [loading, setLoading] = useState(false);

    const genderOptions = [
        { key: '1', label: 'Masculino' },
        { key: '2', label: 'Feminino' },
        { key: '3', label: 'Outro' },
    ];
    const districtOptions = [
        { key: '1', label: 'Lisboa' },
        { key: '2', label: 'Porto' },
        { key: '3', label: 'Coimbra' },
        //{ key: '4', label: '' },
        // Adicione mais distritos conforme necessário
    ];
    const bloodTypeOptions = [
        { key: '1', label: 'A+' },
        { key: '2', label: 'A-' },
        { key: '3', label: 'B+' },
        { key: '4', label: 'B-' },
        { key: '5', label: 'AB+' },
        { key: '6', label: 'AB-' },
        { key: '7', label: 'O+' },
        { key: '8', label: 'O-' },
    ];


    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image 
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"
                />
            </View>

            <View style={style.boxMid}>
                <ScrollView persistentScrollbar={true}>
                    <Input 
                        value={nome}
                        onChangeText={setNome}

                        IconRight={MaterialIcons}
                        iconRightName="person"
                        placeholder="Nome completo"
                        placeholderTextColor={themes.colors.placeholderColor}
                    />
                    <Input 
                        value={email}
                        onChangeText={setEmail}
                        IconRight={MaterialIcons}
                        iconRightName="email"
                        placeholder="E-mail"
                        placeholderTextColor={themes.colors.placeholderColor}
                        keyboardType="email-address"
                    />
                    <Input 
                        value={telefone}
                        onChangeText={setTelefone}
                        IconRight={MaterialIcons}
                        iconRightName="call"
                        placeholder="Telefone"
                        placeholderTextColor={themes.colors.placeholderColor}
                        keyboardType="phone-pad"
                    />
                    <ModalSelector
                        data={genderOptions}
                        initValue="Género"
                        onChange={(option) => setGenero(option.label)}
                        style={style.picker}
                    >
                        <View style={style.iconInput}>
                            <Text style={style.pickerText}>{genero || "Género"}</Text>
                            <MaterialIcons
                                    name='arrow-drop-down'
                                    size={25}
                                    color={themes.colors.darkGrey}
                            />
                        </View>
                        
                    </ModalSelector>
                    
                    <Input 
                        value={dataNasc}
                        onChangeText={setDataNasc}
                        IconRight={MaterialIcons}
                        iconRightName="calendar-today"
                        placeholder="Data de Nascimento"
                        placeholderTextColor={themes.colors.placeholderColor}
                        keyboardType="numeric"
                    />

                    <Input 
                        value={nif}
                        onChangeText={setNIF}
                        IconRight={MaterialIcons}
                        iconRightName="badge"
                        placeholder="NIF"
                        placeholderTextColor={themes.colors.placeholderColor}
                        keyboardType="numeric"
                    />
                    <Input 
                        value={numUtente}
                        onChangeText={setNumUtente}
                        //title="Nº de Utente"
                        IconRight={MaterialIcons}
                        iconRightName="badge"
                        placeholder="Nº de Utente"
                        placeholderTextColor={themes.colors.placeholderColor}
                        keyboardType="numeric"
                    />
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
    
                    <ModalSelector
                        data={bloodTypeOptions}
                        initValue="Tipo Sanguíneo"
                        onChange={(option) => setTipoSangue(option.label)}
                        style={style.picker}
                    >
                        <View style={style.iconInput}>
                            <Text style={style.pickerText}>{tipoSangue || "Tipo Sanguíneo"}</Text>
                            <MaterialIcons
                                name='arrow-drop-down'
                                size={25}
                                color={themes.colors.darkGrey}
                            />
                        </View>
                        
                    </ModalSelector>

                    <Input 
                        value={password}
                        onChangeText={setPassword}
                        IconRight={MaterialIcons}
                        iconRightName="key"
                        placeholder="Password"
                        placeholderTextColor={themes.colors.placeholderColor}
                    />
                    <Input 
                        value={password2}
                        onChangeText={setPassword2}
                        IconRight={MaterialIcons}
                        iconRightName="key"
                        placeholder="Confirmar Password"
                        placeholderTextColor={themes.colors.placeholderColor}
                    />
                    <View style={style.boxBottom}>
                        <Button text="Registar" loading={loading}/>
                    </View>
                </ScrollView>
            </View>
            
                
            
            <TouchableOpacity onPress={onSwitchScreen}>
                <Text style={style.textBottom}>Já tem conta? <Text style={{fontWeight: 'bold'}}>Entrar</Text></Text>
            </TouchableOpacity>

        </View>
    )
}