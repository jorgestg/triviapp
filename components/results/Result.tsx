import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { UserSelectionModel } from "../../models";

const styles = StyleSheet.create({
  title: { fontSize: 18, fontWeight: "bold" },
  text: { fontSize: 18 },
});

export default function Result({
  question,
  selectedAnswer,
}: UserSelectionModel) {
  const color = {
    color: question.correctAnswer === selectedAnswer ? "green" : "red",
  };

  return (
    <View style={{ marginBottom: 12 }}>
      <Text style={styles.title}>+ {question.text}</Text>
      <Text style={[styles.text, color]}>
        - Tu respuesta: {question.answers[selectedAnswer - 1].text}
      </Text>
      <Text style={styles.text}>
        - Respuesta correcta:{" "}
        {question.answers[question.correctAnswer - 1].text}
      </Text>
    </View>
  );
}
