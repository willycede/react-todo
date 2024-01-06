
import './TodoCounter.css';
function TodoCounter({
    totalTodos,
    completedTodos
}) {
    return (
      <>
        <div className='todo-header'>
          <h1>
            Tareas
          </h1>
          <h1>
            Has completado {completedTodos} de {totalTodos} tareas
          </h1>
        </div>
        
      </>
    );
  }

export {
    TodoCounter
};