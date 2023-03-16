import './globals.css'

export const metadata = {
  title: 'Kuda | The Money App for Africans | Open an Account in Minutes',
  description: 'content="Kuda, the money app for Africans licensed by the CBN. Zero maintenance fees, free transfers, automatic savings & investments. Join Kuda today!"',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
