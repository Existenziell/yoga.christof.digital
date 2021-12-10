import { FacebookProvider, EmbeddedPost } from 'react-facebook'
import { testimonials } from '../lib/testimonials'
import Head from 'next/head'
import Nav from '../components/Nav'
import Image from 'next/image'
import Blob from '../components/Blob'

const Testimonials = () => {
  return (
    <>
      <Head>
        <title>Testimonials | yoga.christof.digital</title>
        <link rel='icon' href='/favicon/favicon.ico' />
        <link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
        <meta name='description' content='Join me on a visual journey through my life | yoga.christof.digital | shift-happens' />
        <script async defer crossOrigin='anonymous' src='https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v12.0&appId=239066989437628&autoLogAppEvents=1' nonce='rqW0DIVj'></script>
      </Head>

      <Nav />

      <div className='flex flex-col items-center justify-content px-4 md:px-8 py-16 md:py-32 bg-cloth-pattern dark:bg-cloth-pattern-dark'>
        <h1 className='text-4xl mb-2'>Testimonials</h1>
        <p className='mb-12 max-w-sm text-center'>Let&apos;s see how students described their experience with shift_happens_yoga:</p>

        <Blob node={<Image src='/icons/rating.jpg' alt='Rating' width={500} height={328} />} />

        <div className='w-full flex flex-col space-y-8 mt-16'>
          {testimonials.map(tm => {
            return (
              <div key={tm}>
                <FacebookProvider appId='239066989437628' >
                  <EmbeddedPost href={tm} width='auto' />
                </FacebookProvider>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Testimonials
