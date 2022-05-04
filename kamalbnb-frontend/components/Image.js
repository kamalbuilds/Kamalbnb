import { urlFor } from "../sanity"
/* eslint-disable @next/next/no-img-element */
const Image = ({ identifier, image }) => {
  return (
    <div className={identifier === "main-image" ? "main-image" : "image"}>
      <img src={urlFor(image).auto("format")} />
    </div>
  )
}

export default Image
