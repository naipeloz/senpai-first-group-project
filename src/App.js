import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import HomePage from './pages/Home';
import NewsPage from './pages/News';
import { FetchExample } from './pages/Example';
<<<<<<< HEAD
import Conversor from '../src/components/divisas-honesto/index';
=======
import Conversor from './components/Divisas';
>>>>>>> b37f6e1ada7502375c348987607fb71ab92b7b1b

function App() {
  const [ darkMode, setDarkMode ] = useState(true);
  const [ date, setDate ] = useState(new Date().toLocaleString());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date().toLocaleString())
    }, 1000);
  });
  
  return (
    <Router>

      <div className="p-2">
        <button 
          className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'} text-xs p-2 rounded`}
          onClick={() => {setDarkMode(!darkMode)}}
        >
          Dark Mode {darkMode ? 'On' : 'Off'}
        </button>
        <p className='text-blue-500 text-xs'>{date}</p>
      </div>

      <Switch>
        <Route path='/news/:id?'>
          <NewsPage />
        </Route>
        <Route path='/fetch-example'>
          <FetchExample />
        </Route>
        <Route path='/' exact>
          <HomePage 
            isDarkMode={darkMode}
          />
        </Route>
        <Route path='/Currency'>
            <Conversor/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
