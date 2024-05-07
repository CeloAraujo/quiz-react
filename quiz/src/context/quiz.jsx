import { createContext, useReducer } from "react";
import questions from "../data/questions";

const STAGES = ["Start", "Playing", "Over"];

const initialState = {
  // estágio atual no inicio do jogo
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
};

// alterar o estado
const quizReducer = (state, action) => {
  console.log(state, action);

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
