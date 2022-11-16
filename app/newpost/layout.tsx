import Link from 'next/link';
import styles from '../../styles/layout.module.css';

export default function NewPostLayout({ children }: {
children: React.ReactNode
}) {
  return (
      <section>
        {children}
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      </section>
    );
}
