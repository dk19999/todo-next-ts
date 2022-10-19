import { deleteTodo } from '@/services/api/todo';
import React from 'react';
import {DeleteIcon} from './icons';
import toast from 'react-hot-toast'

function Todo({
  data,
  toggleTask,
  refetchData
}: {
  data: ToDoListItem;
  toggleTask: (todo: ToDoListItem) => void;
  refetchData:() => void
}) {


  const showSuccessToast = (message?:string) => {
    toast.success(message ?? 'Success')
  }

  return (
    <div className='flex items-center justify-between'>
      <div className='flex gap-4 items-center'>
      <input
        type='checkbox'
        checked={data.completed}
        onChange={() => toggleTask(data)}
      />
      <span className='capitalize'>{data.name}</span>
      </div>
      <DeleteIcon className={'cursor-pointer'} onClick={() => 
      {
        deleteTodo(data._id, refetchData, () => null)
        showSuccessToast('Deleted todo successfully')
      }} height={'1.5em'} width={'1.5em'}/>
    </div>
  );
}

export default Todo;
