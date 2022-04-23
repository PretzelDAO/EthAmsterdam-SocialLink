import Head from 'next/head'
import Image from 'next/image'
import ConnectButton from '../components/ConnectButton'
import MainPublication from '../components/MainPublication'
import { publications } from '../mockdata/mock_publication'
import styles from '../styles/Home.module.css'
import { tryContract } from '../utils/chain_utils'

export default function Home() {
  return (
    <div className="w-full flex justify-center flex-col">
      <div className="min-w-md max-w-[80vw] rounded-md overflow-hidden shadow-2xl w-5/6 m-2 bg-white flex flex-col items-center py-3">
        <span className="py-3">Welcome</span>
        <div className="font-light py-3">
          Social Link makes tansitioning to web3 easy. Build a social link you
          own on the fly by configuring your social bot here.
        </div>
        <ConnectButton />
      </div>
    </div>
  )
}
