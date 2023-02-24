import React from 'react'
import styles from './list.module.scss'

export const List = ({ texts }) => {
  return (
    <div className={styles.list}>
      {texts.map((text, index) => <div className={styles.listElement} key={index}>{text}</div>)}
    </div>
  )
}