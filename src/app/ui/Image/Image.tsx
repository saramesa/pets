import { FC, useState } from "react"
import { StyledImage } from "./Image.styles"

interface Props {
  src: string
  alt: string
}

const CustomImage: FC<Props> = ({ src, alt }) => {
  const [error, setError] = useState(false)

  return (
    <StyledImage
      src={!error ? src : "/no_image.jpg"}
      alt={alt}
      placeholder="empty"
      width={100}
      height={100}
      onError={() => setError(true)}
      priority
    />
  )
}

export default CustomImage
