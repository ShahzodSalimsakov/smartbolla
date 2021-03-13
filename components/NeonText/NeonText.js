import styles from "./NeonText.module.css";
export default function NeonText({ text }) {
  return (
    <h1 className={styles.neon} data-text={text}>
      {text}
    </h1>
  );
}
