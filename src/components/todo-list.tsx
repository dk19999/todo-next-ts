import React, { useEffect, useState } from 'react';

import { createTodo, getTodos, updateTodo } from '@/services/api/todo';

import Todo from './todo';

function TodoList() {
  const [todoItemName, setToDoItemName] = useState<string>('');
  const [toDoList, setToDoList] = useState<ToDoList>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDoItemName(e.target.value);
  };

  const addTask = () => {
    const newTask = { name: todoItemName, completed: false };
    createTodo(newTask, fetchData, () => null);
    setToDoItemName('');
  };

  const fetchData = () => {
    getTodos(
      (data) => {
        console.log(
          '🚀 ~ file: todo-list.tsx ~ line 24 ~ fetchData ~ data',
          data
        );
        setToDoList(data);
      },
      () => setToDoList([])
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleTask = (todoItem: ToDoListItem) => {
    if (!toDoList) {
      return;
    }
    const newTodo = { ...todoItem };
    newTodo['completed'] = !todoItem.completed;
    updateTodo(
      newTodo,
      () => fetchData(),
      () => null
    );
  };

  return (
    <div className='w-[90%] lg:w-[600px]'>
        <p className='text-4xl uppercase'>Todo app</p>
      <div className='flex my-6'>
        <input
          value={todoItemName}
          className='border px-4 py-2 w-full'
          onChange={onChange}
          placeholder={'Enter todo name'}
        />{' '}
        <button
          onClick={addTask}
          className='bg-purple-400 px-4 py-2 text-white'
        >
          +
        </button>
      </div>
      <div className='flex flex-col '>
        {toDoList?.map((todo) => (
          <Todo refetchData={fetchData} toggleTask={toggleTask} key={todo._id} data={todo} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
