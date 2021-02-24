import styles from './Button.module.css';

export default function Button({ name, btnHandler, list }) {
  const isActive = name === list;
  return (
    <button
      className={isActive ? `${styles.button} ${styles.active}` : styles.button}
      type="button"
      name={name}
      onClick={e => btnHandler(e)}
    />
  );
}
