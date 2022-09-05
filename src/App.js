import { useState } from "react";
import { Card } from "./components/Card";
import { CARDS_ARRAY } from "./data/cardsData";
import { shuffle } from "lodash";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [picArray, setPicArray] = useState(CARDS_ARRAY);
  const [playsArray, setplaysArray] = useState([0]);

  function gameOver() {
    setScore(0);
    setplaysArray([0]);
    alert("You Lost! HAHAHAHAH");
  }

  function engine(index) {
    if (playsArray.indexOf(index) >= 0) {
      return gameOver();
    }
    setplaysArray((prevState) => [...prevState, index]);
    scoreKeeper();
    setPicArray((prevState) => shuffle(prevState));
  }

  function scoreKeeper() {
    const newScore = score + 1;
    setScore(newScore);
    if (newScore >= highScore) {
      setHighScore(newScore);
    }
  }

  return (
    <div className='main-app'>
      <div className='header'>
        <h2 id='maintitle'>Pokemon Memory Game</h2>
        <h3>
          Get points by cliking on an image, but don't click on any more than
          once! Game resets if you make a mistake.
        </h3>
        <span>
          <p>Score: {score}</p>
          <p>High Score: {highScore}</p>
        </span>
      </div>
      <div className='main-card-board'>
        {picArray.map((index) => {
          return (
            <Card key={index} name={index} onClick={() => engine(index)} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
