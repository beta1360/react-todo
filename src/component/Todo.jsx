import './Todo.css'
import React, { useState, useMemo } from 'react'

const Todo = React.memo(({
  todo,
  removeTodo,
  checkTodo,
  onEdit,
  onEditMode,
  editTodo
}) => {
  const { label, checked } = todo
  const [edittableLabel, setEdittableLabel] = useState('')

  const onEditLabel = () => {
    setEdittableLabel(todo.label)
    onEditMode(todo.id)
  }

  const editTodoLabel = () => {
    setEdittableLabel('')
    editTodo(todo, edittableLabel)
  }

  const changeEdittableLabel = (e) => {
    setEdittableLabel(e.target.value)
  }

  const visibleEditButton = useMemo(() => (
    todo.isEdit || !onEdit),
    [todo.isEdit, onEdit]
  )

  return (
    <div className="todo">
      <input
        className="todo-checker"
        type="checkbox"
        checked={checked}
        onChange={() => checkTodo(todo.id)}
      />
      {
        onEdit && todo.isEdit ?
        <input
          type="text"
          className="todo-label-edit"
          value={edittableLabel}
          onChange={changeEdittableLabel}
        />
        : <p className="todo-label">{ label }</p>
      }
      {
        visibleEditButton &&
        <button
          className="todo-edit"
          onClick={() => { onEdit ? editTodoLabel() : onEditLabel() }}
        >
          { onEdit ? 'Save' : 'Edit' }
        </button>
      }
      <button
        className="todo-x"
        disabled={onEdit}
        onClick={() => removeTodo(todo.id)}
      >X</button>
    </div>
  )
})

export default Todo