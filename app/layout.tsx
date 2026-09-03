import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Project 1788412935117',
  description: 'PlantHub is a Spanish-language e-commerce platform for indoor plants combining a public storefront with product catalog and an admin dashboard for inventory management, featuring plant-specific care instructions and seasonal tracking.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#F9F7F4', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
