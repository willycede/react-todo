import './TodoItem.scss';
import { MdCancel, MdCheckCircleOutline } from "react-icons/md";

function TodoItem({text, completed}) {
    return (
      <div className="item">
        <MdCheckCircleOutline color={completed ? 'green' : 'yellow'} size={32} className='icon'/>
        <p>{text}</p>
        <MdCancel size={32}  className='icon'/>
      </div>  
    );
  }

export {
    TodoItem
};