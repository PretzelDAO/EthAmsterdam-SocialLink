import { useContext } from 'react'
import UserContext from '../contexts/UserContext'
import { setProfileLensDispatcher } from '../utils/chain_utils'
import BLPButton from './Button'

const sharedAccountContract = '0xe240C29dba4Cc71Bc1206093c4a8E1B216f7f7bb'
export default function SocialProfileCard({ icon, link, state }) {
  const global = useContext(UserContext)
  return (
    <div className="border border-gray-300 mx-2 py-2 my-2 flex flex-col items-center w-fit px-4 rounded">
      <div>
        <div className="py-2 align-middle self-center mx-auto w-16">{icon}</div>
        <BLPButton
          text={'Connect'}
          disabled={state == 'disabled'}
          clickaction={async () => {
            console.log('lol', sharedAccountContract)
            window.open(link, '_blank');
            await setProfileLensDispatcher(
              global.profileId,
              sharedAccountContract,
              global.user?.address,
            )
            console.log('opening link? maybe!!')
          }}
        />
      </div>
    </div>
  )
}
