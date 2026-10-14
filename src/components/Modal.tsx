import { useEffect, useState } from 'react'

/**
 * Modal — abre e fecha pelo botão, pelo backdrop e pela tecla ESC.
 */
export function Modal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return

    function handleKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open])

  return (
    <section className="card" data-cy="modal-card">
      <header className="card-header">
        <span className="badge">6</span>
        <h2>Modal</h2>
      </header>
      <p className="card-description">
        Abra e feche o diálogo de diferentes maneiras.
      </p>

      <button
        type="button"
        className="btn btn-primary"
        data-cy="modal-open"
        onClick={() => setOpen(true)}
      >
        Abrir modal
      </button>

      {open && (
        <div
          className="modal-backdrop"
          data-cy="modal-backdrop"
          onClick={() => setOpen(false)}
        >
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-label="Confirmação"
            data-cy="modal"
            onClick={(event) => event.stopPropagation()}
          >
            <h3>Você tem certeza?</h3>
            <p>Esta é uma janela modal usada para praticar testes.</p>
            <div className="row">
              <button
                type="button"
                className="btn btn-ghost"
                data-cy="modal-cancel"
                onClick={() => setOpen(false)}
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-cy="modal-confirm"
                onClick={() => setOpen(false)}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
