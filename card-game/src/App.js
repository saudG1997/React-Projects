import { useState } from 'react'
import './index.css';
import './App.css';

  const App = () => {
    const [diceNumber, setDiceNumber] = useState(6)
    const [diceNumber1, setDiceNumber1] = useState(1)
    const refreshDice = () => {
    const randno = Math.floor(Math.random() * 6) +1
    setDiceNumber(randno)
    const randno1 = Math.floor(Math.random() * 6) +1
    setDiceNumber1(randno1)
    }
  
  return (
    <div>
      <center>
      <img width={300} height={300} src={require(`./img/${diceNumber}.png`)}></img>
      <img width={300} height={300} src={require(`./img/${diceNumber1}.png`)}></img>
      <br />
      <button onClick={()=> refreshDice()} className='button'>Roll</button>
      </center>
    </div>
  );
}

export default App;
