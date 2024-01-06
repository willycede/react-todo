import './CreateTodoButton.css';
import { MdAddCircleOutline } from "react-icons/md";

function CreateTodoButton() {
    return (
      <form className="create-form">
        <input className='beauty-input' type="text" placeholder="Nueva tarea" />
        <MdAddCircleOutline size={32} className='icon'/>
      </form>
    );
  }

export {
    CreateTodoButton
};