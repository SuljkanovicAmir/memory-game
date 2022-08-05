import Score from './Score'
import CardContainer from './CardContainer'
import Message from './Message'
import { useEffect, useState} from 'react'
import initialState from '../utilities/InitalState'



function Game () {
  
  const [cardsArr, setCards] = useState([])
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [cards, setNewCards] = useState(initialState);


  const handleCard = (cardName) => {
    setCards(prevArr => [...prevArr, cardName])
  }

  let shuffle = (newCards) => {
    newCards.sort(() => 0.5 - Math.random());
  } 

  useEffect(() => {
    const newCards = [...cards];
    shuffle(newCards)
    setNewCards(newCards)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score, highScore]);

  console.log(cardsArr)

  const reset = () => {
    setGameOver(false);
    setScore(0);
    setCards([]);
  };

  function handleScore() {
    setScore(prevScore => prevScore + 1)
  }

  const handleHighScore = () => {
    setHighScore(score);
  };


  const handleGame = (cardName) => {
    if(!cardsArr.includes(cardName)){
      handleCard(cardName)
      handleScore()
    } else {
      if (score > highScore) {
        handleHighScore()
      }
      setGameOver(true)
    }
  }

 

  console.log(gameOver)
  return (
      <div className='game'>
          <h1>Football Logo - Memory Game</h1>
          <p className='description'>*Get points by clicking on an image but don't click on any more than once!</p>
          {gameOver &&  <Message reset={reset} score={score} />}
          <Score score={score} highScore={highScore}/>
          <CardContainer cards={cards} handleGame={handleGame}/>     
      </div>   
  );
}
 
export default Game;

