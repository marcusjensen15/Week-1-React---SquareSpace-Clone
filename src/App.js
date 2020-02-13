// App Fundamentals
import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import TeamProfile from './components/TeamProfile';
import AboutUs from './components/AboutUs';
import Careers from './components/Careers';
import Locations from './components/AboutUs';

function App() {
  return (
    <div>
      <Header/>
        <Switch>
          <Route exact path='/' component={TeamProfile} />
          <Route exact path='/aboutus' component={AboutUs} />
          <Route exact path='/careers' component={Careers} />
          <Route exact path='/locations' component={Locations} />
        </Switch>
    </div>
  );
}

export default App;
