import Todo from './Todo'
import './Todos.css'

const Todos = ({
  todos = [],
  removeTodo,
  checkTodo,
  onEdit,
  onEditMode,
  editTodo
}) => {
  return (
    <div className="todos">
      {
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            checkTodo={checkTodo}
            onEdit={onEdit}
            onEditMode={onEditMode}
            editTodo={editTodo}
          />
        ))
      }
    </div>
  )
}

export default Todos