import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import ConnectButton from '../components/ConnectButton'
import MainPublication from '../components/MainPublication'
import UserContext from '../contexts/UserContext'
import { publications } from '../mockdata/mock_publication'
import styles from '../styles/Home.module.css'
import { tryContract } from '../utils/chain_utils'

export default function Home() {
  const global = useContext(UserContext)
  const router = useRouter()
  console.log('get on it', global.user);
  if (global.user) {
    router.push('/botconfig')
  }

  return (
    <div className="w-full flex justify-center my-40">
      <div className="min-w-md max-w-[50vw] rounded-md overflow-hidden shadow-2xl w-5/6 bg-white flex flex-col items-center py-12">
        <span className="text-xl">Welcome!</span>
        <div className="font-light py-10 max-w-[40vw] text-center text-lg">
          Social Link makes tansitioning to web3 easy. Build a social link you
          own on the fly by configuring your social bot here.
        </div>
        <ConnectButton />
      </div>
    </div>
  )
}
