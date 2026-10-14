import { useState } from 'react'

const topics = ['Cypress', 'React', 'TypeScript', 'Vite']

/**
 * Preferências — select, checkboxes, radio buttons e slider.
 */
export function PreferencesForm() {
  const [experience, setExperience] = useState('iniciante')
  const [selectedTopics, setSelectedTopics] = useState<string[]>(['Cypress'])
  const [plan, setPlan] = useState('mensal')
  const [hours, setHours] = useState(5)

  function toggleTopic(topic: string) {
    setSelectedTopics((current) =>
      current.includes(topic)
        ? current.filter((item) => item !== topic)
        : [...current, topic],
    )
  }

  return (
    <section className="card" data-cy="preferences-card">
      <header className="card-header">
        <span className="badge">4</span>
        <h2>Preferências</h2>
      </header>
      <p className="card-description">
        Combine selects, checkboxes, radios e um slider.
      </p>

      <div className="form">
        <label className="field">
          <span>Nível de experiência</span>
          <select
            className="input"
            data-cy="experience-select"
            value={experience}
            onChange={(event) => setExperience(event.target.value)}
          >
            <option value="iniciante">Iniciante</option>
            <option value="intermediario">Intermediário</option>
            <option value="avancado">Avançado</option>
          </select>
        </label>
        <p className="counter-line" data-cy="experience-value">
          Selecionado: {experience}
        </p>

        <fieldset className="fieldset" data-cy="topics-fieldset">
          <legend>Temas de interesse</legend>
          {topics.map((topic) => (
            <label className="choice" key={topic}>
              <input
                type="checkbox"
                data-cy={`topic-${topic.toLowerCase()}`}
                checked={selectedTopics.includes(topic)}
                onChange={() => toggleTopic(topic)}
              />
              <span>{topic}</span>
            </label>
          ))}
        </fieldset>
        <p className="counter-line" data-cy="topics-value">
          Escolhidos: {selectedTopics.length}
        </p>

        <fieldset className="fieldset" data-cy="plan-fieldset">
          <legend>Plano</legend>
          {['mensal', 'anual'].map((option) => (
            <label className="choice" key={option}>
              <input
                type="radio"
                name="plan"
                value={option}
                data-cy={`plan-${option}`}
                checked={plan === option}
                onChange={() => setPlan(option)}
              />
              <span>{option === 'mensal' ? 'Mensal' : 'Anual'}</span>
            </label>
          ))}
        </fieldset>

        <label className="field">
          <span data-cy="hours-value">
            Horas de estudo por semana: {hours}h
          </span>
          <input
            type="range"
            min={1}
            max={40}
            data-cy="hours-range"
            value={hours}
            onChange={(event) => setHours(Number(event.target.value))}
          />
        </label>
      </div>
    </section>
  )
}
