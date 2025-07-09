import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { LanguageProvider } from '@/context/LanguageContext'
import AuthProvider from '@/context/AuthProvider'

// 👇 Importa los componentes
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tu Sitio',
  description: 'Descripción de tu sitio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <AuthProvider>
          <LanguageProvider>
            {/* 🧭 Navbar global */}
            <Navbar />

            {/* 🔽 Contenido de cada página */}
            {children}

            {/* 📦 Footer global */}
            <Footer />
          </LanguageProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
