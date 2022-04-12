import React from 'react';
import checkIcon from '../../../assets/images/icon-check.svg';
import crossIcon from '../../../assets/images/icon-cross.svg';
import './index.scss';

export default function Todo({ todo, onCheckTodo, onRemoveTodo }) {
  return (
    <div className={`todo-item ${todo.isCompleted === true ? 'checked' : ''}`}>
      <div className="check">
        <div className="check-mark" onClick={() => onCheckTodo(todo.id)}>
          <img src={checkIcon} alt="check" />
        </div>
      </div>
      <div className="todo-text">{todo.name}</div>
      <div className="remove-todo" onClick={() => onRemoveTodo(todo.id)}>
        <img src={crossIcon} alt="remove todo" />
      </div>
    </div>
  );
}
