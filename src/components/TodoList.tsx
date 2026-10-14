import { useState } from 'react'
import type { FormEvent } from 'react'

type Todo = {
  id: number
  text: string
  done: boolean
}

const initialTodos: Todo[] = [
  { id: 1, text: 'Aprender Cypress', done: false },
  { id: 2, text: 'Escrever o primeiro teste', done: true },
]

/**
 * Lista de tarefas — formulário, checkboxes e manipulação de listas.
 */
export function TodoList() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos)
  const [input, setInput] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const text = input.trim()

    if (!text) {
      setError('Digite o nome de uma tarefa.')
      return
    }

    setTodos((current) => [...current, { id: Date.now(), text, done: false }])
    setInput('')
    setError('')
  }

  function toggleTodo(id: number) {
    setTodos((current) =>
      current.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    )
  }

  function removeTodo(id: number) {
    setTodos((current) => current.filter((todo) => todo.id !== id))
  }

  const pending = todos.filter((todo) => !todo.done).length

  return (
    <section className="card" data-cy="todo-card">
      <header className="card-header">
        <span className="badge">2</span>
        <h2>Lista de tarefas</h2>
      </header>
      <p className="card-description">
        Adicione, conclua e remova tarefas para testar listas.
      </p>

      <form className="row" data-cy="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder="Nova tarefa"
          data-cy="todo-input"
          value={input}
          onChange={(event) => {
            setInput(event.target.value)
            if (error) setError('')
          }}
        />
        <button type="submit" className="btn btn-primary" data-cy="todo-add">
          Adicionar
        </button>
      </form>

      {error && (
        <p className="feedback feedback-error" data-cy="todo-error">
          {error}
        </p>
      )}

      <p className="counter-line" data-cy="todo-pending-count">
        {pending} pendente(s) de {todos.length}
      </p>

      <ul className="todo-list" data-cy="todo-list">
        {todos.map((todo) => (
          <li className="todo-item" data-cy="todo-item" key={todo.id}>
            <label className="todo-label">
              <input
                type="checkbox"
                data-cy="todo-toggle"
                checked={todo.done}
                onChange={() => toggleTodo(todo.id)}
              />
              <span className={todo.done ? 'todo-text done' : 'todo-text'}>
                {todo.text}
              </span>
            </label>
            <button
              type="button"
              className="btn btn-icon"
              data-cy="todo-remove"
              aria-label={`Remover ${todo.text}`}
              onClick={() => removeTodo(todo.id)}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p className="empty" data-cy="todo-empty">
          Nenhuma tarefa por aqui.
        </p>
      )}
    </section>
  )
}
