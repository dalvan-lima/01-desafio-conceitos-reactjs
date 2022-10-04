import { Header } from './components/Header'
import { useState } from 'react'
import { NewTask } from './components/NewTask'
import { TasksList } from './components/TasksList'

import styles from './App.module.css'
import './global.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.wrapper}>
      <Header />
      <TasksList />
    </div>
  )
}

export default App
