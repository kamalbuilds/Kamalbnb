import { urlFor } from "../sanity"
import Image from "next/image"

const Image = ({ identifier, image }) => {
  return (
    <div className={identifier === "main-image" ? "main-image" : "image"}>
      <Image src={urlFor(image).auto("format")} />
    </div>
  )
}

export default Image
