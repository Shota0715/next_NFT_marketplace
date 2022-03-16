import Image from 'next/image'
import { useEffect} from 'react'
import tocbot from 'tocbot'
import Link from 'next/link'
import Head from 'next/head'

export default function Tutorial() {
    useEffect(() => {
        tocbot.init({
          tocSelector: '.table',
          contentSelector: '.tutorial',
          headingSelector: 'h2',
        })
    
        return () => tocbot.destroy()
      }, [])
  return (
    <div>
        <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tocbot/4.11.1/tocbot.css"/ >
        </Head>
        <div className="p-4">
            <a href="https://metamask.io/" className="text-2lg text-red-600 px-5 pb-8">※すべての機能を使うにはMETAMASKが必要です。</a>
            <h2 id="1" className="text-2xl px-5 pb-4">目次</h2>
            <nav className="table " />
        </div>
        <div className='tutorial'>
            <div className="p-4">
                <h2 id="1" className="text-2xl px-5 pb-4">・PCの場合</h2>
                    <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
                        <div className="h-64 w-96 rounded-xl relative border-solid border border-gray-600">
                            <Image className="rounded-xl" layout="fill" objectFit="cover" src="/images/pc1.png" alt=""/>
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <p className="mb-8 leading-relaxed">
                                メタマスクを拡張機能として追加すると、Chrome右上のパズルピースのマークからメタマスクのウィンドウを表示できます。
                            </p>
                        </div>
                    </div>
                    <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
                        <div className="h-64 w-96 rounded-xl relative border-solid border border-gray-600">
                            <Image className="rounded-xl" layout="fill" objectFit="cover" src="/images/pc2.png" alt=""/>
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <p className="mb-8 leading-relaxed">
                                メタマスク上部のボタンを押すと、ネットワークが選択できます。<br/>
                                一覧から「Rinkeby テストネットワーク」を選択します。
                            </p>
                        </div>
                    </div>
                    <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
                        <div className="h-64 w-96 rounded-xl relative border-solid border border-gray-600">
                            <Image className="rounded-xl" layout="fill" objectFit="cover" src="/images/pc3.png" alt=""/>
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <p className="mb-8 leading-relaxed">
                                メタマスクのウィンドウを閉じ、本ページ「My NFTs」や「出品中」等何らかのアクションを起こすとメタマスクとの接続が始まります。<br/>
                                該当アカウントを選択後、次へを押します。
                            </p>
                        </div>
                    </div>
                    <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
                        <div className="h-64 w-96 rounded-xl relative border-solid border border-gray-600">
                            <Image className="rounded-xl" layout="fill" objectFit="cover" src="/images/pc4.png" alt=""/>
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <p className="mb-8 leading-relaxed">
                                そのまま接続ボタンを押して完了です。
                            </p>
                        </div>
                    </div>
            </div>
            <div className="p-4">
                <h2 id="2" className="text-2xl px-5 pb-4">・Mobileの場合</h2>
                    <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
                        <div className="h-96 w-60 rounded-xl relative border-solid border border-gray-600">
                            <Image className="rounded-xl" layout="fill" objectFit="cover" src="/images/mobile1.jpg" alt=""/>
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <p className="mb-8 leading-relaxed">
                                メタマスクのアプリをインストール、起動します。
                            </p>
                        </div>
                    </div>
                    <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
                        <div className="h-96 w-60 rounded-xl relative border-solid border border-gray-600">
                            <Image className="rounded-xl" layout="fill" objectFit="cover" src="/images/mobile2.jpg" alt=""/>
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <p className="mb-8 leading-relaxed">
                                上部の「ウォレット」と書かれた箇所を押すと、ネットワークが選択できます。<br/>
                                一覧から「Rinkeby Test Network」を選択します。
                            </p>
                        </div>
                    </div>
                    <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
                        <div className="h-96 w-60 rounded-xl relative border-solid border border-gray-600">
                            <Image className="rounded-xl" layout="fill" objectFit="cover" src="/images/mobile3.jpg" alt=""/>
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <p className="mb-8 leading-relaxed">
                                アプリサイドメニューよりブラウザーを開きます。
                            </p>
                        </div>
                    </div>
                    <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
                        <div className="h-96 w-60 rounded-xl relative border-solid border border-gray-600">
                            <Image className="rounded-xl" layout="fill" objectFit="cover" src="/images/mobile4.jpg" alt=""/>
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <p className="mb-8 leading-relaxed">
                                本サイトにアクセスします。
                            </p>
                            <a href="https://next-nft-marketplace.vercel.app/" className="mb-8 leading-relaxed text-blue-600">https://next-nft-marketplace.vercel.app/</a>
                        </div>
                    </div>
                    <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
                        <div className="h-96 w-60 rounded-xl relative border-solid border border-gray-600">
                            <Image className="rounded-xl" layout="fill" objectFit="cover" src="/images/mobile5.jpg" alt=""/>
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <p className="mb-8 leading-relaxed">
                                本ページ「My NFTs」や「出品中」等何らかのアクションを起こすとメタマスクとの接続が始まります。
                            </p>
                        </div>
                    </div>
                    <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
                        <div className="h-96 w-60 rounded-xl relative border-solid border border-gray-600">
                            <Image className="rounded-xl" layout="fill" objectFit="cover" src="/images/mobile6.jpg" alt=""/>
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <p className="mb-8 leading-relaxed">
                                そのまま接続ボタンを押して完了です。
                            </p>
                        </div>
                    </div>
            </div>
            <div className="p-4">
                <h2 id="3" className="text-2xl px-5 pb-4">・Rinkebyの無料チャージ方法</h2>
                    <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
                        <div className="h-96 w-60 rounded-xl relative border-solid border border-gray-600">
                            <Image className="rounded-xl" layout="fill" objectFit="cover" src="/images/faucet1.png" alt=""/>
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <p className="mb-8 leading-relaxed">
                                Rinkebyネットワークを選択した状態で、購入ボタンからチャージも可能ですが、少し手間がかかるので別の方法をご紹介します。
                            </p>
                        </div>
                    </div>
                    <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
                        <div className="h-64 w-96 rounded-xl relative border-solid border border-gray-600">
                            <Image className="rounded-xl" layout="fill" objectFit="cover" src="/images/faucet2.png" alt=""/>
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <p className="mb-8 leading-relaxed">
                                下記のサイトにアクセスします。
                            </p>
                            <a href="https://faucet.rinkeby.io/" className="mb-8 leading-relaxed text-blue-600">https://faucet.rinkeby.io/</a>
                        </div>
                    </div>
                    <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
                        <div className="h-64 w-96 rounded-xl relative border-solid border border-gray-600">
                            <Image className="rounded-xl" layout="fill" objectFit="cover" src="/images/faucet3.png" alt=""/>
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <p className="mb-8 leading-relaxed">
                                自分のメタマスクのアドレスをtwitterもしくはfacebookで投稿します。
                            </p>
                        </div>
                    </div>
                    <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
                        <div className="h-64 w-96 rounded-xl relative border-solid border border-gray-600">
                            <Image className="rounded-xl" layout="fill" objectFit="cover" src="/images/faucet4.png" alt=""/>
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <p className="mb-8 leading-relaxed">
                                投稿のURLを先程のページのフォームに入力後、3ETH・7.5ETH・18.75ETHからお好きな量を選択したら完了。<br/>
                                反映まで時間がかかる場合があります。
                            </p>
                        </div>
                    </div>
            </div>
            <div className="p-4">
                <h2 id="4" className="text-2xl px-5 pb-4">・所有しているNFTの確認方法</h2>
                    <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
                        <div className="h-96 w-60 rounded-xl relative border-solid border border-gray-600">
                            <Image className="rounded-xl" layout="fill" objectFit="cover" src="/images/check1.jpg" alt=""/>
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <p className="mb-8 leading-relaxed text-red-600">
                                ※テストネットにおけるPCでの簡易的な表示方法は現在ありませんでした。<br/>
                                ※所有しているNFTを鑑賞する場合はスマホもしくは本サイトにてお願いいたします。
                            </p>
                            <p className="mb-8 leading-relaxed">
                                アプリサイドメニューより「Etherscanで表示」を開きます。
                            </p>
                        </div>
                    </div>
                    <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
                        <div className="h-96 w-60 rounded-xl relative border-solid border border-gray-600">
                            <Image className="rounded-xl" layout="fill" objectFit="cover" src="/images/check2.jpg" alt=""/>
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <p className="mb-8 leading-relaxed">
                                ページが開いたら、下部のタブから「Erc721 Token Txns」を選択します。<br/>
                                表の中の「To」付近に「IN」と表示されている行を確認してください。<br/>
                                見つけたら、「To」の隣の「Token ID」の列にある、該当の数字をタップします。
                            </p>
                        </div>
                    </div>
                    <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
                        <div className="h-96 w-60 rounded-xl relative border-solid border border-gray-600">
                            <Image className="rounded-xl" layout="fill" objectFit="cover" src="/images/check3.jpg" alt=""/>
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <p className="mb-8 leading-relaxed">
                                開いたページより、「TokenID」と「Contract」をメモしてください。
                            </p>
                        </div>
                    </div>
                    <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
                        <div className="h-96 w-60 rounded-xl relative border-solid border border-gray-600">
                            <Image className="rounded-xl" layout="fill" objectFit="cover" src="/images/check4.jpg" alt=""/>
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <p className="mb-8 leading-relaxed">
                                メタマスクアプリのTopページに戻り、NFTタブ→「NFTを追加」をタップします。
                            </p>
                        </div>
                    </div>
                    <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
                        <div className="h-96 w-60 rounded-xl relative border-solid border border-gray-600">
                            <Image className="rounded-xl" layout="fill" objectFit="cover" src="/images/check5.jpg" alt=""/>
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <p className="mb-8 leading-relaxed">
                                「アドレス」に先程メモした「Contract」(文字数が多いほう)、<br/>
                                「ID」には「TokenID」を入力し、追加ボタンをタップします。
                            </p>
                        </div>
                    </div>
                    <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
                        <div className="h-96 w-60 rounded-xl relative border-solid border border-gray-600">
                            <Image className="rounded-xl" layout="fill" objectFit="cover" src="/images/check6.jpg" alt=""/>
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <p className="mb-8 leading-relaxed">
                                無事NFTが表示されました！<br/>
                                お疲れ様でした。
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}