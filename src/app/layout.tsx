import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cross Punt',
  description: 'Nieuwsmagazine over technologie, media en de stedelijke toekomst.',
  icons: {
    icon: '/brand/logo.svg'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
