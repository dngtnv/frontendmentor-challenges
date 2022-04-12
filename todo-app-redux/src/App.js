import { useCallback, useEffect, useState } from 'react';
import { v4 } from 'uuid';
import './App.scss';
import moonIcon from './assets/images/icon-moon.svg';
import sunIcon from './assets/images/icon-sun.svg';
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState('');

  useEffect(() => {
    const storagedTodoList = localStorage.getItem('TODO_LIST');
    if (storagedTodoList) {
      setTodoList(JSON.parse(storagedTodoList));
      console.log(storagedTodoList);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('TODO_LIST', JSON.stringify(todoList));
  }, [todoList]);

  const onTextInputChange = useCallback(e => {
    setTextInput(e.target.value);
  }, []);

  const onEnterPress = useCallback(
    e => {
      if (e.key === 'Enter') {
        if (textInput === '') {
          e.preventDefault();
        } else {
          e.preventDefault();
          setTodoList([{ id: v4(), name: textInput, isCompleted: false }, ...todoList]);
          setTextInput('');
        }
      }
    },
    [textInput, todoList]
  );
  const onCheckTodo = useCallback(id => {
    setTodoList(prevState => prevState.map(todo => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)));
  }, []);
  const onRemoveTodo = useCallback(id => {
    setTodoList(prevState =>
      prevState.filter(todo => {
        return todo.id !== id;
      })
    );
  }, []);

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
        <div className="new-todo">
          <div className="check">
            <div className="check-mark"></div>
          </div>
          <div className="todo-input">
            <form>
              <input type="text" placeholder="Create a new todo..." value={textInput} onChange={onTextInputChange} onKeyPress={onEnterPress} />
            </form>
          </div>
        </div>
        <TodoList todoList={todoList} onCheckTodo={onCheckTodo} onRemoveTodo={onRemoveTodo} />
        <div className="notice">Drag and drop to reorder list</div>
      </div>
    </div>
  );
}

export default App;
