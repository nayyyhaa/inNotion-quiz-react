import meditation from "toolkit/assets/meditation.svg";
import fly from "toolkit/assets/fly.svg";
import stability from "toolkit/assets/stability.svg";
import yoga from "toolkit/assets/yoga.svg";
import selfEsteem from "toolkit/assets/self-esteem.svg";
import mindfulness from "toolkit/assets/mindfulness.svg";
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
    _id: "mindfulness-quiz",
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
    _id: "self-esteem-quiz",
    img: selfEsteem,
    title: "Self Esteem Check",
    description:
      "This quiz can give you insight into the things that might affect your own self-esteem — so you can learn how to build and protect it.",
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
    _id: "yoga-quiz",
    img: yoga,
    title: "Are you true Yogi?",
    description:
      "Yoga is among the latest fitness crazes, but the practice has some major depth. Brush up on your knowledge of Yoga with this quiz!",
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
  {
    _id: "deep-breathe-quiz",
    img: mindfulness,
    title: "Know your Breathe",
    description: "How much do you know about your breathe? Take this quiz to breathe fully.",
    category: "mindful",
    questions: [
      {
        question: "How often do you take a deep breath?",
        options: ["More than 5 times a day", "1 time everyday", "1 time in a week", "I don't remember, 0 times"],
        answer: 0,
      },
      {
        question: "When is it a good time to take a deep breath?",
        options: [
          "Being chased by a dinosaur",
          "Sitting down in a quiet space",
          "Eating 10 tacos",
          "Feeling angry, nervous, stressed",
        ],
        answer: 3,
      },
      {
        question: "How do you take a deep breath?",
        options: ["Breathe in (BIG inhale), Breathe out (SLOW exhale)", "Laugh", "Scream", "Chant prayers"],
        answer: 0,
      },
      {
        question: "What are NOT some of the helpful things to do when you take deep breaths?",
        options: [
          "Close your eyes",
          "Think about all the life decisions",
          "Hold your hand on your stomach",
          "Look at one object (sky, tree, pillow, window, mirror, etc.)",
        ],
        answer: 1,
      },
      {
        question: "What your tummy doesn't do when you're taking a deep breath?",
        options: [
          "Blows up like a balloon",
          "Goes back down like air coming out of balloon",
          "Goes up and down",
          "Nothing happens",
        ],
        answer: 3,
      },
    ],
  },
  {
    _id: "confidence-quiz",
    img: fly,
    title: "Body Confidence Test",
    description:
      "Do you know your confidence affects your body language? Take this quiz to know how much you know about it.",
    category: "soulful",
    questions: [
      {
        question: "What are appearance ideals?",
        options: [
          "What we are trying to be when we look in the mirror",
          "The way our culture tells us is an ideal way to look at a certain time",
          "Perfection",
          "Goals for all people",
        ],
        answer: 1,
      },
      {
        question: "Which of these is not a pressure we have to face when trying to reach appearance ideals?",
        options: ["Money", "Time", "Fun", "Emotional distress"],
        answer: 2,
      },
      {
        question: "What could we value above appearance?",
        options: ["Family", "Friends", "Our Health", "All of these"],
        answer: 3,
      },
      {
        question: "What are you if you respect individuality and love yourself?",
        options: ["A show off", "A good friend", "A body confidence champion", "Arrogant"],
        answer: 1,
      },
      {
        question: "What is this an example of: I wish I was taller?",
        options: ["Day Dreaming", "Wishful Thinking", "Body Talk", "Heightism"],
        answer: 2,
      },
    ],
  },
  {
    _id: "strength-quiz",
    img: stability,
    title: "Strength Quiz",
    description:
      "Yoga is among the latest fitness crazes, but the practice has some major depth. Brush up on your knowledge of Yoga with this quiz!",
    category: "fitness",
    questions: [
      {
        question: "Which is not a Principle of Exercise?",
        options: ["Overload", "Progression", "Maintain healthy diet", "Individual differences"],
        answer: 0,
      },
      {
        question: "Why should you exercise ?",
        options: [
          "To strengthen your heart",
          "To help with Brain health",
          "To boost your confidence level",
          "All of these",
        ],
        answer: 3,
      },
      {
        question: "Any form of bodily movement that use up energy.",
        options: ["Exercise", "Physical Activity", "Aerobic", "All of these"],
        answer: 3,
      },
      {
        question: "What is NOT Mental/Emotional benefits to exercise?",
        options: [
          "Creates mind fog",
          "Helps you think more clearly",
          "Increases muscle tone",
          "Helps have a Higher self esteem",
        ],
        answer: 0,
      },
      {
        question: "Which word means able to bend without breaking?",
        options: ["Physical", "Flexible", "Athlete", "Rigid"],
        answer: 1,
      },
    ],
  },
];
