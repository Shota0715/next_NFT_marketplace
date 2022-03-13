/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto bg-gray-800">
      <Head>
        <title>Miguel’s NFT market</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#0042a1" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
        <header className="flex justify-between items-center py-4 md:py-8">
          <Link href="/">
            <a className="inline-flex items-center text-white text-2xl md:text-3xl font-bold gap-2.5" aria-label="logo">
              Miguel’s NFT Store
            </a>
          </Link>

          <nav className="hidden lg:flex gap-12">
            <Link href="/">
              <a className="text-white hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">
                買う
              </a>
            </Link>
            <Link href="/create-nft">
              <a className="text-white hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">
                売る
              </a>
            </Link>
            <Link href="/my-nfts">
              <a className="text-white hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">
                My NFTs
              </a>
            </Link>
            <Link href="/dashboard">
              <a className="text-white hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">
                出品中
              </a>
            </Link>
            <Link href="/tutorial">
              <a className="text-white hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">
                はじめに
              </a>
            </Link>
          </nav>
        </header>
      </div>
      <div className="visible md:invisible">
        <nav className="p-6 bg-gray-800">
          <div className="flex mt-4">
            <Link href="/">
              <a className="mr-6 text-white font-semibold">
                買う
              </a>
            </Link>
            <Link href="/create-nft">
              <a className="mr-6 text-white font-semibold">
                売る
              </a>
            </Link>
            <Link href="/my-nfts">
              <a className="mr-6 text-white font-semibold">
                My NFTs
              </a>
            </Link>
            <Link href="/dashboard">
              <a className="mr-6 text-white font-semibold">
                出品中
              </a>
            </Link>
            <Link href="/tutorial">
              <a className="mr-6 text-white font-semibold">
                はじめに
              </a>
            </Link>
          </div>
        </nav>
      </div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp