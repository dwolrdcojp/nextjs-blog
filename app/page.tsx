// import your client component
import HomePage from './HomePage';
// v9 compat packages are API compatible with v8 code
// comment

type Props = {
  params?: {
    num?: string;
  };
  searchParams?: {
    page?: string;
  };
};

async function getRecentPosts(page) {
  const pageNum = page ? page : 1;
  const recentPosts = await fetch(`https://nextjs-blog-m3oww66ja-dwolrdcojp.vercel.app/api/posts`);

  if (!recentPosts.ok) {
    throw new Error('Failed to fetch data');
  }

  return recentPosts.json();
}

export default async function Page(props: Props) {
  // Fetch data directly in a server component 
  const recentPosts = await getRecentPosts(props.searchParams.page);
  // Forward fetched data to your Client Component
  return (
    <>
      <HomePage searchParams={props.searchParams} 
                recentPosts={recentPosts} />
    </>
  );

}

