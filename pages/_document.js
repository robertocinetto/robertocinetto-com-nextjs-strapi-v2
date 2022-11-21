import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='scroll-smooth'>
      <Head>
        <link href='https://fonts.googleapis.com/css2?family=Dosis:wght@400;600&display=swap' rel='stylesheet' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
