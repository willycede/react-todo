import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { TodoCounter } from './TodoCounter';
import { TodoBody } from './TodoBody';
import './App.scss';
const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
];
function App() {
  return (
    <>
      <TodoCounter totalTodos={10} completedTodos={5}/>
      <TodoBody>
        <div className='left-side'>
          <CreateTodoButton/>
        </div>
        <div className='right-side'>
          <TodoSearch/>
          <TodoList>
            {
              defaultTodos.map(todo => <TodoItem text={todo.text} completed={todo.completed} key={todo.text}/>)
            }
          </TodoList>
        </div>
      </TodoBody>
    </>
  );
}



export default App;
