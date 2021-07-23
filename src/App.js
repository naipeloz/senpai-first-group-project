import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import HomePage from './pages/Home';
import NewsPage from './pages/News';
import MoviesPage from './pages/Movies';
import FormsPage from './pages/FormsPage';
import { FetchWeather } from './pages/Weather';
import { FetchExample } from './pages/Example';
import FutResults from './pages/FutResults';


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
        <Route path='/news/:cat?'>
          <NewsPage 
            isDarkMode={darkMode}
          />
        </Route>
        <Route path='/fetch-weather'>
          <FetchWeather 
            isDarkMode={darkMode}
          />
        </Route>
        <Route path='/fetch-example'>
          <FetchExample />
        </Route>
        <Route path='/FutResults' exact>
          <FutResults
            isDarkMode={darkMode}
          />
        </Route>
        <Route path='/movies/:id'>
          <MoviesPage />
        </Route>
        <Route path='/formularios'>
          <FormsPage />
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
