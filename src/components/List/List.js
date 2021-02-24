import styles from './List.module.css';

export default function List({ endpoint }) {
  const { items, title } = endpoint;
  return (
    <ul className={styles.list}>
      {items.map(({ method, path, label, req }) => (
        <li key={path} className={styles.item}>
          <h3 className={styles.label}>{label}</h3>
          <p>
            <span className={styles.span}>{method.toUpperCase()} </span>/{title}
            {path}
          </p>
          {req && (
            <p>
              <strong>req:</strong>
              <br />
              {req}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}
