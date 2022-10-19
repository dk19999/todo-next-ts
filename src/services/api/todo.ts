import axios from '../../lib/axios'

export const getTodos = (
  callback: (toDoList: ToDoList) => void,
  errorCallback: (error: Error) => void
) => {
  axios({ url: '/api/todos' })
    .then((res) => {
      callback && callback(res.data.todos);
    })
    .catch((error) => {
      errorCallback && errorCallback(error);
    });
};

export const createTodo = (
  data: Omit<ToDoListItem, '_id'>,
  callback: (toDo?: ToDoListItem ) => void,
  errorCallback: (error: Error) => void
) => {
  axios({ url: '/api/todos', method: 'post', data })
    .then((res) => {
      callback && callback(res.data);
    })
    .catch((error) => {
      errorCallback && errorCallback(error);
    });
};

export const updateTodo = (
  data: ToDoListItem,
  callback: (data: { message: string }) => void,
  errorCallback: (error: Error) => void
) => {
  return new Promise((resolve, reject) => {
    axios({ url: `/api/todos/${data._id}`, data, method: 'put' })
    .then((res) => {
      callback && callback(res.data);
      console.log('🚀 ~ file: todo.ts ~ line 33 ~ .then ~ res.data', res.data);
      resolve(res.data)
    })
    .catch((error) => {
      errorCallback && errorCallback(error);
      reject(error)
    });
  })
};

export const deleteTodo = (
  id: string,
  callback: (data: { message: string }) => void,
  errorCallback: (error: Error) => void
) => {
  axios({ url: `api/todos/${id}`, method:'delete' })
    .then((res) => {
      callback && callback(res.data);
      console.log('🚀 ~ file: todo.ts ~ line 33 ~ .then ~ res.data', res.data);
    })
    .catch((error) => {
      errorCallback && errorCallback(error);
    });
};
