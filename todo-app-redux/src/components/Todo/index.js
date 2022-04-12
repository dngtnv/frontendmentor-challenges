import React, { useCallback, useState } from 'react';
import './index.scss';

export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState('');

  const onEnterPress = useCallback(e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setTextInput(e.target.value);
    }
  }, []);
  return (
    <div className="new-todo">
      <div className="check">
        <div className="check-mark"></div>
      </div>
      <div className="todo-input">
        <form>
          <input type="text" placeholder="Create a new todo..." onKeyPress={onEnterPress} />
        </form>
      </div>
    </div>
  );
}
