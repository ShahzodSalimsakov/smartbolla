import styles from './MainLeftSide.module.css'

export default function MainLeftSide({children}) {
  return (
      <div className={styles.leftSide}>
        <div className={styles.rotatedContent}>
          {children}
        </div>
      </div>
  )
}