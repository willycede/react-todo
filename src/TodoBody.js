import './TodoBody.css';
function TodoBody ({children}){
    return (
        <div className="todo-body">
            {children}
        </div>
    )
}

export {TodoBody};