import { getAllPostIds, getPostData } from '../../../lib/posts';
import utilStyles from '../../../styles/utils.module.css';
import Date from '../../../components/date';
import Link from 'next/link';

export const dynamicsParams = true;

export async function generateStaticParams() {
  const res = await getAllPostIds();
  return res;
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
          <Date dateString={post.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
      <Link className={utilStyles.headingMd} href={`/`}>Back to home</Link>
    </>

  );
}
