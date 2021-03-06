import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import HomePage from './pages/Home';
import NewsPage from './pages/News';
import { FetchExample } from './pages/Example';

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
      </Switch>
    </Router>
  );
}

export default App;
