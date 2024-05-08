import { createContext, useReducer } from "react";
import questions from "../data/questions";
import Over from "../components/Over";

const STAGES = ["Start", "Playing", "Over"];

const initialState = {
  // estágio atual no inicio do jogo
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
  score: 0,
  answerSelected: false,
};

// alterar o estado
const quizReducer = (state, action) => {
  // console.log(state, action);

  switch (action.type) {
    case "CHANGE_STATE":
      return {
        ...state,
        gameStage: STAGES[1],
      };
    case "REORDER_QUESTIONS":
      // eslint-disable-next-line no-case-declarations
      const reorderedQuestions = questions.sort(() => {
        return Math.random() - 0.5;
      });
      return {
        ...state,
        questions: reorderedQuestions,
      };

    case "CHANGE_QUESTION":
      // eslint-disable-next-line no-case-declarations
      const nextQuestion = state.currentQuestion + 1;
      // eslint-disable-next-line no-case-declarations
      let end = false;
      if (!questions[nextQuestion]) {
        // eslint-disable-next-line no-unused-vars
        end = true;
      }

      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: end ? STAGES[2] : state.gameStage,
      };

    case "NEW_GAME":
      return initialState;

    case "CHECK_ANSWER":
      if (state.answerSelected) return state;

      // eslint-disable-next-line no-case-declarations
      const answer = action.payload.answer;
      // eslint-disable-next-line no-case-declarations
      const option = action.payload.option;
      console.log(action.payload.option);
      // eslint-disable-next-line no-case-declarations
      let correctAnswer = 0;

      if (answer === option) correctAnswer = 1;

      return {
        ...state,
        score: state.score + correctAnswer,
        answerSelected: option,
      };

    // eslint-disable-next-line no-fallthrough
    default:
      return state;
  }
};

export const QuizContext = createContext();

// eslint-disable-next-line react/prop-types
export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
