// import your client component
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';
// v9 compat packages are API compatible with v8 code
import { getPosts } from '../firebase';


export default async function Home() {
  const allPosts = await getPosts();

  return (
    <>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Max. I'm a Software Engineer.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPosts.map(({ id, title, content }) => (
            <li className={utilStyles.listItem} key={title}>
              <Link href={`/posts/${id}`} legacyBehavior>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <p>{content}</p>
              </small>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

