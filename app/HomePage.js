'use client'; 

import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { useState } from 'react';
// This is a client component. It receives data as props and 
// has access to state and effects just like Page components 
// in the 'pages' directory. 

export default function HomePage({ recentPosts }) {
  const [pageIndex, setPageIndex] = useState(1);
  const [posts, setPosts] = useState(recentPosts);
  const [search, setSearch] = useState('');
  const postsCount = recentPosts.length;
  const pageCount = Math.floor((postsCount / 5)) + 1;

  const prevIsEnabled = pageIndex > 1 ? false : true;
  const nextIsEnabled = pageIndex < pageCount ? false : true;

  const fivePosts = posts.slice((pageIndex-1) * 5, pageIndex * 5);
  console.log(posts);


  function handleChange(event) {
    const searchedPosts = posts.filter((post) => {
      return post.title.toLowerCase().includes(event.target.value.toLowerCase())}
    )
    if (searchedPosts !== null) {
      setPosts(searchedPosts)
    }
    setSearch(event.target.value);
    if (event.target.value === '') {
      setPosts(recentPosts)
    }
  }

  return (
    <div>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Max. I'm a Software Engineer.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <div className={utilStyles.posts}>
          <ul className={utilStyles.list}>
            {fivePosts && fivePosts.map(({ id, title, date }) => (
              <li className={utilStyles.listItem} key={title}>
                <Link href={`/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  <p>{date}</p>
                </small>
              </li>
            ))}
          </ul>
        </div>
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
        {"  "}  
        <input 
            className={utilStyles.search} 
            placeholder='Search posts...' 
            value={search} 
            onChange={handleChange}></input>
        <br />
        <Link href={`/newpost/`} >New Post</Link>
      </section>
    </div>
  );
}
