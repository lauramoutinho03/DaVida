import React, { useState } from "react";

import { 
    Text, 
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator
} from 'react-native';

import { style } from "./styles";
import Logo from '../../assets/logo_novo.png';
import { MaterialIcons, Octicons } from '@expo/vector-icons'
import { themes } from "../../global/themes";
import { Input } from "../../components/input";
import { Button } from "../../components/Button";

type LoginProps = {
    onSwitchScreen: () => void;
    onLoginSuccess: () => void;
};

export default function Login ({ onSwitchScreen, onLoginSuccess }: LoginProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [loading, setLoading] = useState(false);

    async function getLogin() {
        try {
            setLoading(true);
    
            if (!email || !password) {
                setLoading(false); // Desativa o loading caso os campos estejam vazios
                return Alert.alert('Atenção', 'Preencha os campos obrigatórios!');
            }
    
            // Simulação de uma requisição de login com um Promise
            await new Promise(resolve => setTimeout(resolve, 2000));
    
            Alert.alert('Login realizado com sucesso!');
            onLoginSuccess(); // Chama a função para mudar para a homepage
            
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false); // Garante que o loading será desativado no final
        }
    }

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
                <Input 
                    value={email}
                    onChangeText={setEmail}
                    //title="Endereço de e-mail"
                    IconRight={MaterialIcons}
                    iconRightName="email"
                    keyboardType="email-address"
                    placeholder="Endereço de e-mail"
                    placeholderTextColor={themes.colors.placeholderColor}
                />
                <Input 
                    value={password}
                    onChangeText={setPassword}
                    //title="Password"
                    IconRight={Octicons}
                    iconRightName={showPassword?"eye-closed":"eye"}
                    secureTextEntry={showPassword}
                    onIconRightPress={() => setShowPassword(!showPassword)}
                    placeholder="Password"
                    placeholderTextColor={themes.colors.placeholderColor}
                />
            </View>
            <View style={style.boxBottom}>
                <Button text="Entrar" loading={loading} onPress={()=>getLogin()}/>
            </View>
            <TouchableOpacity onPress={onSwitchScreen}>
                <Text style={style.textBottom}>Não tem conta? <Text style={{fontWeight: 'bold'}}>Criar conta</Text></Text>
            </TouchableOpacity>
        </View>
    )
}