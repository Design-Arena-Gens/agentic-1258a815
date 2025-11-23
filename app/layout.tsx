import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bodybuilding Program - Muscle Growth & Strength Training',
  description: 'Professional bodybuilding workout program designed to increase muscle mass and strength',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
