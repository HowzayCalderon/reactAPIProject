import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);
  // const [character, setCharacter] = useState({});
  const [charName, setCharName] = useState("");
  // state for hiding information in accordion
  const [display, setDisplay] = useState(false);

  function apiCall() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }

  useEffect(() => {
    apiCall();
  }, []);

  function toggle() {
    setDisplay((prev) => !prev);
  }
  function handleClick(charInfo) {
    // setCharacter(charInfo);
    setCharName(charInfo.name);
    toggle();
  }

  console.log(characters);

  return (
    <div className="App">
      <div>
        {characters.length &&
          characters.map((character, index) => (
            <div>
              <div className="banner">
                <h2 onClick={() => handleClick(character)} key={index}>
                  {character.name}
                </h2>
              </div>
              {display && character.name === charName && (
                <div className="xtraInfo">
                  <img src={character.image} />
                  <p>
                    Status: {character.status} <br /> Origin:{" "}
                    {character.origin.name} <br /> Species: {character.species}{" "}
                    <br />
                    Gender: {character.gender}{" "}
                  </p>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
