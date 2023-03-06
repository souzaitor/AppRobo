import * as React from 'react';
import { View, Text } from 'react-native';
import {Surface} from 'react-native-paper';

import { SafeAreaView } from 'react-native';
import { Appbar } from 'react-native-paper';


export default function GuiaScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Action
          icon="menu"
          onPress={() => navigation.openDrawer()}
        />
        <Appbar.Content title="Guia" />
      </Appbar.Header>
      <Surface style={{ flex: 1, backgroundColor: '#121212' }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Esta é a tela de Guia!</Text>
        </View>
      </Surface>
    </SafeAreaView>
  );
}
