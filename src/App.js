import { useState, useEffect } from 'react'
import { useCallback } from 'react'
import './App.css'
import Todos from './component/Todos'

const defaultTodos = JSON.parse(localStorage.getItem('todos')) || []

function App() {
  const [todos, setTodos] = useState(defaultTodos)
  const [input, setInput] = useState('')
  const [onEdit, setOnEdit] = useState(false)

  const removeTodo = useCallback((id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }, [todos])

  const checkTodo = useCallback((id) => {
    const newTodos = todos.map(todo =>
      todo.id === id ? { ...todo, checked: !todo.checked} : todo)
    setTodos(newTodos)
  }, [todos])

  const addTodo = useCallback((e) => {
    e.preventDefault()
    const newTodos = [
      ...todos,
      {
        label: input,
        id: new Date(),
        checked: false,
        isEdit: false
      }
    ]
    setTodos(newTodos)
    setInput('')
  }, [todos, input])

  const inputTodo = useCallback((e) => {
    setInput(e.target.value)
  }, [])

  const deleteAllTodos = useCallback(() => {
    setTodos([])
  }, [])

	useEffect(() => {
		const convertedTodos = JSON.stringify(todos)
		localStorage.setItem('todos', convertedTodos)
	}, [todos])

	const onEditMode = (id) => {
		const newTodos = todos.map((todo) => ({
			...todo,
			isEdit: todo.id === id
		}))
		setTodos(newTodos)
		setOnEdit(true)
	}

	const editTodo = (todo, label) => {
		if (!onEdit) return
		const newTodos = todos.map((item) => {
			return todo.id === item.id ? { ...todo, label } : item
		})
		setTodos(newTodos)
		setOnEdit(false)
	}

  return (
    <div className="app">
      <h1>Marco Todos</h1>
      <button
        className="all-delete-btn"
        onClick={deleteAllTodos}
        disabled={onEdit}
      >
        All Delete
      </button>
      <Todos
        todos={todos}
        removeTodo={removeTodo}
        checkTodo={checkTodo}
        onEdit={onEdit}
        onEditMode={onEditMode}
        editTodo={editTodo}
      />
      <form
        className="add-todo-form"
        onSubmit={addTodo}
        disabled={onEdit}
      >
        <input
          className="add-todo-input"
          value={input}
          placeholder="Input todo"
          onChange={inputTodo}
        />
        <button
          className="add-todo-btn"
          onClick={addTodo}
          disabled={onEdit}
        >+</button>
      </form>
    </div>
  )
}

export default App
