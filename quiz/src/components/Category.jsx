import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import category from "../img/category.svg";

import "./Category.css";

const Category = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const chooseCategoryAndReorderQuestions = (category) => {
    dispatch ({type: "START_GAME",payload: category})

    dispatch({ type: "REORDER_QUESTIONS" });
  };

  return (
    <div id="category">
      <h2>Escolha a categoria</h2>
      <p>As perguntas serão referente a linguagem escolhida</p>
      <div>
        {quizState.questions.map((question) => (
          <button
            onClick={() => chooseCategoryAndReorderQuestions(question.category)}
            key={question.category}
          >
            {question.category}
          </button>
        ))}
      </div>
      <img src={category} alt="Tipos de quiz" />
    </div>
  );
};

export default Category;
