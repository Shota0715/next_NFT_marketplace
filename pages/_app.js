/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <header className="flex justify-between items-center py-4 md:py-8">
          <Link href="/">
            <a className="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5" aria-label="logo">
              Miguel’s NFT Store
            </a>
          </Link>

          <nav className="hidden lg:flex gap-12">
            <Link href="/">
              <a className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">
                買う
              </a>
            </Link>
            <Link href="/create-nft">
              <a className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">
                売る
              </a>
            </Link>
            <Link href="/my-nfts">
              <a className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">
                My NFTs
              </a>
            </Link>
            <Link href="/dashboard">
              <a className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">
                出品中
              </a>
            </Link>
          </nav>
        </header>
      </div>
      {/* <nav className="border-b p-6">
        <p className="text-4xl font-bold">NFT Marketplace</p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-black-500">
              Buy
            </a>
          </Link>
          <Link href="/create-nft">
            <a className="mr-6 text-black-500">
              Sell
            </a>
          </Link>
          <Link href="/my-nfts">
            <a className="mr-6 text-black-500">
              My NFTs
            </a>
          </Link>
          <Link href="/dashboard">
            <a className="mr-6 text-black-500">
              Dashboard
            </a>
          </Link>
        </div>
      </nav> */}
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp