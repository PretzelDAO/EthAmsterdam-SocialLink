import SocialProfileCard from './SocialProfileCard'

export default function BotConnect() {
  const twit_connected = false
  return (
    <div className="w-full">
      Off-chain Profile:
      <div className="flex flex-col w-full">
        <span>Connected</span>
        <div class="flex-grow border-t border-gray-400"></div>
        {twit_connected ? (
          <SocialProfileCard
            icon={
              <img src="/images/twittericon.png" className="mx-auto h-16" />
            }
            link="https://twitter.com/i/oauth2/authorize?response_type=code&client_id=U3RrNDJpRDlKandnX1A5S2FTSDU6MTpjaQ&redirect_uri=https://lfgrow.eurotellogence.de/connectbot&scope=tweet.read%20users.read%20follows.read%20offline.access&state=state&code_challenge=challenger&code_challenge_method=plain"
          />
        ) : (
          <div className="pt-2 mb-5 text-gray-400">No connections</div>
        )}
        <span>Not connected</span>
        <div class="flex-grow border-t border-gray-400">
          {!twit_connected ? (
            <SocialProfileCard
              icon={
                <img src="/images/twittericon.png" className="mx-auto h-16" />
              }
              link="https://twitter.com/i/oauth2/authorize?response_type=code&client_id=U3RrNDJpRDlKandnX1A5S2FTSDU6MTpjaQ&redirect_uri=https://lfgrow.eurotellogence.de/connectbot&scope=tweet.read%20users.read%20follows.read%20offline.access&state=state&code_challenge=challenger&code_challenge_method=plain"
            />
          ) : (
            <div className="pt-2 mb-5 text-gray-400">
              No further available connections
            </div>
          )}
        </div>

        <span>Coming Soon</span>
        <div class="flex-grow border-t border-gray-400 flex flex-row">
          <SocialProfileCard
            icon={<img src="/images/twitchicon.png" className="mx-auto h-16" />}
            link="https://twitter.com"
            state={'disabled'}
          />
          <SocialProfileCard
            icon={
              <img src="/images/youtubeicon.png" className="mx-auto h-16" />
            }
            link="https://twitter.com"
            state={'disabled'}
          />
        </div>
      </div>
    </div>
  )
}
