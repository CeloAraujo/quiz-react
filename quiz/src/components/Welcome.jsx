import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Quiz from "../img/quiz.svg";
import "./Welcome.css";

const Welcome = () => {
  const quizState = useContext(QuizContext);

  console.log(quizState)

  return (
    <div id="welcome">
      <h2>Bem-vindo(a)!</h2>
      <p>Clique no botão abaixo para iniciar</p>
      <button>Começar</button>
      <img src={Quiz} alt="início do Quiz" />
    </div>
  );
};

export default Welcome;
