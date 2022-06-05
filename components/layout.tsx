import styles from './layout.module.scss'

export default function Layout({ children }: any) {

  return (
    <div className={styles.container}>
      <h1>This is a new page</h1>
      <div className={styles.main}>{children}</div>
    </div>
  )
}
