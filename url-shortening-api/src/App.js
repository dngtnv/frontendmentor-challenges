import React from 'react';
import './App.scss';
import Footer from './components/Footer/index';
import Header from './components/Header/index';
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
