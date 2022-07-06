import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';

import { Screens } from './Screens';
import Container from '../components/Container';
import Text from '../components/Text';

type Props = NativeStackScreenProps<Screens, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const start = () => {
    navigation.navigate('Question');
  };

  return (
    <Container>
      <Text>Son 10 preguntas de opción multiple</Text>
      <Text>Puedes lograr 100%?</Text>
      <TouchableOpacity onPress={start}>
        <Text style={{ fontWeight: 'bold' }}>INICIAR</Text>
      </TouchableOpacity>
    </Container>
  );
}
