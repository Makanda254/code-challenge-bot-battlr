import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import BotCollection from './components/BotCollection';

function App() {
  const [bots, setBots] = useState([])


  useEffect(()=>{
    fetch("http://localhost:8001/bots")
    .then(r => r.json())
    .then((data )=> {
      setBots(data)
    })
  },[])
  
  //console.log(bots)


  return (
    <div>

      <BotCollection bots={bots}/>
    </div>
  );
}

export default App;
