import Link from 'next/link';
import Content from './Content';
import { getPostIds, getPostData } from '../../firebase';
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
      <Content title={post.title} date={date} content={contentHtml} />
    </>

  );
}
