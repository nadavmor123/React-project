import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import { Route, Link } from 'react-router-dom';
import './App.css';


const HatsPage = () => {
 return (
      <h1> Hats Page </h1>
  );
}

function App() {
  return (
     <div className='app-container'>
       <Link to='/hats/1'>Link</Link>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/hats' component={HatsPage} />
       <Route exact path='/hats/:id' component={HatsPage} />
     </div>
  )
}

export default App;
