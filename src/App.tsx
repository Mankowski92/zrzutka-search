import React from 'react';
import '../src/styles/globals.css';
import ZrzutkasSearch from './components/zrzutkasSearch/ZrzutkasSearch';
import Header from './components/header/Header';

function App() {
  return (
    <>
      <Header />
      <ZrzutkasSearch />
    </>
  );
}

export default App;
