import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Document() {
  return (
    <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
          <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Slab:wght@700&display=swap" rel="stylesheet"></link>
          <script async src="https://kit.fontawesome.com/2f07fc999b.js" crossOrigin="anonymous"></script>
        </Head>
      <body>
        <Navbar />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  )
}
