import { useContext, useState } from 'react'
import BotConnect from '../components/BotConnect'
import ConnectButton from '../components/ConnectButton'
import ConnectProfile from '../components/ConnectProfile'
import CreateProfileModal from '../components/CreateProfileModal'
import UserContext from '../contexts/UserContext'

export default function BotCheck() {
  // const [handle, setHandle] = useState()
  const global = useContext(UserContext)
  // const history = useHistory();
  let toshow
  if (global.profileId) {
    console.log('logged in')
    // history.push('/')
    toshow = <BotConnect />
  } else {
    toshow = global.user ? (
      <div className="flex flex-row ">
        <CreateProfileModal />
        <ConnectProfile />
      </div>
    ) : (
      <ConnectButton />
    )
  }

  return (
    <div className="w-full flex justify-center my-20">
      <div
        className="pl-8 min-w-md max-w-[50vw]
                      rounded-md
                      overflow-hidden
                      shadow-2xl
                      w-5/6
                      bg-gray-50
                      flex
                      flex-col
                      items-start
                      py-4
                      font-light
                      px-4"
      >
        <div className="py-3 text-2xl font-bold mb-0 pb-0">Connect your Social Accounts</div>
        <div className="py-3 text-sm text-gray-500 mt-0 pt-0">By connecting your socials you can grow your web3 network with minimum effort</div>
        {toshow}
      </div>
    </div>
  )
}