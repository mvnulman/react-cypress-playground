import { useState } from 'react'
import type { FormEvent } from 'react'

type Errors = {
  email?: string
  password?: string
}

/**
 * Formulário de login — validação de campos, mensagens de erro e sucesso.
 */
export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const [loggedUser, setLoggedUser] = useState<string | null>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors: Errors = {}

    if (!email) {
      nextErrors.email = 'E-mail é obrigatório.'
    } else if (!email.includes('@')) {
      nextErrors.email = 'Informe um e-mail válido.'
    }

    if (!password) {
      nextErrors.password = 'Senha é obrigatória.'
    } else if (password.length < 6) {
      nextErrors.password = 'A senha deve ter ao menos 6 caracteres.'
    }

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      setLoggedUser(email)
      setEmail('')
      setPassword('')
    }
  }

  return (
    <section className="card" data-cy="login-card">
      <header className="card-header">
        <span className="badge">3</span>
        <h2>Formulário de login</h2>
      </header>
      <p className="card-description">
        Teste validações, mensagens de erro e o estado de sucesso.
      </p>

      <form className="form" data-cy="login-form" onSubmit={handleSubmit} noValidate>
        <label className="field">
          <span>E-mail</span>
          <input
            type="email"
            className="input"
            placeholder="voce@email.com"
            data-cy="login-email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        {errors.email && (
          <p className="feedback feedback-error" data-cy="login-email-error">
            {errors.email}
          </p>
        )}

        <label className="field">
          <span>Senha</span>
          <input
            type="password"
            className="input"
            placeholder="••••••"
            data-cy="login-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        {errors.password && (
          <p className="feedback feedback-error" data-cy="login-password-error">
            {errors.password}
          </p>
        )}

        <button type="submit" className="btn btn-primary" data-cy="login-submit">
          Entrar
        </button>
      </form>

      {loggedUser && (
        <p className="feedback feedback-success" data-cy="login-success">
          Bem-vindo, {loggedUser}!
        </p>
      )}
    </section>
  )
}
