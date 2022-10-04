import { useState, useEffect } from 'react'
import { TaskProps } from './TasksList'

import { TbCheck, TbTrash } from 'react-icons/tb'

import styles from './Task.module.css'

interface Props {
  id: number
  description: string
  done: boolean
  setTasks: any
  tasks: TaskProps[]
}

export function Task({ id, description, done, setTasks, tasks }: Props) {
  const [isChecked, setIsChecked] = useState<boolean>()

  useEffect(() => {
    setIsChecked(done)
  }, [done])

  function handleDeleteTask() {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== id
    })

    setTasks(tasksWithoutDeletedOne)
  }

  function handleCheckTodo() {
    let newTaskArr = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, done: !task.done }
      }
      return task
    })

    newTaskArr = newTaskArr.sort((a, b) => {
      if (a.done && !b.done) return 1
      if (!a.done && b.done) return -1
      if (!a.done && !b.done) {
        if (a.id > b.id) return 1
        if (a.id < b.id) return -1
      }
      if (a.done && b.done) {
        if (a.id > b.id) return 1
        if (a.id < b.id) return -1
      }

      return 0
    })

    setTasks(newTaskArr)
    setIsChecked(!isChecked)
  }

  return (
    <div className={styles.task}>
      <div
        onClick={handleCheckTodo}
        className={isChecked ? styles.checked : styles.check}
      >
        {isChecked && <TbCheck />}
      </div>
      <label className={`${isChecked && styles.descriptionChecked}`}>
        {description}
      </label>
      <TbTrash onClick={handleDeleteTask} className={styles.icon} size={20} />
    </div>
  )
}
