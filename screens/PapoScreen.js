import * as React from 'react';
import { useState } from 'react';
import { View, Text } from 'react-native';
import { Surface, Appbar, Provider as PaperProvider, MD3DarkTheme as DefaultTheme, Button } from 'react-native-paper';

function Question({ question }) {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ color: '#fff', fontSize: 20 }}>{question}</Text>
    </View>
  );
}

export default function PapoScreen({ navigation }) {
  const [question, setQuestion] = useState('Gostaria de iniciar o Bate Papo?');
  const [answer, setAnswer] = useState('');
  const [positiveResponses, setPositiveResponses] = useState(0);

  const handleAnswer = (response) => {
    if (question === 'Gostaria de iniciar o Bate Papo?') {
      if (response === 'Sim') {
        setQuestion('Você tem sentido ansiedade ou medo excessivo ultimamente?');
      } else if (response === 'Não') {
        setQuestion('Tudo bem, talvez outra hora!');
      }
    } else if (question === 'Você tem sentido ansiedade ou medo excessivo ultimamente?') {
      if (response === 'Sim') {
        setQuestion('Você tem tido pensamentos repetitivos ou obsesivos?');
        setPositiveResponses(positiveResponses + 1);
      } else if (response === 'Não') {
        setQuestion('Você tem tido pensamentos repetitivos ou obsesivos?');
      }
    } else if (question === 'Você tem tido pensamentos repetitivos ou obsesivos?') {
      if (response === 'Sim') {
        setQuestion('Você tem experimentado mudanças significativas no seu humor?');
        setPositiveResponses(positiveResponses + 1);
      } else if (response === 'Não') {
        setQuestion('Você tem experimentado mudanças significativas no seu humor?');
      }
    } else if (question === 'Você tem experimentado mudanças significativas no seu humor?') {
      if (response === 'Sim') {
        setQuestion('Você tem experimentado mudanças significativas no seu padrão de sono?');
        setPositiveResponses(positiveResponses + 1);
      } else if (response === 'Não') {
        setQuestion('Você tem experimentado mudanças significativas no seu padrão de sono?');
      }
    } else if (question === 'Você tem experimentado mudanças significativas no seu padrão de sono?') {
        if (response === 'Sim') {
          setQuestion('Você tem tido dificuldade em realizar suas atividades diárias?');
          setPositiveResponses(positiveResponses + 1);
        } else if (response === 'Não') {
          setQuestion('Você tem tido dificuldade em realizar suas atividades diárias?');
        }
    } else if (question === 'Você tem tido dificuldade em realizar suas atividades diárias?') {
      if (response === 'Sim') {
        setQuestion('Você tem tido dificuldade em se relacionar com outras pessoas?');
        setPositiveResponses(positiveResponses + 1);
      } else if (response === 'Não') {
        setQuestion('Você tem tido dificuldade em se relacionar com outras pessoas?');
      }
    } else if (question === 'Você tem tido dificuldade em se relacionar com outras pessoas?') {
      if (response === 'Sim') {
        setQuestion('Você tem experimentado alucinações ou delírios?');
        setPositiveResponses(positiveResponses + 1);
      } else if (response === 'Não') {
        setQuestion('Você tem experimentado alucinações ou delírios?');
      }
    } else if (question === 'Você tem experimentado alucinações ou delírios?') {
      if (response === 'Sim') {
        setQuestion('Você tem tido dificuldade em concentrar-se ou em lembrar coisas?');
        setPositiveResponses(positiveResponses + 1);
      } else if (response === 'Não') {
        setQuestion('Você tem tido dificuldade em concentrar-se ou em lembrar coisas?');
      }
    } else if (question === 'Você tem tido dificuldade em concentrar-se ou em lembrar coisas?') {
      if (response === 'Sim') {
        setQuestion('Você tem sentido uma falta de motivação ou interesse em coisas que costumava gostar?');
        setPositiveResponses(positiveResponses + 1);
      } else if (response === 'Não') {
        setQuestion('Você tem sentido uma falta de motivação ou interesse em coisas que costumava gostar?');
      }
    } else if (question === 'Você tem sentido uma falta de motivação ou interesse em coisas que costumava gostar?') {
      if (response === 'Sim') {
        setQuestion('Você tem tido pensamentos ou comportamentos suicidas?');
        setPositiveResponses(positiveResponses + 1);
      } else if (response === 'Não') {
        setQuestion('Você tem tido pensamentos ou comportamentos suicidas?');
      }
    } else if (question === 'Você tem tido pensamentos ou comportamentos suicidas?') {
      if (response === 'Sim' && positiveResponses >= 4) {
        setQuestion('Identifiquei pelas suas respostas que você corre o risco de problemas psicológicos. Gostaria de Ajuda ?');
      } else if (response === 'Não' && positiveResponses >= 4) {
        setQuestion('Identifiquei pelas suas respostas que você corre o risco de problemas psicológicos. Gostaria de Ajuda ?');
      } else {
        setQuestion('Fico feliz que está bem! Obrigado por conversar comigo!');
      }
    } else if (question === 'Identifiquei pelas suas respostas que você corre o risco de problemas psicológicos. Gostaria de Ajuda ?') {
      if (response === 'Sim') {
        setQuestion('Muito bem, entraremos em contato!');
      } else if (response === 'Não') {
        setQuestion('Tudo bem, talvez outra hora!');
      }
    }
    setAnswer(response);
  }

  return (
    <PaperProvider theme={DefaultTheme}>
      <Surface style={{ flex: 1 }}>
        <Appbar.Header style={{ backgroundColor: '#121212' }}>
          <Appbar.Content title="Bate-Papo" />
        </Appbar.Header>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Question question={question} answer={answer} />
          {(question !== 'Muito bem, entraremos em contato!' && question !== 'Tudo bem, talvez outra hora!' && question !== 'Fico feliz que está bem! Obrigado por conversar comigo!') ? (
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <Button mode="contained" onPress={() => handleAnswer('Sim')} style={{ marginRight: 10 }}>Sim</Button>
              <Button mode="contained" onPress={() => handleAnswer('Não')}>Não</Button>
            </View>
          ) : null}
        </View>
      </Surface>
    </PaperProvider>
  );
}
