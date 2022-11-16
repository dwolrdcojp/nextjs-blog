// import your client component
import NewPost from './NewPost';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
// v9 compat packages are API compatible with v8 code


export default async function Page() {

  return (
    <div>
      <NewPost />
    </div>
  );
}
