import React from 'react';
import './App.scss';
import Footer from './components/Footer/Index';
import Header from './components/Header/Index';
import Main from './components/MainSection';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
