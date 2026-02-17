import type { Metadata, Viewport } from 'next'

import './globals.css'
import { AuthProvider } from './auth-context'
import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
  title: 'JusticeAI - Legal First-Aid for Indian Citizens',
  description: 'Get instant legal guidance on Indian law powered by AI. Ask questions in English or Hindi, get structured legal analysis, risk assessment, and actionable next steps.',
  generator: 'JusticeAI',
  keywords: ['legal AI', 'Indian law', 'legal advice', 'JusticeAI', 'legal first aid', 'Hindi legal'],
}

export const viewport: Viewport = {
  themeColor: '#0f172a',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AuthProvider>
          {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  )
}
