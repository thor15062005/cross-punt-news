import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import Editor from './editor';

export default function KeystaticLayout({ children }: { children: ReactNode }) {
  if (process.env.NODE_ENV === 'production') notFound();

  return <><Editor />{children}</>;
}
