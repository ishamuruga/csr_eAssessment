import React from 'react'
import styles from './styles.module.css'
import vDoAuth from './components/vAuth';

import VButton from './components/VButton'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export {VButton,vDoAuth};