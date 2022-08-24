import { memo } from 'react'
import GitHub from './GitHub_Logo.png'
import styles from './Header.module.scss'

export default memo(function Header(p: { title: string }) {
  return (
    <header className={styles.container}>
      <a className={styles.githubButton} href="https://github.com/pavelgorbach/calculator" target="blank">
        <img src={GitHub} alt="GitHub" />  
      </a>
      <h1>{p.title}</h1>
    </header>
  )
})