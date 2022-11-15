// import your client component
import HomePage from './HomePage';
// v9 compat packages are API compatible with v8 code


async function getRecentPosts(page) {
  
  const pageNum = page ? page : 1;
  const recentPosts = await fetch(`http://localhost:3000/api/posts?page=${pageNum}`);

  if (!recentPosts.ok) {
    throw new Error('Failed to fetch data');
  }

  return recentPosts.json();
}

export default async function Page({ searchParams }) {
  // Fetch data directly in a server component 
  const recentPosts = await getRecentPosts(searchParams.page);
  // Forward fetched data to your Client Component
  return (
    <>
      <HomePage searchParams={searchParams} 
                recentPosts={recentPosts} />
    </>
  );

}

