import styles from "./MainLeftSide.module.css";

export default function MainLeftSide({ children, className }) {
  return (
    <div className={`${styles.leftSide} ${className}`}>
      <div className={`${styles.rotatedContent} flex justify-end`}>
        {children}
      </div>
    </div>
  );
}
