import React from 'react';
import './index.scss';

export default function Info({ countTodoLeft, currentFilter, filterTodo, clearCompleted }) {
  return (
    <div className="todo-items-info">
      <div className="items-left">{countTodoLeft > 1 ? `${countTodoLeft} items left` : `${countTodoLeft} item left`}</div>
      <div className="items-filters">
        <span className={currentFilter === 'all' ? 'active' : ''} onClick={() => filterTodo('all')}>
          All
        </span>
        <span className={currentFilter === 'active' ? 'active' : ''} onClick={() => filterTodo('active')}>
          Active
        </span>
        <span className={currentFilter === 'completed' ? 'active' : ''} onClick={() => filterTodo('completed')}>
          Completed
        </span>
      </div>
      <div className="items-clear">
        <span onClick={clearCompleted}>Clear Completed</span>
      </div>
    </div>
  );
}
