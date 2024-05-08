import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import category from '../img/category.svg'

import './Category.css'

const Category = () => {
  return (
    <div id="category">
        <h2>Escolha a categoria</h2>
        <p>As perguntas serão referente a linguagem escolhida</p>
        <div>
        <button>Html</button>
        <button>Javascript</button>
        <button>Css</button>
     
        </div>
        <img src={category} alt="Tipos de quiz" />
    </div>
  )
}

export default Category