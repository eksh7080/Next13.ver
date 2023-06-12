import Header from '@/components/Header'
import './global.css'

export const metadata = {
  title: 'INVU',
  description: 'APP',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
          {/* Header */}
          <Header />

          {/* Navbar */}

          {/* SearchBox */}

        {children}
      </body>
    </html>
  )
}
