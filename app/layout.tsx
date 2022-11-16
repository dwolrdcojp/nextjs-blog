import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/layout.module.css';
import utilStyles from '../styles/utils.module.css';
import '../styles/global.css';

const name = 'Max Schrementi';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <div className={styles.container}>
        <header className={styles.header}>
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt=""
              />
            </Link>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        </header>
        {children}
      </div>
      </body>
    </html>
  );
}
