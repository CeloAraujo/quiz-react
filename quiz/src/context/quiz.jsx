/* eslint-disable no-case-declarations */
import { createContext, useReducer } from "react";
import questions from "../data/questions_complete";

const STAGES = ["Start", "Category", "Playing", "Over"];

const initialState = {
  // estágio atual no inicio do jogo
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
  score: 0,
  answerSelected: false,
  help: false,
  optionToHide: null,
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

    case "START_GAME":
      // eslint-disable-next-line no-case-declarations
      let quizQuestions = null;

      state.questions.forEach((question) => {
        if (question.category === action.payload) {
          quizQuestions = question.questions;
        }
      });
      return {
        ...state,
        questions: quizQuestions,
        gameStage: STAGES[2],
      };

    case "REORDER_QUESTIONS":
      // eslint-disable-next-line no-case-declarations
      const reorderedQuestions = state.questions.sort(() => {
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
      if (!state.questions[nextQuestion]) {
        // eslint-disable-next-line no-unused-vars
        end = true;
      }

      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: end ? STAGES[3] : state.gameStage,
        answerSelected: false,
        help: false,
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

    case "SHOW_TIP":
      return {
        ...state,
        help: "tip",
      };

    case "REMOVE_OPTION":
      const questionWithoutOption = state.questions[state.currentQuestion];

      let repeat = true;
      let optionToHide;

      questionWithoutOption.options.forEach((option) => {
        if (option !== questionWithoutOption.answer && repeat) {
          optionToHide = option;
          repeat = false;
        }
      });
      return {
        ...state,
        optionToHide,
        help:true,
      }

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
