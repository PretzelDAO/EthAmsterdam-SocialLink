import { useState } from 'react'
import { Tab } from '@headlessui/react'
import SocialProfileCard from '../components/SocialProfileCard'
import { useContext } from 'react'
import UserContext from '../contexts/UserContext'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const redirectPath = 'https://lfgrow.eurotellogence.de/connectbot'

export default function ConnectionTabs() {
  const twit_connected = true
  let [categories] = useState({
    'Not Connected': [
      <>
        {twit_connected ? (
          <SocialProfileCard
            icon={<img src="/images/w_twitter.svg" className="h-16 w-16" />}
            link={`https://twitter.com/i/oauth2/authorize?response_type=code&client_id=U3RrNDJpRDlKandnX1A5S2FTSDU6MTpjaQ&redirect_uri=${redirectPath}&scope=tweet.read%20users.read%20follows.read%20offline.access&state=state&code_challenge=challenger&code_challenge_method=plain`}
          />
        ) : (
          <div className="pt-2 mb-5 text-gray-400">No connections</div>
        )}
      </>,
    ],
    Connected: [
      <>
        {!twit_connected ? (
          <SocialProfileCard
            icon={<img src="/images/w_twitter.svg" className="h-16 w-16" />}
            link="https://twitter.com/i/oauth2/authorize?response_type=code&client_id=U3RrNDJpRDlKandnX1A5S2FTSDU6MTpjaQ&redirect_uri=https://lfgrow.eurotellogence.d
e/connectbot&scope=tweet.read%20users.read%20follows.read%20offline.access&state=state&code_challenge=challenger&code_challenge_method=plain"
          />
        ) : (
          <div className="pt-2 mb-5 text-gray-400">
            No further available connections
          </div>
        )}
      </>,
    ],
    'Coming Soon': [
      <SocialProfileCard
        icon={<img src="/images/twitchicon.png" className="mx-auto h-16" />}
        link="https://twitter.com"
        state={'disabled'}
        key="twitch"
      />,
      <SocialProfileCard
        icon={<img src="/images/youtubeicon.png" className="mx-auto h-16" />}
        link="https://twitter.com"
        state={'disabled'}
        key="youtube"
      />,
    ],
  })
  const global = useContext(UserContext)

  return (
    <>
      {global?.profileId && global.profile ? (
        <>
          <div className="flex align-middle">
            <img
              src="/images/profile.png"
              className="w-6 h-6 rounded-full mr-2"
            />
            <div className="text-md">{`${global.profile[3]} (${global.profileId})`}</div>
          </div>

          <div className="text-gray-400 text-sm mt-0">{`Your On-Chain Profile`}</div>
        </>
      ) : (
        'Please enter your On-Chain Profile'
      )}
      <div className="w-full max-w-md px-2 py-8 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex p-1 space-x-1 rounded-xl">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
                    'focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white shadow'
                      : 'bg-white hover:text-white text-blue-300',
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  'bg-white rounded-xl bg-gray-50',
                  'focus:outline-none focus:ring-2 ring-offset-2',
                )}
              >
                <ul>
                  {posts.map((post) => (
                    <>{post}</>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  )
}
