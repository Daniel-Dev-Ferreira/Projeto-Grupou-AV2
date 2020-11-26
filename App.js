import 'react-native-gesture-handler';
import React from 'react';
import MainStackNavigator from  './src/navigation';
import { UsuarioProvider } from './contexts/user';
import './services/firebase';

export default function App() {
  return (
    <UsuarioProvider>
      <MainStackNavigator />
    </UsuarioProvider>
  );
}

