// import your client component
import HomePage from './HomePage';
// v9 compat packages are API compatible with v8 code
import { getPosts } from '../firebase';

export const revalidate = 0; 

async function getRecentPosts() {
  const recentPosts = await getPosts();
  return recentPosts;
}

export default async function Page() {

  // Fetch data directly in a server component 
  const recentPosts = await getRecentPosts();
  // Forward fetched data to your Client Component
  return <HomePage recentPosts={recentPosts} />

}

