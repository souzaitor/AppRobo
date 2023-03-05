import * as React from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import { AppRegistry, View, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import { MD3DarkTheme as DefaultTheme, Provider as PaperProvider, Surface, Appbar, Card, Title, Paragraph } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import GuiaScreen from './screens/GuiaScreen.js';

const Stack = createStackNavigator();
const screenWidth = Dimensions.get('window').width;
const screenHeigh = Dimensions.get('window').height;
const cardWidth = screenWidth * 0.4; 
const cardHeight = screenHeigh * 0.4;


export default function Main({ navigation }) {

  React.useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  }, []);

  return (
    <PaperProvider theme={DefaultTheme}>
      <Surface style={{ flex: 1, backgroundColor: '#121212' }}>
        <Appbar.Header style={{ backgroundColor: '#121212' }}>
          <Appbar.Content title="Olá, eu sou o robô do DC, como posso ajudar? " />
        </Appbar.Header>
        <ScrollView horizontal={true} style={{ flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Guia')}>
            <Card style={{ marginHorizontal: 8, width: cardWidth, height: cardHeight }}>
              <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1548345680-f5475ea5df84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80' }}/>
              <Card.Content>
                <Title>Guia</Title>
                <Paragraph numberOfLines={5}>
                  Posso te levar até o lugar que escolher do Departamento de Computação.
                </Paragraph>
              </Card.Content>
            </Card>
          </TouchableOpacity>
            <Card style={{ marginHorizontal: 8, width: cardWidth, height: cardHeight }}>
              <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1560420025-9453f02b4751?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=701&q=80' }} />
              <Card.Content>
                <Title>Mural</Title>
                <Paragraph numberOfLines={10}>
                  Posso te mostrar notícias sobre o Departamento de Computação.
                </Paragraph>
              </Card.Content>
            </Card>
            <Card style={{ marginHorizontal: 8, width: cardWidth, height: cardHeight }}>
              <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' }} />
              <Card.Content>
                <Title>Bate-papo</Title>
                <Paragraph numberOfLines={5}>
                  Podemos conversar um pouco se você não estiver se sentindo bem.
                </Paragraph>
              </Card.Content>
            </Card>
            <Card style={{ marginHorizontal: 8, width: cardWidth, height: cardHeight }}>
              <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1633504498295-50aa936d57bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1108&q=80' }} />
              <Card.Content>
                <Title>Cardápio</Title>
                <Paragraph numberOfLines={5}>
                  Posso te mostrar o cardápio disponível no Restaurante Universitário.
                </Paragraph>
              </Card.Content>
            </Card>
        </ScrollView>
      </Surface>
    </PaperProvider>
  );
}

function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={Main} options={{ headerShown: true }} />
      <Stack.Screen name="Guia" component={GuiaScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

AppRegistry.registerComponent('App', () => App);

  