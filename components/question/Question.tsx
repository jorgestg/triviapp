import React from "react";
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { AnswerModel, QuestionModel } from "../../models";

import Text from "../Text";

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
  },
  button: {
    borderWidth: 1,
    borderColor: "#000",
    textAlign: "center",
    paddingVertical: 12,
    marginBottom: 10,
  },
});

interface Props {
  question: QuestionModel;
  onAnswerPress: (n: number) => void;
}

export default function Question({ question, onAnswerPress }: Props) {
  function renderAnswer({ item: answer }: ListRenderItemInfo<AnswerModel>) {
    return (
      <TouchableOpacity
        style={styles.button}
        key={answer.number}
        onPress={() => onAnswerPress(answer.number)}
      >
        <Text>{answer.text}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <>
      <Text>{question.text}</Text>
      <View style={styles.container}>
        <FlatList data={question.answers} renderItem={renderAnswer} />
      </View>
    </>
  );
}
