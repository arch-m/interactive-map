import React, { useState } from 'react'
import getRandomColor from '../Map/Colors'
import Style from './QuizScreen.module.css'

export default function Quiz({ questions }) {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const backgroundStyle = {
    background: `linear-gradient(167deg, ${getRandomColor("pasteles")} 0%, ${getRandomColor("solidos")} 100%)`,
  }

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div style={backgroundStyle} className='h-100 d-flex flex-column justify-content-center align-items-center' >
      {showScore ? (
        <h1 className={Style.header}>
          Resolviste bien {score} de {questions.length}!
        </h1>
      ) : (
          <>
          <div>
            <h1 className={Style.header}>
              Pregunta {currentQuestion + 1}/{questions.length}
            </h1>
            <h2 className={Style.question}>
              {questions[currentQuestion].questionText}
            </h2>
          </div>
          <div className={`row row-cols-2 ${Style.answers}`}>
              {questions[currentQuestion].answerOptions.map((answerOption) =>
                <div className="p-0 py-3 px-3 col">
                  <button key={answerOption.answerText} className={`btn ${Style.btnResp}`} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                </div>
              )}
            </div>
          </>
      )}
    </div>
  );

}