import { getStrapiMedia } from '../lib/media'
import NextImage from 'next/image'

const Image = ({ image, classsName, layout = 'responsive', objectFit = 'contain', width, height }) => {
  const { alternativeText } = image.data.attributes

  let theWidth = width ? width : image.data.attributes.width
  let theHeight = height ? height : image.data.attributes.height

  return (
    <div className={classsName}>
      <NextImage
        layout={layout}
        width={theWidth}
        height={theHeight}
        objectFit={objectFit}
        src={getStrapiMedia(image)}
        alt={alternativeText || ''}
      />
    </div>
  )
}

export default Image
