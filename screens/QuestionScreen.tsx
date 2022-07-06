import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";

import { QuestionModel, UserSelectionModel } from "../models";
import { Screens } from "./Screens";
import Container from "../components/Container";
import Question from "../components/question/Question";
import Text from "../components/Text";
import ErrorScreen from "./ErrorScreen";
import LoadingScreen from "./LoadingScreen";

type Props = NativeStackScreenProps<Screens, "Question">;

export default function QuestionScreen({ navigation }: Props) {
  const [current, setCurrent] = useState(0);
  const [questions, setQuestions] = useState<QuestionModel[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [userSelections, setUserSelections] = useState<UserSelectionModel[]>(
    []
  );

  useEffect(() => {
    fetch("https://softec.com.py/preguntas.php")
      .then((response) => response.json())
      .then((data: { questions: QuestionModel[] }) =>
        setQuestions(data.questions)
      )
      .catch((error: Error) => setError(error));
  }, []);

  const currentQuestion = questions[current];

  function handleAnswerPress(n: number) {
    const userSelection: UserSelectionModel = {
      question: currentQuestion,
      selectedAnswer: n,
    };

    if (current === questions.length - 1) {
      navigation.replace("Results", {
        userSelections: [...userSelections, userSelection],
      });

      return;
    }

    setUserSelections([...userSelections, userSelection]);
    setCurrent(current + 1);
  }

  if (error) {
    return <ErrorScreen error={error} />;
  }

  if (questions.length === 0) {
    return <LoadingScreen />;
  }

  return (
    <Container>
      <Question question={currentQuestion} onAnswerPress={handleAnswerPress} />
      <Text>
        {current + 1} de {questions.length}
      </Text>
    </Container>
  );
}
