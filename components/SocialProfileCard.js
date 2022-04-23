import { useContext } from 'react'
import UserContext from '../contexts/UserContext'
import { setProfileLensDispatcher } from '../utils/chain_utils'
import BLPButton from './Button'

const sharedAccountContract = '0x7A97f733078C2DBe01c4638374dd047D2dABAd36'
export default function SocialProfileCard({ icon, link, state }) {
  const global = useContext(UserContext)
  return (
    <div className="border border-gray-300 mx-2 py-2 my-2 flex flex-col items-center w-fit px-4 rounded">
      <div>
        <span className="py-2">{icon}</span>
        <BLPButton
          text={'Connect'}
          disabled={state == 'disabled'}
          clickaction={async () => {
            console.log('lol', sharedAccountContract)
            window.open(link, '_blank')
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
