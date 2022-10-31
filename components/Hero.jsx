import Image from './Image'

export default function Hero({ image, title }) {
  return (
    <div className='relative w-full overflow-hidden'>
      <div>
        <div className='absolute w-full h-full bg-black/50 z-10'></div>
        <Image
          classsName='absolute w-full object-cover object-top h-full inset-0 top-[4.68rem] '
          image={image}
          layout='fill'
          objectFit='cover'
          alt=''
        />

        <div className='relative container m-auto px-6 md:px-12 lg:px-7 z-10'>
          <div className='py-40 lg:py-56 text-center '>
            <h1 className='text-white font-bold text-4xl md:text-6xl lg:text-4xl xl:text-6xl'>{title}</h1>
            <p className='mt-8 text-gray-200'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt nam itaque sed eius modi error
              totam sit illum. Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!
            </p>
            <div className='mt-16 lg:space-y-0 md:w-full space-x-6 flex justify-center'>
              <button
                type='button'
                title='Start buying'
                className='py-3 px-6 text-center rounded-full transition border border-gray-200 active:bg-yellow-200 focus:bg-yellow-100 w-max'
              >
                <span className='block text-yellow-800 font-semibold text-sm'>About us</span>
              </button>
              <button
                type='button'
                title='Start buying'
                className='py-3 px-6 text-center rounded-full transition bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 w-max'
              >
                <span className='block text-yellow-900 font-semibold text-sm'>Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
