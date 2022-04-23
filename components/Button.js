export default function BLPButton({
  clickaction,
  text,
  className,
  disabled = false,
}) {
  console.log('class', text, className)
  return (
    <button
      onClick={clickaction}
      disabled={disabled}
      className={
        `font-semibold py-1 px-4  rounded-lg  text-gray-50 bg-hacker-accent-400 ` +
        (disabled ? 'opacity-30' : ' hover:bg-hacker-accent-200')
      }
    >
      {text}
    </button>
  )
}
