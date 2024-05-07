import { useEffect, useState } from "react";

import { useContext } from "react";

import { QuizContext } from "./context/quiz";
import Welcome from "./components/Welcome";
import Question from "./components/Question";

import "./App.css";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    // embaralhar perguntas
    dispatch({type: "REORDER_QUESTIONS"});
  }, []);

  return (
    <>
      <div className="app">
        <h1>Quiz de programação</h1>
        {quizState.gameStage === "Start" && <Welcome />}
        {quizState.gameStage === "Playing" && <Question />}
      </div>
    </>
  );
}

export default App;
