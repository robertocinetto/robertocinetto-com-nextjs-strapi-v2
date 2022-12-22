import { useContext } from 'react'
import NextImage from 'next/image'
import Link from 'next/link'
import Moment from 'react-moment'
import FutureImage from 'next/future/image'

import Image from '../components/Image'
import Seo from '../components/seo'
import { fetchAPI } from '../lib/api'

import profileImg from '../public/roberto-cinetto-picture.jpeg'
import playingGuitar from '../public/roberto-cinetto-frontend-web-dev.webp'
import todolistitLogo from '../public/to-do-list-it-logo.svg'
import todolistit1 from '../public/todolistit-home-roberto-cinetto.png'
import todolistit2 from '../public/todolistit-todos-roberto-cinetto.png'
import fitnessTrackerLogo from '../public/fitness-tracker-logo.svg'
import fitnessTracker from '../public/fitness-tracker-roberto-cinetto.png'

import { ImLinkedin2, ImGithub } from 'react-icons/im'
import { DevicePhoneMobileIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

import { GlobalContext } from '../pages/_app'
import Footer from '../components/Footer'

import BackgroundSlider from 'react-background-slider'
import bg1 from '../public/roberto-cinetto-vancouver-frontend-developer.jpg'
import bg2 from '../public/roberto-cinetto-vancouver-web-developer.jpg'
import Button from '../components/atoms/Button'
const Slider = BackgroundSlider['react-background-slider'].default

export default function Home({ articles }) {
  const { defaultSeo, siteName, siteLogo } = useContext(GlobalContext)
  const { siteLogoDark } = useContext(GlobalContext)

  return (
    <div>
      <Seo />

      <header>
        <div className='px-10 border-t-4 border-yellow-400 mx-auto min-h-screen grid  place-items-center'>
          <div className='flex flex-col justify-center items-center w-full md:w-1/2 md:max-w-2xl mx-auto'>
            <div className='w-full px-5 py-5 md:py-10 -mt-20 rounded-md backdrop-blur-sm bg-white bg-opacity-5 border border-white/5'>
              <div className='flex-initial w-2/5 md:w-1/4 mx-auto rounded-full border-2 border-yellow-400 overflow-hidden my-6 md:my-16 xl:mb-0'>
                <NextImage
                  src={profileImg}
                  width={200}
                  height={200}
                  layout='responsive'
                  alt='Roberto Cinetto portrait'
                />
              </div>
              <div className='flex-initial w-full mx-auto md:w-3/4 text-center xl:text-left my-10 xl:mb-0 px-10'>
                <Image
                  image={siteLogoDark}
                  alt='Roberto Cinetto logo'
                />
              </div>
              <div className='text-center text-white mt-5 mb-10'>
                <p>Get in touch with me</p>
                <div className='text-center mt-3 flex justify-center gap-8'>
                  <a
                    href='https://github.com/robertocinetto'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <ImGithub className='w-[25px] h-[25px]' />
                  </a>
                  <a
                    href='https://www.linkedin.com/in/robertocinetto/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <ImLinkedin2 className='w-[25px] h-[25px]' />
                  </a>
                  <a href='tel:+12368869279'>
                    <DevicePhoneMobileIcon className='w-[25px] h-[25px]' />
                  </a>
                  <a
                    href='mailto:roberto.cinetto@gmail.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <EnvelopeIcon className='w-[25px] h-[25px]' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className='scroll-icon'>
          <span className='scroll-icon__wheel-outer'>
            <span className='scroll-icon__wheel-inner'></span>
          </span>
        </span>

        <Slider
          images={[bg1.src, bg2.src]}
          duration={10}
          transition={1}
        />
        {/* <div className='px-10 border-t-4 border-yellow-400 mx-auto min-h-[60vh] md:min-h-[75vh]'>
          <div className='flex flex-col md:flex-row justify-center items-center w-full md:w-3/4 mx-auto min-h-[60vh] md:min-h-[75vh]'>
            <div className='flex-initial w-2/4 md:w-1/4 mx-auto rounded-full border-4 border-yellow-400 overflow-hidden mb-10 xl:mb-0'>
              <NextImage
                src={profileImg}
                width={200}
                height={200}
                layout='responsive'
                alt='Roberto Cinetto portrait'
              />
            </div>
            <div className='flex-initial w-full md:w-3/4 text-center xl:text-left mb-10 xl:mb-0 px-10'>
              <Image
                image={siteLogoDark}
                alt='Roberto Cinetto logo'
              />
            </div>
          </div>
        </div> */}
        {/* <div className='min-h-[40vh] md:min-h-[25vh]'>
          <div className='text-center text-white mt-5 xl:mt-24'>
            <p>Get in touch with me:</p>
            <div className='text-center mt-3 flex justify-center gap-8'>
              <a
                href='https://github.com/robertocinetto'
                target='_blank'
                rel='noreferrer'
              >
                <ImGithub className='w-[25px] h-[25px]' />
              </a>
              <a
                href='https://www.linkedin.com/in/robertocinetto/'
                target='_blank'
                rel='noreferrer'
              >
                <ImLinkedin2 className='w-[25px] h-[25px]' />
              </a>
              <a href='tel:+12368869279'>
                <DevicePhoneMobileIcon className='w-[25px] h-[25px]' />
              </a>
              <a
                href='mailto:roberto.cinetto@gmail.com'
                target='_blank'
                rel='noreferrer'
              >
                <EnvelopeIcon className='w-[25px] h-[25px]' />
              </a>
            </div>
          </div>
        </div> */}
        <nav className='navigation w-full absolute bottom-4 text-white flex justify-center gap-10'>
          <span>
            <a href='#profile'>PROFILE</a>
          </span>
          <span>
            <a
              href='files/Roberto-Cinetto-Web-Developer-Resume.pdf'
              target='_blank'
              rel='noreferrer'
            >
              RESUME
            </a>
          </span>
          <span>
            <a href='#projects'>PROJECTS</a>
          </span>
        </nav>
      </header>

      <main
        id='profile'
        className='px-10 pb-10 bg-stone-800 text-white '
      >
        <div className='pt-32 md:flex gap-x-5 max-w-5xl mx-auto'>
          <div className='md:basis-1/4 '>
            <div className='mx-auto md:mr-0 rounded-full border-4 border-yellow-400 overflow-hidden mb-10 xl:mb-0  w-[150px] xl:w-[200px]'>
              <NextImage
                src={playingGuitar}
                width={200}
                height={200}
                layout='responsive'
                alt='Roberto Cinetto playing guitar'
              />
            </div>
          </div>
          <div className='md:basis-3/4'>
            <div>
              <h3 className='inline-block underline-custom '>Something about me</h3>
            </div>
            <div>
              <p>
                Let&apos;s get straight to the point: frontend with <strong>ReactJS</strong>, backend with{' '}
                <strong>NextJS</strong> and <strong>Strapi</strong>. This is what I&apos;m using right now as a
                developer for my clients and my projects. Also, I&apos;m a <strong>WordPress</strong> developer
                (websites/e-commerce/custom templates/plugins).
              </p>
              <p>
                Music: I love it. While I&apos;m working, I always listen to music, and as a guitarist, I love to play
                it. Before I moved here to Vancouver, I used to play in clubs with my brother Nicola (
                <a
                  href='https://www.facebook.com/thecinas'
                  target='_blank'
                  rel='noreferrer'
                >
                  The Cinas
                </a>
                ).
              </p>
              <p>
                I love video games too, but I grow old and there is always less time to play! And obviously, I love the
                web world: this keeps me learning new stuff and be amazed by all the new stuff that is coming out in
                these last years.
              </p>
              <p>
                I&apos;m a runner and above all I&apos;m a swimmer (I miss it in these crazy times!). But the sports I
                love to practice are the ones in team.
              </p>
              <p>I&apos;m married to Sharaf and we moved to Vancouver in March 2020.</p>
            </div>
          </div>
        </div>

        <div className='md:flex gap-x-5 max-w-5xl mx-auto mt-20'>
          <div className='md:basis-1/4 relative'>
            <div className='mb-10 xl:mb-0 xl:w-auto text-right '>
              <h3 className='underline-custom text-left md:text-right md:after-border'>Professional Summary</h3>
            </div>
          </div>
          <div className='md:basis-3/4'>
            <div>
              <p>
                Javascript has been my main programming language for two years and I&apos;m deeply increasing my
                knowledge of modern frameworks like <strong>React</strong> and <strong>Vue</strong> and the world around
                these technologies.
              </p>
              <p>
                Other than that, I&apos;m also a <strong>WordPress</strong> developer (plugin development, standard and
                e-commerce websites with prepackaged or custom templates). Experienced also on
                <strong>WordPress REST API</strong> with React as front end framework.
              </p>
              <p>
                I&apos;ve been able to set up extremely performing sites by hacking with cache and custom settings at
                the server level. From here I can develop a fully custom web marketing campaign aim to accomplish the
                business objective.
              </p>
              <p>As a web developer, I love to work and learn new technologies.</p>
            </div>
          </div>
        </div>

        <div className='md:flex gap-x-5 max-w-5xl mx-auto mt-20'>
          <div className='md:basis-1/4 relative'>
            <div className='mb-10 xl:mb-0 xl:w-auto text-right '>
              <h3 className='underline-custom text-left md:text-right md:after-border'>Main Skills</h3>
            </div>
          </div>
          <div className='md:basis-3/4 flex gap-5'>
            <div className='flex-1'>
              <ul className='custom-list'>
                <li>
                  Javascript dev with <strong>React</strong> framework
                </li>
                <li>
                  CSS libraries (TailwindCSS, Bootstrap, Material-UI, Foundation) and CSS organization style (SMACSS,
                  BEM)
                </li>
                <li>WordPress dev for websites and e-commerce</li>
              </ul>
            </div>
            <div className='flex-1'>
              <ul className='custom-list'>
                <li>Complete web marketing campaigns planning</li>
                <li>
                  Google Ads and Merchant Center, Google Analytics, Enhanced Ecommerce, Google Tag Manager, Google
                  Search Console, Pixel Facebook and Facebook Ads, G Suite, Google Ad Manager
                </li>
                <li>Team management</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='md:flex gap-x-5 max-w-5xl mx-auto mt-20'>
          <div className='md:basis-1/4 relative'>
            <div className='mb-10 xl:mb-0 xl:w-auto text-right '>
              <h3 className='underline-custom text-left md:text-right md:after-border'>Sub Skills</h3>
              <p className='pr-5 text-stone-400 text-left md:text-right'>
                An unordered list of skills, frameworks, software/applications I&apos;ve used or experienced
              </p>
            </div>
          </div>
          <div className='md:basis-3/4'>
            <p>
              AJAX, HAML/SLIM, SASS, XML, Capistrano, GIT, jQuery, Responsive Design, Adobe:
              Photoshop/Illustrator/InDesign/Premiere/After Effects, Cinema 4D, Mac OS X, Linux, Windows, SQL, Redis,
              MongoDB, ZSH, Visual Studio Code, UNIX shell, Chrome Dev Tools, Xcode, cross browser compatibility, Figma,
              Adobe XD.
            </p>
          </div>
        </div>
        <div className='text-center'>
          <Button
            href='files/Roberto-Cinetto-Web-Developer-Resume.pdf'
            className='mt-20'
            blank
          >
            DOWNLOAD RESUME
          </Button>
        </div>

        {/* PORTFOLIO SECTION */}
        <section
          id='projects'
          className='mt-20 pt-10'
        >
          <h2 className='text-center'>Personal Projects</h2>

          {/* TO DO LIST IT! */}
          <div className='bg-violet-700 text-center px-10 pt-10 -mx-10'>
            <div className='md:flex max-w-5xl mx-auto'>
              <div className='md:w-1/2 mb-10 md:mb-0'>
                <h3>To Do List It!</h3>
                <FutureImage
                  src={todolistitLogo}
                  alt='To Do List It logo'
                  style={{ marginInline: 'auto', marginBlock: '2rem' }}
                />
                <p>
                  Project type: <strong>Personal example project</strong>
                </p>
                <p>Tech stack:</p>
                <ul className='custom-list'>
                  <li>
                    framework: <strong>NextJS (ReactJS), Primereact, TailwindCSS</strong>
                  </li>
                  <li>
                    authentication: <strong>Firebase</strong>
                  </li>
                  <li>
                    database: <strong>Firestore</strong>
                  </li>
                  <li>
                    hosting: <strong>Vercel</strong>
                  </li>
                </ul>
                <Button
                  href='https://todolistit.robertocinetto.com/'
                  blank
                  noreferrer
                >
                  GO TO THE PROJECT
                </Button>
              </div>
              <div className='md:w-1/2 text-center'>
                <div className='px-3 pt-3 bg-slate-800 max-h-[500px] max-w-[350px] overflow-hidden rounded-t-3xl mx-auto'>
                  <div
                    className='max-h-[500px] max-w-[350px] rounded-t-xl 
                                  overflow-hidden overflow-y-scroll 
                                  scrollbar-thin scrollbar-thumb-violet-600 scrollbar-track-violet-900'
                  >
                    <FutureImage
                      src={todolistit1}
                      alt='To Do List It home'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FITNESS TRACKER */}
          <div className='bg-white text-center text-gray-800 px-10 pt-10 -mx-10'>
            <div className='md:flex max-w-5xl mx-auto'>
              <div className='md:w-1/2 mb-10 md:mb-0'>
                <h3>Fitness Tracker</h3>
                <FutureImage
                  src={fitnessTrackerLogo}
                  alt='To Do List It logo'
                  style={{ marginInline: 'auto', marginBlock: '2rem' }}
                />
                <p>
                  Project type: <strong>Personal example project</strong>
                </p>
                <p>Tech stack:</p>
                <ul className='custom-list'>
                  <li>
                    framework: <strong>NextJS (ReactJS), Primereact, TailwindCSS</strong>
                  </li>
                  <li>
                    authentication: <strong>Firebase</strong>
                  </li>
                  <li>
                    database: <strong>Firestore</strong>
                  </li>
                  <li>
                    hosting: <strong>Vercel</strong>
                  </li>
                </ul>
                <Button
                  href='https://fitnesstracker.robertocinetto.com/'
                  blank
                  noreferrer
                >
                  GO TO THE PROJECT
                </Button>
              </div>
              <div className='md:w-1/2 text-center'>
                <div className='px-3 pt-3 bg-slate-800 max-h-[500px] max-w-[350px] overflow-hidden rounded-t-3xl mx-auto'>
                  <div
                    className='max-h-[500px] max-w-[350px] rounded-t-xl 
                                  overflow-hidden overflow-y-scroll 
                                  scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-900'
                  >
                    <FutureImage
                      src={fitnessTracker}
                      alt='To Do List It home'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section>
          <div className='md:flex gap-x-5 max-w-5xl mx-auto mt-20'>
            <div className='md:basis-1/4 relative'>
              <div className='mb-10 xl:mb-0 xl:w-auto text-right '>
                <h3 className='underline-custom text-left md:text-right md:after-border'>Latest from blog</h3>
              </div>
            </div>
            <div className='md:basis-3/4 sm:flex gap-4'>
              {articles.map(article => {
                return (
                  <Link
                    key={article.attributes.slug}
                    href={`/article/${article.attributes.slug}`}
                  >
                    <a className='md:basis-1/2 group'>
                      <Image
                        classsName='group-hover:scale-[1.02] transition ease-in-out duration-500 '
                        image={article.attributes.cover}
                        alt=''
                      />
                      <h2 className='text-xl mb-1 mt-2 group-hover:text-yellow-400 transition'>
                        {article.attributes.title}
                      </h2>
                      <Moment
                        className='text-sm'
                        format='MMM, Do YYYY'
                      >
                        {article.attributes.published_at}
                      </Moment>
                    </a>
                  </Link>
                )
              })}
            </div>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  )
}

// export async function getStaticProps({ preview = null }) {
//   const allPosts = (await getAllPostsForHome(preview)) || []
//   return {
//     props: { allPosts, preview },
//   }
// }

export async function getStaticProps() {
  const articlesRes = await fetchAPI('/articles', {
    populate: '*',
  })

  return {
    props: {
      articles: articlesRes.data,
    },
  }
}
