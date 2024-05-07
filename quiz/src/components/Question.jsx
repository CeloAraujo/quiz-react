import { useContext } from "react";

import { QuizContext } from "../context/quiz";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  console.log(quizState);
  return <div>Question</div>;
};

export default Question;
