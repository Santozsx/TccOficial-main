import Routes from './src/routes.js';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import navegaEnem2 from './src/screens/Vestibular/enem/enem.js';
import FormularioProva from './src/screens/formularioprovas/FormularioProva.js';


export default function App() {
  return (

    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  
  );
}

