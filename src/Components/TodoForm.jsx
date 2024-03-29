import { useState } from 'react';

export default function TodoForm({addTask}) {
  const [value, setValue] = useState("")

  function handelOnChange(event) {
    const value = event.target.value;
    setValue(value);
  }

  function handelSubmit(event) {
    event.preventDefault();
    addTask(value);
    setValue("");
  }
  
  return (
    <form className='TodoForm' onSubmit={handelSubmit}>
      <input
        type="text"
        className='todo-input'
        placeholder='Write new task ...'
        value={value}
        onChange={handelOnChange}
        autoFocus
      />
      <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
