import styles from "./Input.module.css";

const Input = ({ label, type, name }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>{label}</label>
      <input id={name} className={styles.input} type={type} name={name} />
      <p className={styles.error}>error</p>
    </div>
  );
};

export default Input;
