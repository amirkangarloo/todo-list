import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Todo({ task, toggleCompleted, toggleEditing, handelDelete }) {
  const { id, title } = task;

  return (
    <div className='Todo'>
      <div onClick={() => toggleCompleted(id)}>
        <p className={`${ task.isCompleted ? "completed" : "incompleted" }`} >
          {title}
        </p>
      </div>
      <div>
        <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => toggleEditing(id)} />
        <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => handelDelete(id)}/>
      </div>
    </div>
  )
}
