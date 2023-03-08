import * as React from 'react';
import { View, Text } from 'react-native';
import { Surface, Provider as PaperProvider, MD3DarkTheme as DefaultTheme } from 'react-native-paper';

export default function MuralScreen() {
  return (
    <PaperProvider theme={DefaultTheme}>
    <Surface style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Esta é a tela de Mural!</Text>
      </View>
      </Surface>
    </PaperProvider>
  );
}
