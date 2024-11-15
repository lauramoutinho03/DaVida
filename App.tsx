//import './gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { useState } from 'react';

import Login from './src/pages/login';
import Register from './src/pages/register';
import Home from './src/pages/home';
import Profile from './src/pages/profile';
import FAQ from './src/pages/faq';
import History from './src/pages/history';
import Notificacoes from './src/pages/notificacoes';
import Campanhas from './src/pages/campanhas';
import DetalhesInstituicao from './src/pages/detalhesInstituicao';

//const Stack = createStackNavigator();

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Login');

  const switchToHome = () => {
    setCurrentScreen('Home'); // Função para mudar para a homepage
  };

  const switchScreen = (screen: string, params?: any) => {
    setCurrentScreen(screen);
    setCurrentScreenParams(params || null); // Armazena os parâmetros para a próxima tela
  };
  

  const [currentScreenParams, setCurrentScreenParams] = useState<{
    instituicao?: { nome: string; 
      tipo: string; 
      brigada: string; 
      local: string;
      horario: string;
      niveisNecessidade: { [tipoSangue: string]: number }; 
    };
  } | null>(null);


  return (
    <View style={styles.container}>
      {currentScreen === 'Login' ? (
        <Login 
          onSwitchScreen={() => setCurrentScreen('Register')} 
          onLoginSuccess={switchToHome} 
        />
      ) : currentScreen === 'Register' ? (
        <Register onSwitchScreen={() => setCurrentScreen('Login')} />
      ) : currentScreen === 'Home' ? (
        <Home onSwitchScreen={switchScreen} currentScreen={currentScreen} />
      ) : currentScreen === 'History' ? (
        <History onSwitchScreen={switchScreen} currentScreen={currentScreen} />
      ) : currentScreen === 'FAQ' ? (
        <FAQ onSwitchScreen={switchScreen} currentScreen={currentScreen} />
      ) : currentScreen === 'Profile' ? (
        <Profile onSwitchScreen={switchScreen} currentScreen={currentScreen} />
      ) : currentScreen === 'Notificacoes' ? (
        <Notificacoes onSwitchScreen={switchScreen} currentScreen={currentScreen} />
      ): currentScreen === 'Campanhas' ? (
        <Campanhas onSwitchScreen={switchScreen} currentScreen={currentScreen} />
      ): currentScreen === 'DetalhesInstituicao' ? (
        <DetalhesInstituicao
          onSwitchScreen={switchScreen}
          currentScreen={currentScreen}
          route={{ params: currentScreenParams || { instituicao: { nome: '', 
            tipo: '', 
            brigada: '', 
            local: '',
            horario: '',
            niveisNecessidade: {},
          } } }}
        />
      ): null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
