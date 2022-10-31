import { getStrapiMedia } from '../lib/media'
import NextImage from 'next/image'


type Props = {
  image: {
    data: {
      attributes: {
        width: string,
        height: string,
        alternativeText: string,
      }
    }
  },
  classsName: string,
  layout: string,
  objectFit: string,
  width: number,
  height: number,
}

const Image = ({ image, classsName, layout = 'responsive', objectFit = 'contain', width, height } :Props) => {
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
