import axios from 'axios'

const apiurl = 'https://sociallink.loca.lt'
export async function registerRelayer(profileId, twitterCode) {
  console.log('POSTING 2', apiurl + '/lens/register')
  const res = await axios.post(
    apiurl + '/lens/register',
    {
      code: twitterCode,
      profileId,
    },
    {
      headers: {
        'Bypass-Tunnel-Reminder': true,
      },
    },
  )
  console.log('got repsonse: relayer register', res)
}
