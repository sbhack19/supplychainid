import React from 'react';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
