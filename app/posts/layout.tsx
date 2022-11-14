import Link from 'next/link';
import styles from '../../components/layout.module.css';
import '../../styles/a11y-dark.css';

export default function PostLayout({ children }: {
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
