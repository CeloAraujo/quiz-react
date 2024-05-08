import { useEffect, useState } from "react";

import { useContext } from "react";

import { QuizContext } from "./context/quiz";

import Welcome from "./components/Welcome";
import Question from "./components/Question";
import Over from "./components/Over";
import Category from "./components/Category";

import "./App.css";



function App() {
  const [quizState, dispatch] = useContext(QuizContext);



  return (
    <>
      <div className="app">
        <h1>Quiz de programação</h1>
        {quizState.gameStage === "Start" && <Welcome />}
        {quizState.gameStage === "Category" && <Category />}
        {quizState.gameStage === "Playing" && <Question />}
        {quizState.gameStage === "Over" && <Over />}
      </div>
    </>
  );
}

export default App;
