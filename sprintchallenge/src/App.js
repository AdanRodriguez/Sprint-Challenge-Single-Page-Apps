import React from 'react';
import './App.css';

import {TabNav, Header, CharacterList, LocationList, EpisodeList,  WelcomePage} from "./components";
import {Route} from "react-router-dom";

export default function App() {
  return (
    <main>
      <Header/>
      <TabNav/>
      <Route exact path="/" component={WelcomePage}/>
      <Route exact path="/characters" component={CharacterList}/>
      <Route exact path="/locations" component={LocationList}/>
      <Route exact path="/episodes" component={EpisodeList}/>
    </main>
  );
};

