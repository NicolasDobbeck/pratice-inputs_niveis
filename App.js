import React from 'react';
import { View } from 'react-native';
import Nivel1 from './components/Nivel1';
import Nivel2 from './components/Nivel2';
import Nivel3 from './components/Nivel3';

export default function App() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Nivel1 />
      <Nivel2 />
      <Nivel3 />
    </View>
  );
}
