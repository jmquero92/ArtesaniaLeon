import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LanguageProvider } from '@/context/LanguageContext';
import AuthProvider from '@/context/AuthProvider'; // 👈 Importamos el provider

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tu Sitio',
  description: 'Descripción de tu sitio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <AuthProvider> {/* 🔐 Para gestionar sesiones de usuario */}
          <LanguageProvider> {/* 🌐 Para selector de idioma */}
            {children}
          </LanguageProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

