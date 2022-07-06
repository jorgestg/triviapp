import { QuestionModel } from "./QuestionModel";

export interface UserSelectionModel {
  question: QuestionModel;
  selectedAnswer: number;
}
