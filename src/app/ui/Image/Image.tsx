import { FC, useState } from "react"
import { StyledImage } from "./Image.styles"

interface Props {
  src: string
  alt: string
  width?: number
  height?: number
}

const CustomImage: FC<Props> = ({ src, alt, width = 100, height = 100 }) => {
  const [error, setError] = useState(false)

  return (
    <StyledImage
      src={!error ? src : "/no_image.jpg"}
      alt={alt}
      placeholder="empty"
      width={width}
      height={height}
      onError={() => setError(true)}
      priority
    />
  )
}

export default CustomImage
