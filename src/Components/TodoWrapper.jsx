import { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import TodoEditForm from './TodoEditForm';

export default function TodoWrapper() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem('list')) || [];
    setList(savedList);
  }, [])
  

  function addTask(newTask) {
    const newItem = {
      id: uuidv4(),
      title: newTask,
      isCompleted: false,
      isEditing: false
    }
    const updateList = [...list, newItem]
    setList(updateList);
    updateStorage(updateList);
  }

  function editTask(taskId, updateTitle) {
    const updateList = list.map(task => {
      return task.id === taskId ? { ...task, title: updateTitle, isEditing: !task.isEditing } : task;
    });
    setList(updateList);
    updateStorage(updateList);
  }
  
  function deleteTask(taskId) {
    const updateList = list.filter(task => task.id !== taskId);
    setList(updateList);
    updateStorage(updateList);
  }
  
  function toggleCompleted(taskId) {
    const updateList = list.map(task => {
      return task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task;
    });
    setList(updateList);
    updateStorage(updateList);
  }
  
  function toggleEditing(taskId) {
    const updateList = list.map(task => {
      return task.id === taskId ? { ...task, isEditing: !task.isEditing } : task;
    });
    setList(updateList);
    updateStorage(updateList);
  }

  function updateStorage(updateList) {
    localStorage.setItem('list', JSON.stringify(updateList));
  }

  const tasklist = list.map(task => {
    return task.isEditing ?
      <TodoEditForm
        key={task.id}
        task={task}
        handelEdit={editTask}
      /> :
      <Todo
      key={task.id}
      task={task}
      toggleCompleted={toggleCompleted}
      toggleEditing={toggleEditing}
      handelDelete={deleteTask}
    />
  })

  return (
    <div className='TodoWrapper'>
      <h1>My Tasks</h1>
      <TodoForm
        addTask={addTask}
      />
      {tasklist}
    </div>
  )
}
