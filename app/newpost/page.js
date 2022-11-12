// import your client component
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
import Date from '../../components/date';
// v9 compat packages are API compatible with v8 code
import { addPost, getPosts } from '../../firebase';


export default function Page() {

  return (
    <div>
      <h1>Add a new post...</h1>
    </div>
  );
}
