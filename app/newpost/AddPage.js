// import your client component
// v9 compat packages are API compatible with v8 code
import { addPost, getPosts } from '../../firebase';


export default async function AddPage() {
  const newPost = await addPost();

  return (
    <div>
      <h1>Added a new post...</h1>
    </div>
  );
}
