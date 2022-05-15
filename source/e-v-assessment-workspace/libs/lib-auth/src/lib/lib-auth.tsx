import styles from './lib-auth.module.css';
import vDoAuth from './auth/vAuth';

import Navbar from './ui/layout/navbar';

/* eslint-disable-next-line */
export interface LibAuthProps {}

function LibAuth(props: LibAuthProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to LibAuth! Super Duper1</h1>
    </div>
  );
}

export {LibAuth,vDoAuth,Navbar};
