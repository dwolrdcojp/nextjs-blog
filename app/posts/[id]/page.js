import utilStyles from '../../../styles/utils.module.css';
import Date from '../../../components/date';
import Link from 'next/link';
import { getPostIds, getPostData } from '../../../firebase';

const dynamicsParams = true;

export async function generateStaticParams() {
  const posts = await getPostIds();
  return posts;
  
}

async function getPost(params) {
  const res = getPostData(params.id);
  return res;
}

export default async function Post({ params }) {
  const post = await getPost(params);
  
  return (
    <>
      <article>
        <h1 className={utilStyles.headingXl}>{post.title}</h1>
        <div className={utilStyles.lightText}>
          <p>{post.content}</p>
        </div>
      </article>
      <Link className={utilStyles.headingMd} href={`/`}>Back to home</Link>
    </>

  );
}
