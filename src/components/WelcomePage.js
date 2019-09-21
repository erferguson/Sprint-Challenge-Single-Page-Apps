import React from "react";
import { Route } from 'react-router';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import CharacterList from './CharacterList';
import CharacterCard from './CharacterCard';

export default function WelcomePage() {
  return (

    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
    
    // Where does the LINK section go?
    <div>
      <ul>
        <li><Link to ='/'>Home</Link></li>
        <li><Link to ='/characters'>Characters</Link></li>
      </ul>
    <div/>
    
  );
}
