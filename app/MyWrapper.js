'use client';

export default function MyWrapper({ children }) {
  return (
    <>
      <h1>wrapper</h1>
      {children}
    </>
  );
}
