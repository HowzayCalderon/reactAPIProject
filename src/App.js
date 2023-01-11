import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [characters, setCharacters] = useState([])
  const [character, setCharacter] = useState({})
  // state for hiding information in accordion
  const [display, setDisplay] = useState(false)
  
  function apiCall(){
    fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(data => setCharacters(data.results))
  }

  useEffect(() => {
    apiCall()
  },[])

  function toggle(){
    setDisplay(prev => !prev)
  }
  function handleClick(charInfo){
    setCharacter(charInfo)
    toggle()
  }


  console.log(characters)

  return (
    <div className="App">
      <div>
      {characters.length && characters.map((character, index) =>(
        <div>
          <div className='banner'>
            <h2>{character.name}<button onClick={()=> handleClick(character)} key={index}>ˇ</button></h2>
          </div>
          {display?<div className='xtraInfo'>
            <img src={character.image}/>
            <p>Status: {character.status} <br/> Origin: {character.origin.name} <br/> Species: {character.species} <br/>Gender: {character.gender} </p>
          </div>: null}  
        </div>
        
    ))}
      </div>
    </div>
  );
}

export default App;
