import utilStyles from '../../../styles/utils.module.css';
import Link from 'next/link';
import { getPostIds, getPostData } from '../../../firebase';
import { remark } from 'remark';
import html from 'remark-html';

const dynamicsParams = true;

export async function generateStaticParams() {
  const posts = await getPostIds();
  return posts;
}

async function getPost(params) {
  const res = getPostData(params.id);
  return res;
}

// Use remark to convert markdown into HTML string 

export default async function Post({ params }) {
  const post = await getPost(params);
  const processedContent = await remark()
    .use(html)
    .process(post.content);
  const contentHtml = processedContent.toString();
  
  const date = post.date.toDate().toLocaleDateString();

  return (
    <>
      <article>
        <h1 className={utilStyles.headingXl}>{post.title}</h1>
        <div className={utilStyles.lightText}>
          <p>{date}</p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }}/>
      </article>
    </>

  );
}
