interface ToDoListItem {
  _id: string;
  name: string;
  completed: boolean;
}

type ToDoList = ToDoListItem[];