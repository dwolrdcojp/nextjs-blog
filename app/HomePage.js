'use client'; 

import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { useState } from 'react';
// This is a client component. It receives data as props and 
// has access to state and effects just like Page components 
// in the 'pages' directory. 

export default function HomePage({ searchParams, recentPosts }) {
  const [pageIndex, setPageIndex] = useState(1);

  const posts = recentPosts;
  const postsLength = posts.length;

  const pageNums = postsLength / 5;
  const nextVisible = postsLength < 5 ? false : true;
  const nextPage = searchParams.page ? (searchParams.page * 1) + 1 : 2;
  const prevPage = (searchParams.page * 1) - 1;
  console.log(nextVisible);

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
        {(pageIndex < 2) ? " ← Previous " : (pageIndex > 1) &&
        <Link href={`/?page=${pageIndex - 1}`}
              onClick={() => setPageIndex(pageIndex -1)}>← Previous </Link>}
        {!nextVisible ? " Next →" : nextVisible &&
        <Link href={`/?page=${pageIndex + 1}`}
              onClick={() => setPageIndex(pageIndex + 1)}> Next →</Link>}
        <br />
        <br />
        <Link href={`/newpost/`} >New Post</Link>
      </section>
    </div>
  );
}
