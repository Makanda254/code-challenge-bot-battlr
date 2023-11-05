import React from 'react';

export default function YourBotArmy({botArmy, onRelease, onDelete}) {
  //console.log(botArmy)

  return (
    <div>
      {
        botArmy.map((itemBot) => (
          <div key={itemBot.id}>
            <div onClick={(e) => {
              e.preventDefault();
              onRelease(itemBot.id)}}>
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
             <button onClick={(e) => {
              e.preventDefault();
              onDelete(itemBot.id)}}>x</button>
            
          </div>
        ))
      }

     



    </div>
  )
}
