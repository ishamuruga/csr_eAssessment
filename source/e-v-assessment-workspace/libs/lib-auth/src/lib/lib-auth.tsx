import styles from './lib-auth.module.css';
import vDoAuth from './auth/vAuth';

import Navbar from './ui/layout/navbar';
import fetch from './ui/layout/navbar-data';
import Message from './common/message/vdata-message';
import MessageService from './common/message/vdata-send-receive';

/* eslint-disable-next-line */
export interface LibAuthProps {}

function LibAuth(props: LibAuthProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to LibAuth! Super Duper1</h1>
    </div>
  );
}

export {LibAuth,vDoAuth,Navbar,Message,MessageService,fetch};
