'use client'; 

import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { useState } from 'react';
// This is a client component. It receives data as props and 
// has access to state and effects just like Page components 
// in the 'pages' directory. 

export default function HomePage({ recentPosts }) {
  const [ pageIndex, setPageIndex ] = useState(1);

  function handlePrevious() {
    setPageIndex(pageIndex - 1)
  }

  function handleNext() {
    setPageIndex(pageIndex + 1)
  }

  const posts = recentPosts.slice((pageIndex - 1) * 5, (pageIndex) * 5);

  return (
    <div>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Max. I'm a Software Engineer.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {posts.map(({ id, title, date }) => (
            <li className={utilStyles.listItem} key={title}>
              <Link href={`/${id}`} legacyBehavior>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <p>{date}</p>
              </small>
            </li>
          ))}
        </ul>
        <h3>Page: {pageIndex}</h3>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
        <br />
        <br />
        <Link href={`/newpost/`} legacyBehavior>New Post</Link>
      </section>
    </div>
  );
}
