'use client';

import { SessionProvider } from 'next-auth/react';
import Component from './login-btn';

export default function Providers({children}) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}
