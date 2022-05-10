import meditation from "toolkit/assets/meditation.svg";
import fly from "toolkit/assets/fly.svg";
import stability from "toolkit/assets/stability.svg";
import { QuizCardData, QuizDataCategory } from "models/models";

export const quizCategoryData: QuizDataCategory[] = [
  {
    _id: "1",
    link: "/",
    img: meditation,
    name: "mindful",
    title: "FOR MIND",
    description: "Play mindfulness",
    color: "green",
  },
  {
    _id: "2",
    link: "/",
    img: fly,
    name: "soulful",
    title: "FOR SOUL",
    description: "Play Soulfulness",
    color: "yellow",
  },
  {
    _id: "3",
    link: "/",
    img: stability,
    name: "fitness",
    title: "FOR BODY",
    description: "Play Fitness",
    color: "blue",
  },
];

export const quizData: QuizCardData[] = [
  {
    _id: "1",
    link: "/",
    img: meditation,
    title: "What is Mindfulness?",
    description:
      "How much do you know about mindfulness? Test your knowledge of this practice that connects your body and mind.",
    category: "mindful",
  },
  {
    _id: "2",
    link: "/",
    img: meditation,
    title: "What is Mindfulness?",
    description:
      "How much do you know about mindfulness? Test your knowledge of this practice that connects your body and mind.",
    category: "mindful",
  },
  {
    _id: "3",
    link: "/",
    img: meditation,
    title: "What is Mindfulness?",
    description:
      "How much do you know about mindfulness? Test your knowledge of this practice that connects your body and mind.",
    category: "mindful",
  },
];
