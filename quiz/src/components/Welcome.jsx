import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Quiz from "../img/quiz.svg";
import "./Welcome.css";

const Welcome = () => {
    // dispatch é para entrar no quizReducer e executar o switch
    // quiz state pega valor, dispatch altera
  const [quizState, dispatch] = useContext(QuizContext);


  return (
    <div id="welcome">
      <h2>Bem-vindo(a)!</h2>
      <p>Clique no botão abaixo para iniciar</p>
      <button onClick={() => dispatch({type:"change_State"})}>Começar</button>
      <img src={Quiz} alt="início do Quiz" />
    </div>
  );
};

export default Welcome;
