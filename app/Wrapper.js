"use client"
import { useState } from 'react';
import { HomePage } from './HomePage';

export default function Wrapper({ recentPosts }) {
  const [ pageIndex, setPageIndex ] = useState(1);

  function handlePrevious() {
    setPageIndex(pageIndex - 1)
  }

  function handleNext() {
    setPageIndex(pageIndex + 1)
  }

  return (
    <div>
      <h1> {pageIndex} </h1>
      {recentPosts}
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}
