import * as React from 'react';
import { Image, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { List, Provider as PaperProvider, MD3DarkTheme as DefaultTheme, Surface} from 'react-native-paper';


const call_API_mov = async(local) => {
    console.log(`Chamando API... Local=${local}`);
    fetch(`http://192.168.67.252:5000/ros/goTo/${local}`).catch((error) => console.log(error));
}

const MyComponent = () => (
  
    <ScrollView vertical={true} >
        <List.Item
            title="LE-1"
            left={props => <List.Icon {...props} icon="desktop-mac" />}
            onPress={()=>call_API_mov('LE-1')}
            
        />
        <List.Item
            title="LE-2"
            left={props => <List.Icon {...props} icon="desktop-mac" />}
            onPress={()=>call_API_mov('LE-2')}
        />
        <List.Item
            title="LE-3"
            left={props => <List.Icon {...props} icon="desktop-mac" />}
            onPress={()=>call_API_mov('LE-3')}
        />
        <List.Item
            title="LE-4"
            left={props => <List.Icon {...props} icon="desktop-mac" />}
            onPress={()=>call_API_mov('LE-4')}
        />
        <List.Item
            title="Suporte"
            left={props => <List.Icon {...props} icon="tools" />}
            onPress={()=>call_API_mov('Suporte')}
        />
        <List.Item
            title="PPG-CC4"
            left={props => <List.Icon {...props} icon="google-classroom" />}
            onPress={()=>call_API_mov('PPG-CC4')}
        />
        <List.Item
            title="Maker Space"
            left={props => <List.Icon {...props} icon="robot-industrial" />}
            onPress={()=>call_API_mov('Maker')}
        />
        <List.Item
            title="LE-5"
            left={props => <List.Icon {...props} icon="desktop-mac" />}
            onPress={()=>call_API_mov('LE-5')}
        />
        <List.Item
            title="Auditório"
            left={props => <List.Icon {...props} icon="presentation" />}
            onPress={()=>call_API_mov('Auditorio')}
        />
        <List.Item
            title="Banheiros"
            left={props => <List.Icon {...props} icon="toilet" />}
            onPress={()=>call_API_mov('Banheiros')}
        />
        <List.Item
            title="Copa"
            left={props => <List.Icon {...props} icon="coffee" />}
            onPress={()=>call_API_mov('Copa')}
        />
        <List.Item
            title="Lig"
            left={props => <List.Icon {...props} icon="account-group" />}
            onPress={()=>call_API_mov('Lig')}
        />
        <List.Item
            title="Sala de Reuniões"
            left={props => <List.Icon {...props} icon="school" />}
            onPress={()=>call_API_mov('Reunioes')}
        />
        <List.Item
            title="Sala da Chefia"
            left={props => <List.Icon {...props} icon="account-tie" />}
            onPress={()=>call_API_mov('Chefia')}
        />
        <List.Item
            title="Recepcão"
            left={props => <List.Icon {...props} icon="room-service" />}
            onPress={()=>call_API_mov('Recepcao')}
        />
        <List.Item
            title="Secretaria da Graduação"
            left={props => <List.Icon {...props} icon="account-tie-voice" />}
            onPress={()=>call_API_mov('Graduacao')}
        />
    </ScrollView>
);

const ImagesExample = () => (
    <Image source = {require('/home/heitor/Teste/AppRobo/assets/mapa.jpeg')} style={{flex:1, width:null, height:null, resizeMode:'contain'}} />
 )


const GuiaScreen = () => (
    <PaperProvider theme={DefaultTheme}>
      <Surface style={{ flex: 1 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flex: 1}}>
                <View style={{flex:.5}}>
                    <ImagesExample></ImagesExample>
                </View>
                <View style={{flex:.5}}>
                    <MyComponent></MyComponent>
                </View>
            </View>
        </Surface>
    </PaperProvider>
);

export default GuiaScreen;