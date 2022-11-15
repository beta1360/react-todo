import './Todo.css'

const Todo = ({
  todo,
  removeTodo,
  checkTodo
}) => {
  const { label, checked } = todo

  return (
    <div className="todo">
      <input
        className="todo-checker"
        type="checkbox"
        checked={checked}
        onChange={() => checkTodo(todo.id)}
      />
      <p className="todo-label">{ label }</p>
      <button
        className="todo-x"
        onClick={() => removeTodo(todo.id)}
      >X</button>
    </div>
  )
}

export default Todo