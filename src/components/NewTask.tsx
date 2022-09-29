import styles from './NewTask.module.css'

import { AiOutlinePlusCircle } from 'react-icons/ai'

export function NewTask() {
  return (
    <div className={styles.newTask}>
      <input type='text' placeholder='Adicione uma nova tarefa' />
      <button>
        Criar <AiOutlinePlusCircle />{' '}
      </button>
    </div>
  )
}
