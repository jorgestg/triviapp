import { View } from "react-native";
import { Text } from "../components";

interface Props {
  error: Error;
}

export function ErrorScreen({ error }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ fontWeight: "bold" }}>Uh-oh! Algo salió mal</Text>
      <Text>{error.message}</Text>
    </View>
  );
}
