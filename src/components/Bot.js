import React from 'react';

export default function Bot({bot,onAddBot}) {
    console.log(bot)
    
    
  return (
    <div onClick={() => onAddBot(bot)}>
        <img src={bot.avatar_url} alt="A Bot"/>
        <h3>{bot.name}</h3>
        <p>{bot.catchphrase}</p>
        <div>
            <p>Health:{bot.health}</p>
            <p>Damage:{bot.damage}</p>
            <p>Armor:{bot.armor}</p>
        </div>

    </div>
  )
}
