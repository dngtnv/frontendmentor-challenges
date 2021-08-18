import React from 'react';
import './App.scss';
import Header from './components/Header/index';
import Main from './components/MainSection';
import Footer from './components/Footer/index';

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
