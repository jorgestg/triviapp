import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import { Screens } from './screens/Screens';
import HomeScreen from './screens/HomeScreen';
import QuestionScreen from './screens/QuestionScreen';
import ResultsScreen from './screens/ResultsScreen';

const Stack = createNativeStackNavigator<Screens>();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ animation: 'slide_from_bottom' }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Bienvenido al desafío de Trivia!' }}
          />
          <Stack.Screen
            name="Question"
            component={QuestionScreen}
            options={{ title: 'Trivia!' }}
          />
          <Stack.Screen
            name="Results"
            component={ResultsScreen}
            options={{ title: 'Resultados' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style="auto" />
    </>
  );
}
