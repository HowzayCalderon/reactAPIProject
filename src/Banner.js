import {useState, useEffect} from 'react'

export default function Banner() {

const [characters, setCharacters] = useState([])
const [person, setPerson] = useState({})
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
  setPerson(charInfo)
  toggle()
}

  return (
    <div>
    {characters.length && characters.map((character, index) =>(
      <div>
        <div className='banner'>
          <h2 onClick={()=> handleClick(person)} key={index}>{character.name} </h2>
        </div>
        {display?<div className='xtraInfo'>
          <img src={character.image}/>
          <p>Status: {character.status} <br/> Origin: {character.origin.name} <br/> Species: {character.species} <br/>Gender: {character.gender} </p>
        </div>: null}  
      </div>
      
  ))}
    </div>
  )
}
