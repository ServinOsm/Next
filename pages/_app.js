import '../styles/globals.css'
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Link href='/'>Home</Link>
      <br />
      <br />
      <Link href='/news'>News</Link>
      <br />
      <br />
      <Link href='/about'>About</Link>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
