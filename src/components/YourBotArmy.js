import React from 'react';
//import Bot from './Bot';

export default function YourBotArmy({botArmy, setBotArmy}) {
  //console.log(botArmy)
  function handleRelease(id){
    const upDatedBotArmy = botArmy.filter((bot) => bot.id !== id)
    setBotArmy(upDatedBotArmy);
  }
  
  return (
    <div>
      {
        botArmy.map((itemBot) => (
          <div onClick={() => handleRelease(itemBot.id)}>
            <h1>Your Bot Army</h1>
           <img src={itemBot.avatar_url} alt="A Bot"/>
           <h3>{itemBot.name}</h3>
           <p>{itemBot.catchphrase}</p>
           <div>
              <p>Health:{itemBot.health}</p>
              <p>Damage:{itemBot.damage}</p>
              <p>Armor:{itemBot.armor}</p>
           </div>
          </div>
        ))
      }



    </div>
  )
}
