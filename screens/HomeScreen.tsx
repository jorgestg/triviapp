import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { Container, Text } from "../components";
import { Screens } from "./Screens";

type Props = NativeStackScreenProps<Screens, "Home">;

export function HomeScreen({ navigation }: Props) {
  function start() {
    navigation.navigate("Question");
  }

  return (
    <Container>
      <Text>Son 10 preguntas de opción multiple</Text>
      <Text>Puedes lograr 100%?</Text>
      <TouchableOpacity onPress={start}>
        <Text style={{ fontWeight: "bold" }}>INICIAR</Text>
      </TouchableOpacity>
    </Container>
  );
}
