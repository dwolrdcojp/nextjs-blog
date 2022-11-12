'use client'; 

import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';

// This is a client component. It receives data as props and 
// has access to state and effects just like Page components 
// in the 'pages' directory. 

export default function HomePage({ recentPosts }) {
  return (
    <div>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Max. I'm a Software Engineer.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {recentPosts.map(({ id, title, content }) => (
            <li className={utilStyles.listItem} key={title}>
              <Link href={`/posts/${id}`} legacyBehavior>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <p>{content}</p>
              </small>
            </li>
          ))}
        </ul>
        <br />
        <br />
        <Link href={`/newpost/`} legacyBehavior>New Post</Link>
      </section>
    </div>
  );
}
