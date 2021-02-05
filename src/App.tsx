import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import { Feed } from './Components/Feed/Feed';


import { Login } from './Components/Login/Login';
import { Profile } from './Components/Profile/Profile';



function App() {
  return (
    <div className="App">
     
<Route exact path='/'><Login/></Route>
<Route path='/feed'><Feed/></Route>
<Route path='/profile'><Profile/></Route>
     </div>
  );
}

export default App;
