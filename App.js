import React, {useState} from 'react';
import {Navigation} from './app/navigation';
import {MainContext} from './app/core/context';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const contextData = {
    darkTheme,
    setDarkTheme,
  };
  return (
    <MainContext.Provider value={contextData}>
      <Navigation />
    </MainContext.Provider>
  );
};

export default App;
