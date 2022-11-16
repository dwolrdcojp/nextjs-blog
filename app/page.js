// import your client component
import HomePage from './HomePage';
import { getPosts } from '../firebase';
// v9 compat packages are API compatible with v8 code

export const revalidate = 60; // revalidate every 60 seconds

async function getRecentPosts() {
  const recentPosts = await getPosts();

  return recentPosts;
}

export default async function Page() {
  // Fetch data directly in a server component 
  const recentPosts = await getRecentPosts();
  // Forward fetched data to your Client Component
  return (
    <>
      <HomePage recentPosts={recentPosts} />
    </>
  );

}

