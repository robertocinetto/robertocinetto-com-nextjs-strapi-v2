import { useContext } from 'react'
import Hero from '../../components/Hero'
import Image from '../../components/Image'

import Seo from '../../components/seo'
import { fetchAPI } from '../../lib/api'

import { GlobalContext } from '../_app'

import Blocks from 'editorjs-blocks-react-renderer'
import edjsParser from 'editorjs-parser'

export default function Article({ article }) {
  const { siteLogo } = useContext(GlobalContext)
  const { content } = article.attributes

  const config = {
    image: {
      // use figure or img tag for images (figcaption will be used for caption of figure)
      // if you use figure, caption will be visible
      path: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}<url>`,
    },
  }
  const parser = new edjsParser(config)
  const content2 = parser.parse(JSON.parse(article.attributes.content))
  console.log(JSON.parse(article.attributes.content))

  const seo = {
    metaTitle: article.attributes.seo?.metaTitle,
    metaDescription: article.attributes.seo?.metaDescription,
    shareImage: article.attributes.cover,
    article: true,
  }

  function createMarkup() {
    // return { __html: article.attributes.content }
    return { __html: content2 }
  }

  return (
    <div>
      <Seo seo={seo}></Seo>
      <header>
        <nav className="fixed z-10 w-full border-b bg-white md:absolute md:bg-transparent">
          <div className="container m-auto px-2 md:px-12 lg:px-7">
            <div className="flex flex-wrap items-center justify-between py-4 gap-6 md:py-4 md:gap-0">
              <div className="w-full px-6 flex justify-between lg:w-max md:px-0">
                <a
                  href="#"
                  aria-label="logo"
                  className="flex space-x-2 items-center"
                >
                  <Image
                    layout="intrinsic"
                    width="200"
                    height="36"
                    image={siteLogo}
                    alt="Roberto Cinetto logo"
                  />
                </a>

                <button
                  aria-label="humburger"
                  id="hamburger"
                  className="relative w-10 h-10 -mr-2 lg:hidden"
                >
                  <div
                    aria-hidden="true"
                    id="line"
                    className="inset-0 w-6 h-0.5 m-auto rounded bg-yellow-900 transtion duration-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    id="line2"
                    className="inset-0 w-6 h-0.5 mt-2 m-auto rounded bg-yellow-900 transtion duration-300"
                  ></div>
                </button>
              </div>

              <div className="hidden w-full lg:flex flex-wrap justify-end items-center space-y-6 p-6 rounded-xl bg-white md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-7/12">
                <div className="text-gray-600 lg:pr-4">
                  <ul className="space-y-6 tracking-wide font-medium text-sm md:flex md:space-y-0">
                    <li>
                      <a
                        href="#"
                        className="block md:px-4 transition hover:text-yellow-700"
                      >
                        <span>Home</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block md:px-4 transition hover:text-yellow-700"
                      >
                        <span>Portfolio</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block md:px-4 transition hover:text-yellow-700"
                      >
                        <span>Services</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="w-full space-y-2 border-yellow-200 lg:space-y-0 md:w-max lg:border-l">
                  <button
                    type="button"
                    title="Start buying"
                    className="w-full py-3 px-6 text-center rounded-full transition active:bg-yellow-200 focus:bg-yellow-100 sm:w-max"
                  >
                    <span className="block text-yellow-800 font-semibold text-sm">Sign up</span>
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
        </nav>
      </header>
      <Hero
        image={article.attributes.cover}
        title={article.attributes.title}
      />
      <div
        className="prose lg:prose-xl my-10 mx-auto"
        dangerouslySetInnerHTML={createMarkup()}
      ></div>
      {/* {content2} */}
      {/* <Blocks data={JSON.parse(content)} /> */}
    </div>
  )
}

export async function getStaticPaths() {
  const articlesRes = await fetchAPI('/articles', { fields: ['slug'] })

  return {
    paths: articlesRes.data.map(article => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const articlesRes = await fetchAPI('/articles', {
    filters: {
      slug: params.slug,
    },
    populate: {
      seo: { populate: '*' },
      cover: { populate: '*' },
    },
  })

  return {
    props: {
      article: articlesRes.data[0],
    },
  }
}
