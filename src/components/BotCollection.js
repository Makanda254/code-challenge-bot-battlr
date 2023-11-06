import React from 'react';
import Bot from './Bot';

export default function BotCollection({bots, onAddBot}) {
    console.log(bots)
    
  return (
    <div>
        <h1>Bot Collection</h1>
        <div id="section">
        {bots.map((bot) => <Bot key={bot.id} bot={bot} onAddBot={onAddBot}/>)}
        </div>
    </div>
  )
}
