import React from 'react';
import FetchMovie from './components/Peliculas/FetchMovie';


function App() {

  return (
    <>
    {<FetchMovie id="105" />}

    {<FetchMovie id="990" />}

    {<FetchMovie id="891" />}

    {<FetchMovie id="489" />}
    </>
  );
}

export default App;