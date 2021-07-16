import React from 'react';

const HomePage = (props) => {

  return (
    <div className="container mx-auto">
      <header className={`${!props.isDarkMode ? 'bg-gray-300 text-black' : 'bg-gray-900 text-white'} w-full`}>
        Hola soy homepage
      </header>
      <main>
        Cuerpo de la pagina
      </main>
    </div>
  )
}

export default HomePage;
