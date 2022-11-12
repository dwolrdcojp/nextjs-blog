'use client';
import { useState } from 'react'; // This is a client component. It receives data as props and 
// has access to state and effects just like Page components 
// in the 'pages' directory. 

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}
