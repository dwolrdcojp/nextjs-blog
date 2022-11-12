import Image from 'next/image';
import Link from 'next/link';
import styles from '../components/layout.module.css';
import utilStyles from '../styles/utils.module.css';
import '../styles/global.css';

const name = 'Max Schrementi';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <div className={styles.container}>.
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
        {children}
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      </div>
      </body>
    </html>
  );
}
