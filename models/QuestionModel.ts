export interface AnswerModel {
  number: number;
  text: string;
}

export interface QuestionModel {
  text: string;
  answers: AnswerModel[];
  correctAnswer: number;
}
