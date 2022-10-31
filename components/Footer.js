import { DevicePhoneMobileIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useContext } from 'react'
import { ImGithub, ImLinkedin2 } from 'react-icons/im'

import { GlobalContext } from '../pages/_app'
import Image from './Image'

export default function Footer() {
  const { siteLogoDark } = useContext(GlobalContext)

  return (
    <footer>
      <div className='pt-8 bg-gradient-to-b from-stone-800 to-yellow-900 md:pt-20'>
        <div className='container m-auto px-6 space-y-8 text-gray-400 md:px-12 lg:px-20'>
          <div>
            <div className='mb-6 gap-6 items-center justify-between py-6 sm:flex md:mb-16 md:py-0 md:space-y-6'>
              <Link
                href='/'
                aria-label='logo'
                className='flex space-x-2 items-center'
              >
                <a>
                  <Image
                    layout='intrinsic'
                    width='300'
                    height='70'
                    image={siteLogoDark}
                    alt='Roberto Cinetto logo'
                  />
                </a>
              </Link>
              <div className='flex flex-wrap flex-col-reverse gap-6 mt-6 sm:flex-row sm:mt-0 sm:items-center'>
                <div className='flex gap-6'></div>
              </div>
            </div>
            <div>
              <div className='pb-16 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5 text-gray-300'>
                {/* <div>
                  <h6 className='text-lg font-medium text-white'>Categories</h6>
                  <ul className='list-inside mt-4 space-y-4'>
                    <li>
                      <a
                        href='#'
                        className='hover:text-yellow-400 transition'
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='hover:text-yellow-400 transition'
                      >
                        Customers
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='hover:text-yellow-400 transition'
                      >
                        Enterprise
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='hover:text-yellow-400 transition'
                      >
                        Partners
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='hover:text-yellow-400 transition'
                      >
                        Jobs
                      </a>
                    </li>
                  </ul>
                </div> */}
                {/* <div>
                  <h6 className='text-lg font-medium text-white'>Products</h6>
                  <ul className='list-inside mt-4 space-y-4'>
                    <li>
                      <a
                        href='#'
                        className='hover:text-yellow-400 transition'
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='hover:text-yellow-400 transition'
                      >
                        Customers
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='hover:text-yellow-400 transition'
                      >
                        Enterprise
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='hover:text-yellow-400 transition'
                      >
                        Partners
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='hover:text-yellow-400 transition'
                      >
                        Jobs
                      </a>
                    </li>
                  </ul>
                </div> */}
                {/* <div>
                  <h6 className='text-lg font-medium text-white'>Ressources</h6>
                  <ul className='list-inside mt-4 space-y-4'>
                    <li>
                      <a
                        href='#'
                        className='hover:text-yellow-400 transition'
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='hover:text-yellow-400 transition'
                      >
                        Customers
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='hover:text-yellow-400 transition'
                      >
                        Enterprise
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='hover:text-yellow-400 transition'
                      >
                        Partners
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='hover:text-yellow-400 transition'
                      >
                        Jobs
                      </a>
                    </li>
                  </ul>
                </div> */}
                <div className='col-span-2 sm:col-span-3 md:col-span-2'>
                  <h6 className='text-lg font-medium text-white'>Contacts</h6>
                  <ul className='list-inside mt-4 space-y-4'>
                    <li className='flex gap-5'>
                      <a
                        href='https://github.com/robertocinetto'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <ImGithub className='w-[20px] h-[20px] hover:text-yellow-400 transition' />
                      </a>
                      <a
                        href='https://www.linkedin.com/in/robertocinetto/'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <ImLinkedin2 className='w-[20px] h-[20px] hover:text-yellow-400 transition' />
                      </a>
                      <a href='tel:+12368869279'>
                        <DevicePhoneMobileIcon className='w-[20px] h-[20px] hover:text-yellow-400 transition' />
                      </a>
                      <a
                        href='mailto:roberto.cinetto@gmail.com'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <EnvelopeIcon className='w-[20px] h-[20px] hover:text-yellow-400 transition' />
                      </a>
                    </li>
                    <li>
                      <a
                        href='tel:+12368869279'
                        className='hover:text-yellow-400 transition'
                      >
                        +1 236 886 9279
                      </a>
                    </li>
                    <li>
                      <a
                        href='mailto:roberto.cinetto@gmail.com'
                        className='hover:text-yellow-400 transition'
                      >
                        roberto.cinetto@gmail.com
                      </a>
                    </li>
                    {/* <li>
                      <form action=''>
                        <label
                          htmlFor='newsletter'
                          className='text-lg text-white'
                        >
                          Subscribe to our newsletter
                        </label>
                        <div className='relative mt-4'>
                          <input
                            type='email'
                            name='newsletter'
                            id='newsletter'
                            placeholder='Your email'
                            className='w-full px-4 py-3 ring-1 ring-yellow-700 rounded-xl bg-gray-900 bg-opacity-20 invalid:ring-red-400 invalid:outline-none'
                          />
                          <button
                            type='submit'
                            title='Submit'
                            className='absolute right-0 w-max py-3 px-6 text-center rounded-r-xl transition bg-yellow-400 hover:bg-yellow-300 active:bg-cyan-600 focus:bg-cyan-300'
                          >
                            <span className='text-gray-900 font-semibold'>Send</span>
                          </button>
                        </div>
                      </form>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className='py-8 border-t border-yellow-800 text-gray-200 flex justify-between'>
                <span>
                  &copy; robertocinetto.com - <span id='year'>{new Date().getFullYear()}</span>
                </span>
                <span>All right reserved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
