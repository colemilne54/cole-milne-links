import './globals.css'

export const metadata = {
  title: 'Cole Milne Links',
  description: "Links for Cole Milne's software development projects",
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
