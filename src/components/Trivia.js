import React, { useState } from 'react';

const Trivia = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);

  const questions = [
    {
      question: 'What is the atomic number of Hydrogen?',
      options: ['1', '2', '3', '4'],
      correctAnswer: '1'
    },
    {
      question: 'What is the symbol for Gold?',
      options: ['Ag', 'Au', 'Fe', 'Cu'],
      correctAnswer: 'Au'
    },
    {
      question: 'What is the atomic mass of Carbon?',
      options: ['10.01', '11.01', '12.01', '13.01'],
      correctAnswer: '12.01'
    }
  ];

  const handleAnswerSubmit = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isAnswerCorrect = selectedAnswer === currentQuestion.correctAnswer;
    
    if (isAnswerCorrect) {
      setScore(score + 1);
    }
    
    setIsCorrect(isAnswerCorrect);
    
    // Move to next question after a short delay
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setIsCorrect(null);
      }
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
