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

//const Stack = createStackNavigator();

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Login');

  const switchToHome = () => {
    setCurrentScreen('Home'); // Função para mudar para a homepage
  };

  const switchScreen = (screen: string) => {
    setCurrentScreen(screen); // Função para mudar para diferentes telas
  };

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
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
