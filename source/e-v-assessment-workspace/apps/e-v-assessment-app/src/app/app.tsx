// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import {LibAuth} from '@e-v-assessment-workspace/lib-auth';

export function App() {
  return (
    <>
    <LibAuth></LibAuth>
      <NxWelcome title="e-v-assessment-app" />
      <div />
    </>
  );
}

export default App;
