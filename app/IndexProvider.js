'use client';

import { useState } from 'react';
import IndexContext from './IndexContext';

export default function IndexProvider({ children }) {
  const [pageIndex, setPageIndex] = useState(1);
  return (
    <IndexContext.Provider value={{ pageIndex, setPageIndex }}>
      {children}
    </IndexContext.Provider>
  );
}
