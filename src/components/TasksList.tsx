import styles from './TasksList.module.css'

import clipboard from '../assets/clipboard.svg'
import { TbCheck, TbTrash } from 'react-icons/tb'
import { Task } from './Task'

export function TasksList() {
  return (
    <div className={styles.tasks}>
      <header className={styles.header}>
        <p>
          <label>Tarefas criadas</label>
          <span>0</span>
        </p>
        <p>
          <label>Concluídas</label>
          <span>0</span>
        </p>
      </header>
      <main className={styles.main}>
        <Task />
        <img src={clipboard} />
        <p>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          Crie tarefas e organize seus itens a fazer
        </p>
      </main>
    </div>
  )
}
