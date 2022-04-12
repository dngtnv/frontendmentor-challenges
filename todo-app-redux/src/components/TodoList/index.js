import React from 'react';
import checkIcon from '../../assets/images/icon-check.svg';
import crossIcon from '../../assets/images/icon-cross.svg';
import './index.scss';
import ItemInfo from './Info/index';

export default function index() {
  return (
    <div className="todo-items-wrapper">
      <div className="todo-items">
        <div className="todo-item">
          <div className="check">
            <div className="check-mark">
              <img src={checkIcon} alt="check" />
            </div>
          </div>
          <div className="todo-text">Hello</div>
          <div className="remove-todo">
            <img src={crossIcon} alt="remove todo" />
          </div>
        </div>
      </div>
      <ItemInfo />
    </div>
  );
}
