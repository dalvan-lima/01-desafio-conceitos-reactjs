import { useState } from 'react'

import { TbCheck, TbTrash } from 'react-icons/tb'

import styles from './Task.module.css'

export function Task() {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <div className={styles.task}>
      <div
        onClick={() => {
          setIsChecked(!isChecked)
        }}
        className={isChecked ? styles.checked : styles.check}
      >
        {isChecked && <TbCheck />}
      </div>
      <label>Esta é uma nova task</label>
      <TbTrash cursor='pointer' color='#808080' size={20} />
    </div>
  )
}
