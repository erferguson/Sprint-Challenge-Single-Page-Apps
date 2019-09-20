import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Header from "./components/Header.js";
// import WelcomePage from "./components/WelcomePage";
import CharacterList from './components/CharacterList'



export default function App() {
  return (
    <main>
      <Header />

      <Switch>
        <Route>
          <CharacterList />
        </Route>
      </Switch>

    </main>
  );
}

// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById('root')
// );
