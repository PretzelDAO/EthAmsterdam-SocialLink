import BLPButton from './Button'

export default function SocialProfileCard({ icon, link, state }) {
  return (
    <div className="border border-gray-300 mx-2 py-2 my-2 flex flex-col items-center w-fit px-4 rounded">
      <div>
        <span className="py-2">{icon}</span>
        <BLPButton
          text={'Connect'}
          disabled={state == 'disabled'}
          clickaction={() => window.open(link, '_blank')}
        />
      </div>
    </div>
  )
}
