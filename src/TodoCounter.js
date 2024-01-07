
import './TodoCounter.scss';
function TodoCounter({
    totalTodos,
    completedTodos
}) {
    return (
      <>
        <div className='todo-header'>
          <h1 className='todo-header__title'>
            Tareas
          </h1>
          <h1 className='todo-header__title'>
            Has completado {completedTodos} de {totalTodos} tareas
          </h1>
        </div>
        
      </>
    );
  }

export {
    TodoCounter
};