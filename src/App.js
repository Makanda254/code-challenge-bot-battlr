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

  function handleRelease(id){
    const upDatedBotArmy = botArmy.filter((bot) => bot.id !== id)
    setBotArmy(upDatedBotArmy);
  }

  function handleDelete(bot){
    fetch(`http://localhost:8001/bots/${bot}`,{
      method: 'DELETE'
    })
    handleDischargeBotArmy(bot)
    handleDischargeBot(bot)
  }

  function handleDischargeBotArmy(id){
    const upDatedBotArmy = botArmy.filter((bot) => bot.id !== id)
    setBotArmy(upDatedBotArmy);
  }

  function handleDischargeBot(id){
    const upDatedBots = bots.filter((botItem) => botItem.id !== id)
    setBots(upDatedBots)
  }

  
  

  return (
    <div className="container">
      <YourBotArmy botArmy={botArmy}  onRelease={handleRelease} onDelete={handleDelete} />
      <BotCollection bots={bots} onAddBot={handleAddBot}/>
    </div>
  );
}

export default App;
