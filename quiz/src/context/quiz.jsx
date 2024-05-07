import { createContext, useReducer } from "react";
import questions from "../data/questions";

const Stages = ["Start", "Playing", "Over"];

const initalState = {
  // estágio atual no inicio do jogo
  gameStage: Stages[0],
  questions,
};

// alterar o estado
const quizReducer = (state, action) => {
  console.log(state, action);

  switch (action.type) {
    case "change_State":
      return state;
    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initalState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
