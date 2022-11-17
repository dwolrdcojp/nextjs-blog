import Link from 'next/link';
import styles from '../../styles/layout.module.css';
import Providers from '../Provider'

export default function NewPostLayout({ children }: {
children: React.ReactNode
}) {
  return (
      <section>
        <Providers>
          {children}
        </Providers>
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      </section>
    );
}
