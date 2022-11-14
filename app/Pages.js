"use client"

export default function Pages({children}) {
  return (
    <div>
      <h1> {pageIndex} </h1>
      <button onClick={() => setPageIndex(pageIndex - 1)}>Previous</button>
      <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
    </div>
  );
}
