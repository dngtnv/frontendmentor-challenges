import React, { useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import Filters from './Filters';
import './index.scss';
import Todo from './Todo';

export default function TodoList({ todoList, onCheckTodo, onRemoveTodo, clearCompleted, handleOnDragEnd }) {
  const [list, setList] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('all');

  const countTodoLeft = todoList.filter(todo => todo.isCompleted === false).length;
  const activeList = todoList.filter(todo => todo.isCompleted === false);
  const completedList = todoList.filter(todo => todo.isCompleted === true);

  useEffect(() => {
    if (currentFilter === 'all') {
      setList(todoList);
    } else if (currentFilter === 'active') {
      setList(activeList);
    } else {
      setList(completedList);
    }
  }, [activeList, todoList, completedList, currentFilter]);

  const filterTodo = filter => {
    switch (filter) {
      case 'all':
        setCurrentFilter('all');
        setList(todoList);
        break;
      case 'active':
        setCurrentFilter('active');
        setList(activeList);
        break;
      case 'completed':
        setCurrentFilter('completed');
        setList(completedList);
        break;
      default:
        break;
    }
  };
  return (
    <div className="todo-list-wrapper">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="todos">
          {provided => {
            return (
              <ul className="todo-items" {...provided.droppableProps} ref={provided.innerRef}>
                {list.map((todo, index) => (
                  <Draggable key={todo.id} draggableId={todo.id} index={index}>
                    {provided => {
                      return (
                        <Todo todo={todo} onCheckTodo={onCheckTodo} onRemoveTodo={onRemoveTodo} provided={provided} innerRef={provided.innerRef} />
                      );
                    }}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            );
          }}
        </Droppable>
      </DragDropContext>
      <Filters countTodoLeft={countTodoLeft} currentFilter={currentFilter} filterTodo={filterTodo} clearCompleted={clearCompleted} />
    </div>
  );
}
