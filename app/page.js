// import your client component
import Home from './index.js';
import { getSortedPostsData } from '../lib/posts';

async function getPosts() {
  const res = await getSortedPostsData();
  return res;
}


export default async function Page() {
  // Fetch data directly in a Server Component
  const recentPosts = await getPosts();
  // Forward fetched data to your client component
  return <Home postData={recentPosts} />;
}
