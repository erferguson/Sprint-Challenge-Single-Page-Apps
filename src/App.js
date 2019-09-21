import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Header from "./components/Header.js";

import CharacterList from './components/CharacterList'
import WelcomePage from "./components/WelcomePage.js";
import CharacterCard from "./components/CharacterCard.js";



export default function App() {
  return (
    <main>
      <Header />
        <Route path ='/' exact component = {WelcomePage} />
        <Route path = '/characters' exact component = {CharacterList} />
        <Route path ='/characters/:id' component = {CharacterCard} />
    </main>
  );
}
