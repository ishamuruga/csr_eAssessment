import styles from './lib-auth.module.css';

/* eslint-disable-next-line */
export interface LibAuthProps {}

export function LibAuth(props: LibAuthProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to LibAuth! Super Duper</h1>
    </div>
  );
}

export default LibAuth;
