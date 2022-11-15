import Todo from './Todo'
import './Todos.css'

const Todos = ({
  todos = [],
  removeTodo,
  checkTodo
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
          />
        ))
      }
    </div>
  )
}

export default Todos