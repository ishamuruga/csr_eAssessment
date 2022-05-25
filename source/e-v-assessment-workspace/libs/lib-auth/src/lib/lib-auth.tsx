import styles from './lib-auth.module.css';
import vDoAuth from './auth/vAuth';

import QueueManager from './message/queuemanager';
import EventType from './message/eventtype';
import TestUser from './model/testuser';

/* eslint-disable-next-line */
export interface LibAuthProps {}

function LibAuth(props: LibAuthProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to LibAuth! Super Duper1</h1>
    </div>
  );
}

export {LibAuth,vDoAuth,QueueManager,EventType,TestUser};
