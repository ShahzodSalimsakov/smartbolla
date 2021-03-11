import styles from "./MainRightSide.module.css";

export default function MainRightSide({ children, className }) {
  return <div className={`${styles.rightSide} ${className}`}>{children}</div>;
}
