import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fotolux Fotomatones',
  description: 'Crea recuerdos únicos. Haz de tu evento algo inolvidable con un toque especial y divertido.',
  icons: {
    icon: '/img/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}