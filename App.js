import React from 'react';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import Rotas from './src/Pages/Rotas';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <StatusBar backgroundColor={"#000000"} />
      <Rotas />
    </ApplicationProvider>
  )
}



