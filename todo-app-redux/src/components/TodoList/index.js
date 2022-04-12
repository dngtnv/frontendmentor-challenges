import React from 'react';
import './index.scss';
import ItemInfo from './Info/index';
import Todo from './Todo';

export default function index({ todoList, onCheckTodo, onRemoveTodo }) {
  return (
    <div className="todo-items-wrapper">
      <div className="todo-items">
        {todoList.map(todo => (
          <Todo key={todo.id} todo={todo} onCheckTodo={onCheckTodo} onRemoveTodo={onRemoveTodo} />
        ))}
      </div>
      <ItemInfo />
    </div>
  );
}
