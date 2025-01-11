import React, { useState } from 'react';

const Trivia = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);

  const questions = [
    {
      question: 'What is the atomic number of Hydrogen?',
      answer: '1',
    },
    {
      question: 'What is the symbol for Gold?',
      answer: 'Au',
    },
    {
      question: 'What is the atomic mass of Carbon?',
      answer: '12.01',
    },
    // Add more questions as needed
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentQuestion = questions.find(q => q.question === question);
    if (currentQuestion && currentQuestion.answer.toLowerCase() === answer.toLowerCase()) {
      setScore(score + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setQuestion('');
    setAnswer('');
  };

  return (
    <div className="trivia">
      <h2>Periodic Table Trivia</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter your question"
          required
        />
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Enter your answer"
          required
        />
        <button type="submit">Submit</button>
      </form>
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