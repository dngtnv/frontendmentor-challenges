import { useState } from 'react';
import './App.scss';
import moonIcon from './assets/images/icon-moon.svg';
import sunIcon from './assets/images/icon-sun.svg';
import Todo from './components/Todo';
import TodoList from './components/TodoList';

function App() {
  let currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  if (localStorage.getItem('theme')) {
    currentTheme = localStorage.getItem('theme');
  }
  const [theme, setTheme] = useState(currentTheme);
  document.getElementsByTagName('body')[0].setAttribute('data-theme', theme);

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };
  return (
    <div className="container">
      <div className="cover-image" cover-theme={theme}></div>
      <div className="main">
        <div className="header">
          <div className="title">
            <h1>TODO</h1>
          </div>
          <div className="theme">
            <button className="switch-theme" onClick={() => switchTheme()}>
              {theme === 'light' ? <img src={moonIcon} alt="moon" /> : <img src={sunIcon} alt="sun" />}
            </button>
          </div>
        </div>
        <Todo />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
