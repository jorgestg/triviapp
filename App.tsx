import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Screens, HomeScreen, QuestionScreen, ResultsScreen } from "./screens";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator<Screens>();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ animation: "slide_from_bottom" }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Bienvenido al desafío de Trivia!" }}
          />
          <Stack.Screen
            name="Question"
            component={QuestionScreen}
            options={{ title: "Trivia!" }}
          />
          <Stack.Screen
            name="Results"
            component={ResultsScreen}
            options={{ title: "Resultados" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
