import meditation from "toolkit/assets/meditation.svg";
import fly from "toolkit/assets/fly.svg";
import stability from "toolkit/assets/stability.svg";
import { QuizCardData, QuizDataCategory } from "models/models";
import { v4 as uuid } from "uuid";

export const quizCategoryData: QuizDataCategory[] = [
  {
    _id: "1",
    link: "/categories/mindful",
    img: meditation,
    name: "mindful",
    title: "FOR MIND",
    description: "Play mindfulness",
    color: "green",
  },
  {
    _id: "2",
    link: "/categories/soulful",
    img: fly,
    name: "soulful",
    title: "FOR SOUL",
    description: "Play Soulfulness",
    color: "yellow",
  },
  {
    _id: "3",
    link: "/categories/fitness",
    img: stability,
    name: "fitness",
    title: "FOR BODY",
    description: "Play Fitness",
    color: "blue",
  },
];

export const quizData: QuizCardData[] = [
  {
    _id: uuid(),
    img: meditation,
    title: "What is Mindfulness?",
    description:
      "How much do you know about mindfulness? Test your knowledge of this practice that connects your body and mind.",
    category: "mindful",
    questions: [
      {
        question: "Mindfulness helps us focus on:",
        options: ["The Past", "The Present", "The Future", "All of these"],
        answer: 1,
      },
      {
        question: "What is one of the best ways to help calm yourself down when you feel angry/stressed/sad, etc?",
        options: ["Practice mindful breathing", "Close your eyes", "Go to a safe space", "All of these"],
        answer: 3,
      },
      {
        question: "Mindfulness is the practice of focusing your attention on the moment without judgment.",
        options: ["True", "False"],
        answer: 0,
      },
      {
        question: "If your mind wanders during meditation, you should:",
        options: [
          "Start over from the beginning",
          "Refocus on your breathing",
          "Think about why it keeps happening",
          "Try a different meditation pose",
        ],
        answer: 1,
      },
      {
        question: "Which of the following is an example of mindfulness?",
        options: [
          "Daydreaming",
          "Taking time to look at the sunset or smell flowers",
          "Wishing you were at home when you're at school",
          "I have no idea what that is!",
        ],
        answer: 1,
      },
    ],
  },
  {
    _id: uuid(),
    img: meditation,
    title: "Self Esteem Check",
    description:
      "How much do you know about mindfulness? Test your knowledge of this practice that connects your body and mind.",
    category: "soulful",
    questions: [
      {
        question: "What is Self Esteem?",
        options: [
          "How you feel about school.",
          "How you feel about others.",
          "How you feel about yourself.",
          "How you feel about cheese.",
        ],
        answer: 2,
      },
      {
        question: "Forgiving yourself for making mistakes is a way to build your self esteem.",
        options: ["True", "False"],
        answer: 0,
      },
      {
        question: "How can you build the self esteem of others?",
        options: [
          "Not including others in games and activities",
          "Saying hurtful words",
          "Telling them what they are good at",
          "All of these",
        ],
        answer: 2,
      },
      {
        question: "Which of these is a way to improve your Self Esteem?",
        options: ["Positive self talk", "Helping others", "Trying your best at everything", "All of these"],
        answer: 3,
      },
      {
        question: "Facing your fears can build your self esteem.",
        options: ["True", "False"],
        answer: 0,
      },
    ],
  },
  {
    _id: "mindfullnedfsdfss1",
    img: meditation,
    title: "Yoga",
    description:
      "How much do you know about mindfulness? Test your knowledge of this practice that connects your body and mind.",
    category: "fitness",
    questions: [
      {
        question: "What helps to clear your mind in yoga?",
        options: [
          "Each Breath, exhaling the thought away.",
          "Taking Notes, making a plan to accomplish the upcoming tasks.",
          "Talking to your partner, seeing how they clear their mind during yoga class.",
          "Taking moments to think about your day when you are in the various resting poses.",
        ],
        answer: 0,
      },
      {
        question: "What is the purpose of yoga?",
        options: [
          "To get exercise",
          "To digest the food you ate for lunch",
          "To systematically calm one's mind",
          "All of these",
        ],
        answer: 2,
      },
      {
        question: "Benefits of yoga",
        options: ["Reduce exam stress", "Creates fear", "Increases anxieties", "No sleep"],
        answer: 0,
      },
      {
        question: "What is the final resting pose in yoga?",
        options: ["Mountain", "Savannah", "Savasana", "Warrior 3"],
        answer: 2,
      },
      {
        question: "What keeps you in the present moment in yoga?",
        options: ["Each pose", "The teacher", "The clock", "Each breathe"],
        answer: 3,
      },
    ],
  },
];
