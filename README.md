# React Cypress Playground

Aplicação **React + TypeScript + Vite** criada para servir de base para
aprendermos testes end-to-end com **Cypress**.

## Pré-requisitos

- Node.js 18+ (recomendado 20+)
- npm

## Instalação

```bash
npm install
```

## Scripts disponíveis

```bash
npm run dev        # inicia o servidor de desenvolvimento (http://localhost:5173)
npm run build      # gera a build de produção
npm run preview    # pré-visualiza a build de produção
npm run lint       # roda o linter (oxlint)
```

## A tela

A aplicação tem uma única tela (`/`) que reúne vários cenários independentes,
pensados como "alvos" de testes:

| # | Seção | Interações disponíveis |
|---|-------|------------------------|
| 1 | Contador | botões de +/−, reset desabilitado em zero, aviso de valor negativo |
| 2 | Lista de tarefas | adicionar, concluir (checkbox), remover, contagem de pendentes |
| 3 | Login | validação de e-mail e senha, mensagens de erro e sucesso |
| 4 | Preferências | `<select>`, checkboxes, radio buttons e slider |
| 5 | Requisição assíncrona | `fetch` para uma API pública, com loading e erro |
| 6 | Modal | abrir/fechar pelo botão, pelo backdrop e pela tecla ESC |

## Estrutura

```
src/
  components/
    Counter.tsx
    TodoList.tsx
    LoginForm.tsx
    PreferencesForm.tsx
    AsyncUsers.tsx
    Modal.tsx
  App.tsx        # monta a tela com todos os componentes
  App.css
  index.css
  main.tsx
```

## Convenção de seletores

Os elementos interativos possuem o atributo `data-cy`, que é a convenção
recomendada pelo Cypress para seletores estáveis (não dependem de classes CSS
ou textos que podem mudar):

```tsx
<button data-cy="counter-increment">+</button>
```

Isso será útil quando começarmos a escrever os testes.
