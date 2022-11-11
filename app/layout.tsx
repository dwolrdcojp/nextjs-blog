// `pages/_app.js`
import '../styles/global.css';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../components/layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Max Schrementi';
export default function RootLayout({ children}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <div className={styles.container}>
      <header className={styles.header}>
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
      </header>
      <main>{children}</main>
    </div>
    </html>
  );
}
