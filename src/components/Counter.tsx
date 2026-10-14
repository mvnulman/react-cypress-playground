import { useState } from 'react'

/**
 * Contador — estado local, botão desabilitado e renderização condicional.
 */
export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <section className="card" data-cy="counter-card">
      <header className="card-header">
        <span className="badge">1</span>
        <h2>Contador</h2>
      </header>
      <p className="card-description">
        Clique nos botões e valide o valor exibido na tela.
      </p>

      <div className="counter">
        <button
          type="button"
          className="btn btn-outline"
          data-cy="counter-decrement"
          aria-label="Diminuir"
          onClick={() => setCount((value) => value - 1)}
        >
          −
        </button>
        <output className="counter-value" data-cy="counter-value">
          {count}
        </output>
        <button
          type="button"
          className="btn btn-outline"
          data-cy="counter-increment"
          aria-label="Aumentar"
          onClick={() => setCount((value) => value + 1)}
        >
          +
        </button>
      </div>

      <button
        type="button"
        className="btn btn-ghost"
        data-cy="counter-reset"
        disabled={count === 0}
        onClick={() => setCount(0)}
      >
        Resetar
      </button>

      {count < 0 && (
        <p className="feedback feedback-warning" data-cy="counter-warning">
          Valor negativo!
        </p>
      )}
    </section>
  )
}
