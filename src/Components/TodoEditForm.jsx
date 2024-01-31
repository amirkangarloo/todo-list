
import { useState } from 'react';

export default function TodoEditForm({ task, handelEdit }) {
  const [value, setValue] = useState(task.title)

  function handelOnChange(event) {
    const value = event.target.value;
    setValue(value);
  }

  function handelSubmit(event) {
    event.preventDefault();
    handelEdit(task.id, value);
    setValue("");
  }

  return (
    <form className='TodoForm' onSubmit={handelSubmit}>
      <input
        type="text"
        className='todo-input'
        placeholder='Edit task ...'
        value={value}
        onChange={handelOnChange}
        autoFocus
      />
      <button type='submit' className='todo-btn'>Edit Task</button>
    </form>
  )
}

