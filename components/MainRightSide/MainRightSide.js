import styles from './MainRightSide.module.css'

export default function MainRightSide({children}) {
    return (
        <div className={styles.rightSide}>
            {children}
        </div>
    )
}