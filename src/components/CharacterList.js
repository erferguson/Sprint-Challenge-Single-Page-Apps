import React, { useEffect, useState } from "react";
import axios from 'axios';
// import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState ([]);
  
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get(`https://rickandmortyapi.com/api/character/`)

    .then(response => {
      setCharacters(response.data.results)
      console.log(response.data.results)
    })

    .catch(error => {
      console.log("Ren & Stimpy!", error)
    })
  }, []);

  return (
    <section className="character-list">
      {characters.map(char => (
        <div>
          <h2>Name: {char.name}</h2>
          <img src={char.image} />
          <p>Status: {char.status} | Exoskeleton: {char.species}</p>
        </div>
      ))}
    </section>
  );
}
