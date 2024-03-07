import styles from './index.module.css';

export default function Icon ({ type, className }) {
  let classIcon = `${styles['icon']} ${styles['icon-'+type]}`;
  if (className) classIcon += ` ${className}`;
  return <div className={classIcon}></div>;
}
