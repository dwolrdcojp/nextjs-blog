// @refresh reset
'use client'; 
import { useState } from 'react';
// This is a client component. It receives data as props and 
// has access to state and effects just like Page components 
// in the 'pages' directory. 

export default function Button({ children }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      <button onClick={() => setIsClicked(true)}>Click Me</button>
      <p>{isClicked ? 'true' : 'false'}</p>
      {children}
    </div>
  );
}
