import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { UserSelectionModel } from "../models";

import { Screens } from "./Screens";
import Container from "../components/Container";
import Text from "../components/Text";
import Result from "../components/results/Result";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 18,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 24,
  },
  button: {
    marginTop: 24,
  },
  buttonText: {
    fontWeight: "bold",
  },
});

type Props = NativeStackScreenProps<Screens, "Results">;

export default function ResultsScreen({ navigation, route }: Props) {
  const { userSelections } = route.params;
  const correctCount = userSelections.reduce((correctCount, userSelection) => {
    return userSelection.selectedAnswer === userSelection.question.correctAnswer
      ? correctCount + 1
      : correctCount;
  }, 0);

  function playAgain() {
    navigation.popToTop();
  }

  function renderAnswer({ item }: ListRenderItemInfo<UserSelectionModel>) {
    return <Result {...item} />;
  }

  return (
    <Container style={styles.container}>
      <Text style={styles.title}>
        Lograste {correctCount}/{userSelections.length}
      </Text>
      <FlatList data={userSelections} renderItem={renderAnswer} />
      <TouchableOpacity style={styles.button} onPress={playAgain}>
        <Text style={styles.buttonText}>JUGAR OTRA VEZ?</Text>
      </TouchableOpacity>
    </Container>
  );
}
