import { AsyncUsers } from './components/AsyncUsers'
import { Counter } from './components/Counter'
import { LoginForm } from './components/LoginForm'
import { Modal } from './components/Modal'
import { PreferencesForm } from './components/PreferencesForm'
import { TodoList } from './components/TodoList'
import './App.css'

/**
 * Playground de testes.
 *
 * Cada card abaixo é um "exercício" com interações diferentes. A ideia é usar
 * esta tela como base para praticarmos testes end-to-end.
 *
 * Todos os elementos interativos possuem o atributo `data-cy`, uma convenção
 * de seletor estável (não depende de classes CSS ou textos que podem mudar).
 */
function App() {
  return (
    <div className="app">
      <header className="hero">
        <p className="eyebrow">React + TypeScript + Vite</p>
        <h1>Playground de testes</h1>
        <p className="subtitle">
          Uma tela única com vários cenários interativos que servirão de alvo
          para os nossos primeiros testes end-to-end.
        </p>
        <p className="hint">
          Cada elemento interativo tem um <code>data-cy</code>, por exemplo{' '}
          <code>data-cy="counter-increment"</code>.
        </p>
      </header>

      <main className="grid">
        <Counter />
        <TodoList />
        <LoginForm />
        <PreferencesForm />
        <AsyncUsers />
        <Modal />
      </main>

      <footer className="footer">
        Cada seção foi pensada para praticar um tipo de interação.
      </footer>
    </div>
  )
}

export default App
