import './App.css';
import { useEffect, useState } from 'react';
import Banner from "./Banner.js"

function App() {
  // const [characters, setCharacters] = useState([])
  // const [person, setPerson] = useState({})
  // // state for hiding information in accordion
  // const [display, setDisplay] = useState(false)
  
  // function apiCall(){
  //   fetch('https://rickandmortyapi.com/api/character')
  //   .then(res => res.json())
  //   .then(data => setCharacters(data.results))
  // }

  // useEffect(() => {
  //   apiCall()
  // },[])

  // function toggle(){
  //   setDisplay(prev => !prev)
  // }
  // function handleClick(charInfo){
  //   setPerson(charInfo)
  //   toggle()
  // }


  // console.log(characters)

  return (
    <div className="App">
     <Banner/>
    </div>
  );
}

export default App;