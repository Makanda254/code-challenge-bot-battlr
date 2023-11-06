import React from 'react';

export default function YourBotArmy({botArmy, onRelease, onDelete}) {
  //console.log(botArmy)

  return (
    <div >
      <h1>My Army</h1>
    <div id='bot-item'>
      {
        botArmy.map((itemBot) => (
          <div id='bot-card' key={itemBot.id}>
            <div onClick={(e) => {
              e.preventDefault();
              onRelease(itemBot.id)}}>
             <p>Enlisted!</p>
             <img src={itemBot.avatar_url} alt="A Bot"/>
             <h3>{itemBot.name}</h3>
             <p>{itemBot.catchphrase}</p>
             <div>
              <p>Health:{itemBot.health}</p>
              <p>Damage:{itemBot.damage}</p>
              <p>Armor:{itemBot.armor}</p>
             </div>
             </div>
             <button className='bg-danger' onClick={(e) => {
              e.preventDefault();
              onDelete(itemBot.id)}}>x</button>
            
          </div>
          
        ))
      }

     



    </div>
    </div>
  )
}
