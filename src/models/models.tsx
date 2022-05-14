export interface QuizDataCategory {
  _id: string;
  link: string;
  img: string;
  name: string;
  title: string;
  description: string;
  color: string;
}

export interface QuizCardData {
  _id: string;
  img: string;
  title: string;
  description: string;
  category: string;
  questions?: QuizQuestions[] | [];
}

export interface QuizQuestions {
  question: string;
  options: Array<string>;
  answer: number;
}
