'use client'; 

import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { useState } from 'react';
// This is a client component. It receives data as props and 
// has access to state and effects just like Page components 
// in the 'pages' directory. 

export default function HomePage({ recentPosts }) {
  const [pageIndex, setPageIndex] = useState(1);
  const postsCount = recentPosts.length;
  const pageCount = Math.floor((postsCount / 5)) + 1;

  const prevIsEnabled = pageIndex > 1 ? false : true;
  const nextIsEnabled = pageIndex < pageCount ? false : true;

  const posts = recentPosts.slice((pageIndex-1) * 5, pageIndex * 5);

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
        <br />
        Page {pageIndex} 
        <br />
        <button 
            className={utilStyles.button} 
            disabled={prevIsEnabled} 
            onClick={() => setPageIndex(pageIndex - 1)}> 
          ← Previous 
        </button>
        {"  "}  
        <button 
            className={utilStyles.button} 
            disabled={nextIsEnabled} 
            onClick={() => setPageIndex(pageIndex + 1)}> 
          Next →
        </button>
        <br />
        <br />
        <Link href={`/newpost/`} >New Post</Link>
      </section>
    </div>
  );
}
