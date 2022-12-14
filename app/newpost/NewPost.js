'use client';
import LoginButton from '../login-btn';
import { useState } from 'react'; // This is a client component. It receives data as props and 
import { addPost } from '../../firebase';
// has access to state and effects just like Page components 
// in the 'pages' directory. 

async function addNewPost(title, content) {
  const addNewPost = await addPost(title, content);
}

export default function NewPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isPublished, setIsPublished] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    addNewPost(title, content);
    setTitle('');
    setContent('');
    setIsPublished(true);
  }

  return (
    <div>
      <LoginButton>
        <h1>Add a new post...</h1>
        Title:
        <input value={title}
               onChange={(e) => setTitle(e.target.value)}></input>
        <br />
        Content:
        <textarea style={{whiteSpace: 'pre-wrap'}} value={content}
               onChange={(e) => setContent(e.target.value)}></textarea>
        <br />
        <button onClick={handleClick}>Publish</button>
        {isPublished && (
          <h2>New post published!</h2>
        )}


        <h1> Preview Post: </h1>
        <h2> {title} </h2>
        <p> {content} </p>
      </LoginButton>
    </div>
  );
}
