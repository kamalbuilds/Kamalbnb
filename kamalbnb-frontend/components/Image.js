import { urlFor } from "../sanity"
import Image from "next/image"

const Image2 = ({ identifier, image }) => {
  return (
    <div className={identifier === "main-image" ? "main-image" : "image"}>
      <Image src={urlFor(image).auto("format")} />
    </div>
  )
}

export default Image2
