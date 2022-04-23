import Link from 'next/link'
import { useContext, useState } from 'react'
import UserContext from '../contexts/UserContext'
import ConnectButton from './ConnectButton'
import ConnectProfile from './ConnectProfile'
import CreateHackathonModal from './CreateHackathonModal'
import CreateProfileModal from './CreateProfileModal'

export default function Header() {
  const [collapsed, setCollapsed] = useState(true)
  const global = useContext(UserContext)
  return (
    <nav className="flex items-center justify-between flex-wrap bg-hacker-color-200 px-6 w-full lg:sticky lg:top-0 z-10 py-2 font-thin">
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:h-auto">
        <div className="text-md lg:flex-grow">
          <Link
            href="https://github.com/PretzelDAO/EthAmsterdam-SocialLink"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="block mt-4 lg:inline-block lg:mt-0 text-gray-100 hover:text-white mr-4 hover:underline">
              Docs
            </div>
          </Link>
        </div>
        <div className="flex items-center font-thin flex-no-shrink text-white mr-6">
          <span>Social Link powered by </span>
          <img src={'/images/pretzeldao_white.svg'} className="h-6 px-4" />
        </div>

        <div className="lg:m-0 my-2">
          <ConnectButton />
        </div>
      </div>
    </nav>
  )
}
