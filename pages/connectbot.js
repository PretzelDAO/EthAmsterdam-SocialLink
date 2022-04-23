import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import UserContext from '../contexts/UserContext'
import { registerRelayer } from '../utils/api'
import { setProfileLensDispatcher } from '../utils/chain_utils'

export default function BotCheck() {
  const [success, setSuccess] = useState()
  const router = useRouter()
  const global = useContext(UserContext)
  console.log(router.query)
  // const history = useHistory();
  useEffect(async () => {
    var pId = global.profileId
    if (!pId) {
      pId = localStorage.getItem('profileId')
    }
    console.log('profileId', pId)
    await registerRelayer(pId, router.query.code)
    setSuccess(true)
  }, [])

  return (
    <div>
      {success ? (
        <div className="items-center"> Success</div>
      ) : (
        <div className=" w-8 h-8 border-b-2 border-hacker-color-200 rounded-full animate-spin"></div>
      )}
      {/* <h1>Set bot as dispatcher</h1>
      profileid: {global.profileId}
      <button
        onClick={async () => {
          var pId = global.profileId
          if (!pId) {
            pId = localStorage.getItem('profileId')
          }
          console.log('profileId', pId)
          await registerRelayer(pId, router.query.code)
        }}
      >
        Set
      </button> */}
    </div>
  )
}
