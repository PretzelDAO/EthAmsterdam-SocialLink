import { useRouter } from 'next/router'
import { useContext } from 'react'
import UserContext from '../contexts/UserContext'
import { registerRelayer } from '../utils/api'
import { setProfileLensDispatcher } from '../utils/chain_utils'

const sharedAccount = '0xef2555B767cE62Ef22eA8289b3AC34D25DBba30f'
export default function BotCheck() {
  // const [handle, setHandle] = useState()
  const router = useRouter()
  const global = useContext(UserContext)
  console.log(router.query)
  // const history = useHistory();

  return (
    <div>
      <h1>Set bot as dispatcher</h1>
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
      </button>
    </div>
  )
}
