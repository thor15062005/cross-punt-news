import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { isKeystaticAvailable } from '@/keystatic/availability';
import Editor from './editor';

export default function KeystaticLayout({ children }: { children: ReactNode }) {
  if (!isKeystaticAvailable()) notFound();

  return <><Editor />{children}</>;
}
