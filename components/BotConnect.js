import SocialProfileCard from './SocialProfileCard'

export default function BotConnect() {
  return (
    <div className="w-full">
      Off-chain Profile:
      <div className="flex flex-col w-full">
        <span>Connected</span>
        <div class="flex-grow border-t border-gray-400"></div>
        <SocialProfileCard
          icon={<img src="/images/twittericon.png" className="mx-auto" />}
          link="https://twitter.com"
        />
        <span>Not connected</span>
        <div class="flex-grow border-t border-gray-400">
          <div className="pt-2 mb-5 text-gray-400">
            No available connections
          </div>
        </div>

        <span>Coming Soon</span>
        <div class="flex-grow border-t border-gray-400">
          <SocialProfileCard
            icon={<img src="/images/twitchicon.png" className="mx-auto" />}
            link="https://twitter.com"
            state={'disabled'}
          />
        </div>
      </div>
    </div>
  )
}
