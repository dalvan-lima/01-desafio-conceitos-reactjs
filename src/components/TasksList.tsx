import {
  useState,
  useEffect,
  ChangeEvent,
  InvalidEvent,
  FormEvent
} from 'react'

import styles from './TasksList.module.css'

import clipboard from '../assets/clipboard.svg'
import { Task } from './Task'
import { AiOutlinePlusCircle } from 'react-icons/ai'

export interface TaskProps {
  id: number
  description: string
  done: boolean
}

export function TasksList() {
  const [tasks, setTasks] = useState<TaskProps[]>([
    { id: 1, description: 'Nova tarefa para hoje', done: false }
  ])
  const [qtdFinalized, setQtdFinalized] = useState(0)
  const [newTodoDescription, setNewTodoDescription] = useState('')
  const isNewTodoDescriptionEmpty = newTodoDescription.length === 0

  function handleCreateNewTask(event: FormEvent) {
    event?.preventDefault()
    if (newTodoDescription.trim().length === 0) {
      setNewTodoDescription('')
    } else {
      setTasks([
        ...tasks,
        { id: tasks.length + 1, description: newTodoDescription, done: false }
      ])
      setNewTodoDescription('')
    }
  }

  function handleNewTodoChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTodoDescription(event.target.value)
  }

  function handleNewTodoInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Descreva a tarefa para continuar')
  }

  useEffect(() => {
    let qtd = 0
    tasks.map((task) => {
      if (task.done === true) {
        qtd++
      }
    })
    setQtdFinalized(qtd)
  }, [tasks])

  return (
    <main className={styles.main}>
      <form onSubmit={handleCreateNewTask}>
        <div className={styles.newTask}>
          <input
            name='description'
            type='text'
            value={newTodoDescription}
            onChange={handleNewTodoChange}
            onInvalid={handleNewTodoInvalid}
            placeholder='Adicione uma nova tarefa'
            required
          />
          <button
            type='submit'
            onClick={handleCreateNewTask}
            disabled={isNewTodoDescriptionEmpty}
          >
            Criar <AiOutlinePlusCircle />{' '}
          </button>
        </div>
      </form>
      <div className={styles.tasks}>
        <header className={styles.header}>
          <p>
            <label>Tarefas criadas</label>
            <span>{tasks.length}</span>
          </p>
          <p>
            <label>Concluídas</label>
            <span>
              {tasks.length > 0
                ? `${qtdFinalized} de ${tasks.length} `
                : qtdFinalized}
            </span>
          </p>
        </header>
        <main className={styles.main}>
          {tasks.length > 0 &&
            tasks.map((task) => {
              return (
                <Task
                  key={task.id}
                  id={task.id}
                  description={task.description}
                  done={task.done}
                  tasks={tasks}
                  setTasks={setTasks}
                />
              )
            })}
          {tasks.length === 0 && (
            <>
              <img src={clipboard} />
              <p>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                Crie tarefas e organize seus itens a fazer
              </p>
            </>
          )}
        </main>
      </div>
    </main>
  )
}
