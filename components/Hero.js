import Image from './Image'

export default function Hero({ image, title }) {
  return (
    <div className="relative w-full overflow-hidden">
      <div>
        <Image
          classsName="absolute w-full object-cover object-top h-[90vh] inset-0 top-[4.68rem]"
          image={image}
          layout="fill"
          objectFit="cover"
        />

        <div className="relative container m-auto px-6 md:px-12 lg:px-7">
          <div className="py-40 lg:py-56 md:w-9/12 lg:w-7/12 ml-auto">
            <h1 className="text-gray-900 font-bold text-4xl md:text-6xl lg:text-4xl xl:text-6xl">{title}</h1>
            <p className="mt-8 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt nam itaque sed eius modi error totam sit illum. Voluptas doloribus
              asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!
            </p>
            <div className="mt-16 space-y-2 lg:space-y-0 md:w-max sm:space-x-6">
              <button
                type="button"
                title="Start buying"
                className="w-full py-3 px-6 text-center rounded-full transition border border-gray-200 active:bg-yellow-200 focus:bg-yellow-100 sm:w-max"
              >
                <span className="block text-yellow-800 font-semibold text-sm">About us</span>
              </button>
              <button
                type="button"
                title="Start buying"
                className="w-full py-3 px-6 text-center rounded-full transition bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max"
              >
                <span className="block text-yellow-900 font-semibold text-sm">Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
