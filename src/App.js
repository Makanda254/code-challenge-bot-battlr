import './App.css';
import { useEffect, useState } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

function App() {
  const [bots, setBots] = useState([])
  const [botArmy, setBotArmy] = useState([])


  useEffect(()=>{
    fetch("http://localhost:8001/bots")
    .then(r => r.json())
    .then((data )=> {
      setBots(data)
    })
  },[])
  
  //console.log(bots)

  function handleAddBot(itemBot){
    if (!botArmy.find((bot) => bot === itemBot)) {
      const addedBots= bots.find((bot) => bot === itemBot)
      setBotArmy([...botArmy, addedBots]);
    }


  }
  

  return (
    <div>
      <YourBotArmy botArmy={botArmy} setBotArmy={setBotArmy}/>
      <BotCollection bots={bots} onAddBot={handleAddBot}/>
    </div>
  );
}

export default App;
