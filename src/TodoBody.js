import './TodoBody.scss';
function TodoBody ({children}){
    return (
        <div className="todo-body">
            {children}
        </div>
    )
}

export {TodoBody};