import Head from 'next/head';
import { Navbar } from '../Navbar';

import styles from './MainLayout.module.css';

export const MainLayout = ({ children }: any) => {
  return (
    <div>
      <Head>
        <title>Home - José Espíritu</title>
        <meta name='description' content='Home Page' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <main className={styles.main}>{children}</main>
    </div>
  );
};
