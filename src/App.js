import React, { useState } from 'react';
import Element from './components/Element';
import Trivia from './components/Trivia';
import './styles/App.css';

const App = () => {
  const [score, setScore] = useState(0);

  const handleScoreChange = (newScore) => {
    setScore(newScore);
  };

  return (
    <div className="App">
      <div className="score">Score: {score}</div>
      <Trivia onScoreChange={handleScoreChange} />
      <div className="elements-grid">
        {/* Render elements here, for example: */}
        {/* elements.map(element => <Element key={element.number} element={element} />) */}
      </div>
    </div>
  );
};

export default App;