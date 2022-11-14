'use client';
import { useEffect } from 'react';

import utilStyles from '../../styles/utils.module.css';
import hljs from 'highlight.js';

export default  function Post({ title, date, content }) {


  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <>
      <article>
        <h1 className={utilStyles.headingXl}>{title}</h1>
        <div className={utilStyles.lightText}>
          <p>{date}</p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: content }}/>
      </article>
    </>

  );
}
