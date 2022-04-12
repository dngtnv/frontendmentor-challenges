import React from 'react';
import './index.scss';

export default function index() {
  return (
    <div className="todo-items-info">
      <div className="items-left">5 items left</div>
      <div className="items-filters">
        <span className="active">All</span>
        <span>Active</span>
        <span>Completed</span>
      </div>
      <div className="items-clear">
        <span>Clear Completed</span>
      </div>
    </div>
  );
}
