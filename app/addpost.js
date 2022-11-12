import { addPost } from '../firebase';

export default function Counter() {

  function handleClick() {
    addPost();
  }

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
