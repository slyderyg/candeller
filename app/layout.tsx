'use client'
import './globals.css'
import { ContextProvider } from './context/context'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ContextProvider>
        {children}
        </ContextProvider>
      </body>
    </html>
  )
}
