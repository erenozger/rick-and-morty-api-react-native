import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppContext } from './src/services/contexts/AppContext';
import { NavigationContainer } from "@react-navigation/native";
import { lightTheme } from './styles/themes';
import { useCharacter } from './src/services/hooks/useCharacter';
import TabNavigator from './src/routes/TabNavigator';

export default function App() {

  const { useCharacterMemo, state } = useCharacter();


  return (
    <AppContext.Provider value={{ state: state, useCharacterMemo: useCharacterMemo }} >
      <NavigationContainer theme={lightTheme}>
          <TabNavigator />
      </NavigationContainer>
    </AppContext.Provider>
  );
}
