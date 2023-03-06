import * as React from 'react';
import { View, Text } from 'react-native';
import {Surface} from 'react-native-paper';

export default function GuiaScreen({ navigation }) {
  return (
      <Surface style={{ flex: 1, backgroundColor: '#121212' }}>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Esta é a tela de Guia!</Text>
        </View>
      </Surface>
  );
}
