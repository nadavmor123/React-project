import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import { Route, Link } from 'react-router-dom';
import './App.css';

import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { Provider } from 'react-redux';
import rootReducer from './reducers/root';
import { rootEpic } from './epics';

const middleware = createEpicMiddleware(rootEpic);

const store = createStore(rootReducer, applyMiddleware(middleware));

const HatsPage = () => {
 return (
      <h1> Hats Page </h1>
  );
}

function App() {
  return (
      <Provider store={store}>
         <div className='app-container'>
           <Link to='/hats/1'>Link</Link>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/hats' component={HatsPage} />
           <Route exact path='/hats/:id' component={HatsPage} />
         </div>
      </Provider>
  )
}

export default App;
