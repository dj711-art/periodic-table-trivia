import React, { useState, useEffect } from 'react';
import questions from './data/questions.json';

const Trivia = ({ onScoreChange }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswerSubmit = (option) => {
    if (option === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }

    onScoreChange(score + 1);

    setTimeout(() => {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsCorrect(null);
    }, 1000);
  };

  return (
    <div className="trivia">
      <h2>Periodic Table Trivia</h2>
      
      {currentQuestionIndex < questions.length ? (
        <div className="question-container">
          <div className='question'>
            {questions[currentQuestionIndex].question}
          </div>
          <div className="options-container">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSubmit(option)}
                className="option-button"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="quiz-end">
          <h3>Quiz Complete!</h3>
          <p>Final Score: {score} out of {questions.length}</p>
        </div>
      )}

      {isCorrect !== null && (
        <div className={`result ${isCorrect ? 'correct' : 'incorrect'}`}>
          {isCorrect ? 'Correct!' : 'Incorrect!'}
        </div>
      )}
      
      <div className="score">Score: {score}</div>
    </div>
  );
};

export default Trivia;