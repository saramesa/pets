interface Props {
  lives: number
}

const PetLives: React.FC<Props> = ({ lives }) => {
  const heart = "❤️"
  const maxLives = 9

  const livesToDisplay = Math.min(lives, maxLives)
  const hearts = new Array(livesToDisplay).fill(heart).join("")
  return (
    <span>
      <span>{hearts}</span>
      {lives > maxLives && <span>+{lives - maxLives} more</span>}
    </span>
  )
}

export default PetLives
