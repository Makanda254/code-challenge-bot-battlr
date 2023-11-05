import React from 'react';
//import Bot from './Bot';

export default function YourBotArmy({botArmy}) {
  console.log(botArmy)
  return (
    <div>
      {
        botArmy.map((itemBot) => (
          <div>
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
