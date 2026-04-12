import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Fotolux Fotomatones | Alquiler de Fotomatón para Bodas y Eventos',
  description: 'Alquiler de fotomatón premium para bodas y eventos en España. Crea recuerdos únicos con Fotolux. Personalización total con neones, atrezzo y álbum de firmas.',
  keywords: ['fotomatón bodas', 'alquiler fotomatón', 'fotomatón para eventos', 'fotomatón fiestas', 'plataforma 360', 'Fotolux España'],
  metadataBase: new URL('https://fotoluxfotomatones.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Fotolux Fotomatones | Alquiler de Fotomatón para Bodas y Eventos',
    description: 'Servicio premium de fotomatón. Calidad, diversión y recuerdos impresos al instante para tu evento.',
    url: 'https://fotoluxfotomatones.com',
    siteName: 'Fotolux Fotomatones',
    images: [
      {
        url: '/img/logo.png',
        width: 1200,
        height: 630,
        alt: 'Fotolux Fotomatones - Eventos Inolvidables',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fotolux Fotomatones',
    description: 'Crea recuerdos únicos en tu boda o evento con Fotolux.',
    images: ['/img/logo.png'],
  },
  icons: {
    icon: '/img/logo.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': 'Fotolux Fotomatones',
  'image': 'https://fotoluxfotomatones.com/img/logo.png',
  '@id': 'https://fotoluxfotomatones.com',
  'url': 'https://fotoluxfotomatones.com',
  'telephone': '+34685977198',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': '',
    'addressLocality': '',
    'addressRegion': '',
    'postalCode': '',
    'addressCountry': 'ES'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 40.416775,
    'longitude': -3.703790
  },
  'openingHoursSpecification': {
    '@type': 'OpeningHoursSpecification',
    'dayOfWeek': [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ],
    'opens': '00:00',
    'closes': '23:59'
  },
  'sameAs': [
    'https://instagram.com/fotoluxfotomatones'
  ]
};

import Footer from './components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body id="top">
        {children}
        <Footer />
      </body>
    </html>
  );
}