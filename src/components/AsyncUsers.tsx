import { useState } from 'react'

type User = {
  id: number
  name: string
  email: string
}

type Status = 'idle' | 'loading' | 'success' | 'error'

const USERS_URL = 'https://jsonplaceholder.typicode.com/users?_limit=3'

/**
 * Requisição assíncrona — busca dados de uma API pública e controla os
 * estados de carregamento, sucesso e erro.
 */
export function AsyncUsers() {
  const [users, setUsers] = useState<User[]>([])
  const [status, setStatus] = useState<Status>('idle')

  async function loadUsers() {
    setStatus('loading')
    try {
      const response = await fetch(USERS_URL)
      if (!response.ok) {
        throw new Error('Requisição falhou')
      }
      const data = (await response.json()) as User[]
      setUsers(data)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="card" data-cy="async-card">
      <header className="card-header">
        <span className="badge">5</span>
        <h2>Requisição assíncrona</h2>
      </header>
      <p className="card-description">
        Os dados vêm de uma API pública e têm estados de carregamento e erro.
      </p>

      <button
        type="button"
        className="btn btn-primary"
        data-cy="async-load"
        onClick={loadUsers}
      >
        Carregar usuários
      </button>

      {status === 'loading' && (
        <p className="feedback" data-cy="async-loading" role="status">
          Carregando...
        </p>
      )}

      {status === 'error' && (
        <p className="feedback feedback-error" data-cy="async-error" role="alert">
          Não foi possível carregar os usuários.
        </p>
      )}

      {status === 'success' && (
        <ul className="user-list" data-cy="async-list">
          {users.map((user) => (
            <li className="user-item" data-cy="async-user" key={user.id}>
              <strong data-cy="async-user-name">{user.name}</strong>
              <span className="muted">{user.email}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
